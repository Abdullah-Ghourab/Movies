import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

FormGroup
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  errors: string = ""

  RegisterForm = new FormGroup({
    first_name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    last_name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^[A-Za-z0-9@&]{3,8}$')]),
    age: new FormControl(null, [Validators.required, Validators.min(12), Validators.max(60)])
  })
  RegisterSubmit(registerInfo: any) {
    this._AuthService.registerv2(registerInfo.value)
    this.Router.navigate(['/login'])
    // .subscribe((response)=>{
    //   if(response.message =='success')
    //   {
    //     this.Router.navigate(['/login'])
    //   }
    //   else {
    //     this.errors = response.errors.email.message
    //   }
    // })
  }

  constructor(private _AuthService: AuthService, private Router: Router) {

  }
  ngOInit(): void {

  }
}
