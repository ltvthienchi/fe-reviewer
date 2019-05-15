import {Component, Input, OnInit} from '@angular/core';
import {HttpService} from '../../../services/http/http.service';
import * as $ from 'jquery';
import {IdUserService} from '../../../services/data-global/id-user.service';
import {NotificationService} from '../../../services/notification/notification.service';
import {NotifierService} from 'angular-notifier';
import {JwtHelperService} from '@auth0/angular-jwt';
@Component({
  selector: 'app-comment-post',
  templateUrl: './comment-post.component.html',
  styleUrls: ['./comment-post.component.css']
})
export class CommentPostComponent implements OnInit {

  @Input() idProduct;
  isCheck:boolean;
  arrTest:any = [];
  dataComment:any = [];
  valueComment:any;
  userInfo:any;
  idUser;
  constructor(private http: HttpService, private notifier: NotifierService,
              private idUserSer: IdUserService) { }

  ngOnInit() {
    this.idUser = this.idUserSer.getId();
    this.getData();
    const data = {
      email: localStorage.getItem('email'),
      role: localStorage.getItem('role')
    };
    const userInfo = JSON.stringify(data);
    this.http.getReviewerInfo(userInfo).subscribe(res => {
      this.userInfo = res;
    });
  }

  getData() {
    this.http.getCommentByProduct(this.idProduct).subscribe(res => {
      this.arrTest = res;
      const arr = [];
      this.arrTest.forEach(itemOne => {
        if(!itemOne.reply){
          itemOne['children'] = [];
          arr.push(itemOne);
        } else {
          this.arrTest.find(itemTwo => {
            if(itemOne.idReply === itemTwo.idComment) {
              itemTwo.children.push(itemOne);
            }
          })
        }

      });
      this.dataComment = arr;
      if (this.dataComment.length < 3) {
        this.isCheck = true;
      } else {
        this.isCheck = false;
      }
    })
  }

  replyComment(item) {
    const id = '#reply-'+item.idComment;
    $('.reply-comment').hide();
    $(id).css('display', 'block');
  }

  postComment(item) {
    if (this.valueComment) {
      let newComment = {
        idProduct: item.idProduct,
        idReviewer: this.idUser,
        idReply: item.idComment,
        isReply: true,
        role_user: localStorage.getItem('role'),
        content: this.valueComment,
        dateCreate: new Date()
      };
      console.log(newComment);
      this.http.createComment(newComment).subscribe(res => {
        this.valueComment = '';
        $('.reply-comment').hide();
        this.getData();
      });
    }
  }

  showAllComment() {
    const id = '#btnShowAllComment'+this.idProduct;
    $(id).click();
    this.isCheck = true;
  }

  isRouterName(id) {
    const checkRole = id.split('_')[0] !== 'REVIEWER';
    if (checkRole) {
      return '/company/' + id;
    } else {
      return '/user-page/' + id;
    }
  }

  addLabel(idLabel) {
    const id = '#' + idLabel;
    $(id).next().attr('aria-labelledby', id);
  }

  reportComment(idComment) {
    this.http.reportComment(idComment).subscribe(res => {
      if(res['result'] === "success") {
        this.notifier.notify('success', 'Thanks you for report');
      } else {
        this.notifier.notify('error', 'Reporting had error, please try again');
      }
    })
  }

}
