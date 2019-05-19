import { Component, OnInit } from '@angular/core';
import {IdUserService} from '../../../services/data-global/id-user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  idUser;
  constructor(private userSer: IdUserService) { }

  ngOnInit() {
    this.idUser = this.userSer.getId();
  }

}
