import { Component, OnInit } from '@angular/core';
export interface CardProps {
  id: number;
  title: string;
  price: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  public url: string = '../../assets/MOCK_DATA.json';
  public info: any = localStorage.getItem('profile');
  public user: any = JSON.parse(this.info);
  title: string = '';
  price: string | number = '';
  public data: any = localStorage.getItem('games');
  public cards: CardProps[] = [];
  async getData(url: string) {
    this.cards = JSON.parse(this.data);
    if (this.cards == null) {
      const response = await fetch(url);
      let result = await response.json();
      JSON.parse(JSON.stringify(result));
      this.cards = result.map((card: CardProps) => card);
      return localStorage.setItem('games', JSON.stringify(this.cards));
    } else {
      return this.cards;
    }
  }
  addGame(card: CardProps) {
    this.cards = this.cards.filter((el) => el.id !== card.id);
    this.user.games.push(card);
    localStorage.setItem('games', JSON.stringify(this.cards));
    return localStorage.setItem('profile', JSON.stringify(this.user));
  }
  async ngOnInit() {
    await this.getData(this.url);
  }
}
