import {Component, Input, OnInit} from '@angular/core';
import {HttpService} from '../../../services/http/http.service';

@Component({
  selector: 'app-comment-post',
  templateUrl: './comment-post.component.html',
  styleUrls: ['./comment-post.component.css']
})
export class CommentPostComponent implements OnInit {

  @Input() idProduct;
  arrTest:any = [];
  dataComment:any = [];

  constructor(private http: HttpService) { }

  ngOnInit() {
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
      console.log(this.dataComment);
    })
  }

}
