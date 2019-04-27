import {AbstractControl} from '@angular/forms';

export function validatorEmail(c: AbstractControl) {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const myRe = regex.exec(c.value);
  if (!myRe) return { email: 'Please enter valid email!' };
  return null;
}

export function validatorRequired(c: AbstractControl) {
  const check = c.value.split()[0] === ' ';
  if (!c.value) return { required: 'Field is required' };
  if (check) return { required: 'Please do not press white space in first!' };
  return null;
}

export function validatorPassword(c: AbstractControl) {
  const regex = /^$|\s+/;
  const myRe = regex.exec(c.value);
  if (!c.value) return { password: 'Field is required' };
  if (myRe) return { password: 'Please no enter white space' };
  if (c.value.length < 6 || c.value.label > 20) return { password: 'Password has be length from 6 to 20' };
  return null;
}

export function validatorConfirmPassword(c: AbstractControl) {
  if (!c.value) return { confirmPassword: 'Field is required' };
  if (c.parent) {
    const password = c.parent.controls['password'].value;
    const confirmPassword = c.value;
    if (password !== confirmPassword) return { confirmPassword: 'Password must be equal confirm password' };
  }
  return null;
}

export function validatorName(c: AbstractControl) {
  const regex = /^[a-zA-Z0-9]{1,50}$/;
  const myRe = regex.exec(c.value);
  if (c.value.length > 50) return { name: 'Field must be greater 50' };
  if (!myRe) return { name: 'Please no enter special character' };
  return null;
}

export function validatorPhone(c: AbstractControl) {
  const regex = /(09|03|07|08|05)+([0-9]{8})\b/;
  const myRe = regex.exec(c.value);
  if (c.value.length > 10) return { phone: 'Phone number must be 10 number' };
  if (!myRe) return { phone: 'Invalid phone number' };
  return null;
}

export function validatorWebsite(c: AbstractControl) {
  const regex = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;
  const regexTwo = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z0-9]+\.[a-z0-9]+(\/[a-zA-Z0-9#-]+\/?)*$/;
  const myRe = regex.exec(c.value);
  const myRe2 = regexTwo.exec(c.value);
  if (myRe || myRe2) return null;
  return { website: 'Invalid Website Url' };
}

//
