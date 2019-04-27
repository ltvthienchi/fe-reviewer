import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {
  validatorConfirmPassword,
  validatorEmail,
  validatorRequired,
  validatorPassword,
  validatorName
} from '../../services/validator/validator';
import {Company} from '../../model/company.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  normalForm: FormGroup;
  validatorForm = {
    normalForm: true
  };
  company: Company = new Company();
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.normalForm = this.formBuilder.group({
      email: ['abc@gmail.com', [validatorRequired, validatorEmail]],
      password: ['123456', [validatorPassword]],
      confirmPassword: ['123456', [validatorConfirmPassword]],
      firstName: ['', [validatorRequired, validatorName]],
      lastName: ['', [validatorRequired, validatorName]],
    });
  }

  submitNormalForm() {
    if (this.normalForm.status === 'INVALID') {
      this.validatorForm.normalForm = false;
      console.log(this.normalForm);
    } else {
      this.validatorForm.normalForm = true;
    }
  }

  // createCompany() {
  //     this.companyService.createUser(this.user)
  //       .subscribe( data => {
  //         data. == tre
  //       });
  // }
}
