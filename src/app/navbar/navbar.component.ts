import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isLogin: boolean = false;
  constructor(private _auth: AuthService) {
    this._auth.currentUser.subscribe(() => {
      if (this._auth.currentUser.getValue() != null) {
        this.isLogin = true
      } else {
        this.isLogin = false
      }
    })




  }
  get isLogedin() {
    return localStorage.getItem('userToken')
  }
  logout() {
    this._auth.logout()
  }

}
