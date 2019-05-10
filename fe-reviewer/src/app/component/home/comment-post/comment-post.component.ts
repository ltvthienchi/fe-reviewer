import {Component, Input, OnInit} from '@angular/core';
import {HttpService} from '../../../services/http/http.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-comment-post',
  templateUrl: './comment-post.component.html',
  styleUrls: ['./comment-post.component.css']
})
export class CommentPostComponent implements OnInit {

  @Input() idProduct;
  arrTest:any = [];
  dataComment:any = [];
  valueComment:any;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.getData();
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
        idReviewer: item.idReviewer,
        idReply: item.idComment,
        isReply: true,
        role: localStorage.getItem('role'),
        content: this.valueComment,
        dateCreate: new Date()
      };
      this.http.createComment(newComment).subscribe(res => {
        this.valueComment = '';
        $('.reply-comment').hide();
        this.getData();
      });
    }
  }

}
