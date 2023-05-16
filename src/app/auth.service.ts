import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser = new BehaviorSubject(null);
  constructor(private _HttpClient: HttpClient, private router: Router) {
    // if (localStorage.getItem('userToken')!= null){
    //   this.saveUser()
    // }
  }
  // saveUser(){
  //   let Token:any = localStorage.getItem('userToken')
  //   this.currentUser.next(jwtDecode(Token))
  // }
  register(FormData: any): Observable<any> {
    FormData['roleName'] = 'Company'
    FormData.userName = FormData.email
    FormData.companyName = FormData.first_name

    return this._HttpClient.post('https://hrapi.gtwit.net/api/register', FormData)
  }
  login(FormData: Object): Observable<any> {
    return this._HttpClient.post('https://hrapi.gtwit.net/api/login', FormData)
  }
  registerv2(FormData: any) {
    if (this.loginv2(FormData)) {
      alert('hi')
      return
    }
    let accounts = []
    if (localStorage.getItem('accounts')) {
      accounts = JSON.parse(localStorage.getItem('accounts') || '')
    }
    accounts.push(FormData)
    localStorage.setItem('accounts', JSON.stringify(accounts))
  }
  loginv2(FormData: any) {
    if (!localStorage.getItem('accounts')) {
      return
    }
    const accounts = JSON.parse(localStorage.getItem('accounts') || '')
    return accounts.find((a: any) => a.email == FormData.email && a.password == FormData.password)
  }
  logout() {
    localStorage.removeItem('userToken')
    this.router.navigate(['/login'])
  }
}



