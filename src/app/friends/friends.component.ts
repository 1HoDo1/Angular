import { Component, OnInit } from '@angular/core';
export interface UsersProps {
  id: number;
  username: string;
}
@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit {
  public url: string = '../../assets/MOCK_USERS_DATA.json';
  public info: any = localStorage.getItem('profile');
  public user: any = JSON.parse(this.info);
  public friends: any = [];
  public name: any;
  users: UsersProps[] = [];
  people: UsersProps[] = [];
  constructor() {}
  async getUsers(url: string) {
    this.friends = this.user.friends;
    const response = await fetch(url);
    console.log(response);
    let result = await response.json();
    JSON.parse(JSON.stringify(result));
    this.users = result.map((user: UsersProps) => user);
    console.log('Это он', this.users);
  }
  findUser(value: string) {
    return this.users.filter((el) => Object.values(el).includes(value));
  }
  showUsers(name: string) {
    return (this.people = this.users.filter((el: any) =>
      el.username.includes(name)
    ));
  }

  addFriend(friend: object) {
    this.friends.push(friend);
    this.user.friends.push(friend);
    this.users = this.users.filter((el: any) => el !== friend);
    this.people = this.people.filter((el: any) => el !== friend);

    localStorage.setItem('profile', JSON.stringify(this.user));
    console.log(this.user);
  }
  removeFriend(friend: object) {
    this.friends = this.friends.filter((el: any) => el !== friend);
  }
  ngOnInit() {
    this.getUsers(this.url);
  }
}
