import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'SteamClone';
  some: any = localStorage.getItem('authorization');
  isLogin: any = JSON.parse(this.some);
}
