import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

FormGroup
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class loginComponent {

errors:string=""

  loginForm = new FormGroup({
    email: new FormControl(null,[Validators.required ,Validators.email]),
    password: new FormControl(null,[Validators.required ,Validators.pattern('^[A-Za-z0-9@&]{3,8}$')]),
  })
loginSubmit(loginInfo:any) {
  debugger
 if( this._AuthService.loginv2(loginInfo.value)){
  localStorage.setItem('userToken' , JSON.stringify(this._AuthService.loginv2(loginInfo.value)))
   this.Router.navigate(['/home']);
 }
  // .subscribe((response)=> {
  //   if(response.message == 'success'){
  //   this.Router.navigate(['/home']);
  //   localStorage.setItem('userToken' , response.token)
  //   this._AuthService.saveUser()
  //   } else {
  //     this.errors = response.message
  //   }
  // })
}

constructor(private _AuthService: AuthService ,private Router:Router){

}
ngOInit():void {

}
}
