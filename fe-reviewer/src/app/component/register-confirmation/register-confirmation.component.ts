import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user-service/user.service';

@Component({
  selector: 'app-register-confirmation',
  templateUrl: './register-confirmation.component.html',
  styleUrls: ['./register-confirmation.component.css']
})
export class RegisterConfirmationComponent implements OnInit {
  private idAccount: string;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.idAccount = params['idAccount'];
      // console.log(date); // Print the parameter to the console.
    });
  }

  ngOnInit() {
  }

  confirmRegister() {
    this.userService.confirmationAccount(this.idAccount).subscribe((data: any) => {
      console.log('data', data);
if (data.status === 'SUCCESS') {
        this.router.navigate(['/login']);
      }
    });
  }

}

