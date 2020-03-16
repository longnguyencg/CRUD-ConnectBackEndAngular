import {Component, Directive, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';

import {IUser} from '../user/IUser';
import {UserServiceService} from '../user/user-service.service';
import {Router} from '@angular/router';
import {log} from 'util';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],

})
export class UserListComponent implements OnInit {
  data: IUser[] = [];
  count;
  userList: IUser[] = [];
  text: string;

  index() {
    this.userService.getAll().subscribe(data => this.data = data);
    this.userService.getAll().subscribe(data => this.userList = data);
  }

  filterSeach(value): IUser[] {
    return this.data.filter(user => user.name.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }

  searchText(value) {
    this.text = value;
    if (this.filterSeach(this.text).length === 0) {
      this.userList = this.data;
    } else {
      this.userList = this.filterSeach(this.text);
    }
  }

  constructor(protected userService: UserServiceService, protected router: Router) {
  }

  delete(id) {
    for (let i = 0; i < this.userList.length; i++) {
      if (this.userList[i].id === id) {
        this.userList.splice(i, 1);
      }
    }
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id === id) {
        this.data.splice(i, 1);
      }
    }
    this.userService.delete(id).subscribe(next => {
    });
  }

  ngOnInit(): void {
    this.index();
  }
}

