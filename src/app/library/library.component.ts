import { Component, OnInit } from '@angular/core';
import { CardProps } from '../card/card.component';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
})
export class LibraryComponent implements OnInit {
  public games: CardProps[] = [];
  public info: any = localStorage.getItem('profile');
  public user: any = JSON.parse(this.info);
  showLibrary() {
    this.games = this.user.games;
    console.log(this.games);
    this.games.forEach((el) => console.log(el));
    return this.games;
  }
  ngOnInit() {
    this.showLibrary();
  }
}
