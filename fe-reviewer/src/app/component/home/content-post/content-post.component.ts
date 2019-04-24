import { Component, OnInit, Input } from '@angular/core';
import {AuthGuardService} from '../../../services/auth/auth-guard.service';

@Component({
  selector: 'app-content-post',
  templateUrl: './content-post.component.html',
  styleUrls: ['./content-post.component.css']
})
export class ContentPostComponent implements OnInit {

  @Input() item;
  constructor(private authGuard: AuthGuardService) { }

  ngOnInit() {
  }

  checkAuthGuard() {
    return this.authGuard.canActivate();
  }

}
