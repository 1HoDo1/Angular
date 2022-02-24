import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public info: any = localStorage.getItem('profile');
  public user: any = JSON.parse(this.info);
  save(username: string, email: string, age: string) {
    this.user = JSON.parse(this.info);
    this.user.username = username;
    this.user.email = email;
    this.user.age = age;
    localStorage.setItem('profile', JSON.stringify(this.user));
  }
  ngOnInit() {
    return (this.user = JSON.parse(this.info));
  }
}
