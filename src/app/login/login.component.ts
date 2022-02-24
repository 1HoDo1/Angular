import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  authorization: any = localStorage.getItem('authorization');
  public isLogin: any = JSON.parse(this.authorization);
  public user: any;
  login(userEmail: any, userPassword: any, loginForm: any): any {
    debugger;
    console.log(this.isLogin);
    if (userEmail.value.includes('@') && userPassword.value.length > 8) {
      this.user = new User(userEmail.value, userPassword.value);
      this.isLogin = true;
      console.log(this.user);
      localStorage.setItem('authorization', JSON.stringify(this.isLogin));
      localStorage.setItem('profile', JSON.stringify(this.user));
    } else {
      loginForm.reset();
    }
  }
}
class User {
  email: string;
  password: string;
  age: number | null;
  username: string | null;
  games: Array<object> | null;
  friends: Array<object> | null;
  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
    this.age = null;
    this.username = null;
    this.games = [];
    this.friends = [];
  }
}
