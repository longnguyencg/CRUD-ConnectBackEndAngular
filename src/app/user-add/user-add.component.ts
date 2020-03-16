import {Component, OnInit} from '@angular/core';
import {IUser} from '../user/IUser';
import {UserServiceService} from '../user/user-service.service';
import {FormBuilder, Validators} from '@angular/forms';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  addForm;

  constructor(private userService: UserServiceService, private fb: FormBuilder, private route: Router) {
  }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      age: ['', [Validators.required, Validators.maxLength(10)]],
      phone: ['', [Validators.required]]
    });
  }

  onSubmit(value) {
    const user: IUser = {
      name: value.name,
      age: value.age,
      phone: value.phone
    };
    this.userService.add(user).subscribe(next => {});
    this.route.navigate(['/user']);
  }

  get name() {
    return this.addForm.get('name');
  }

  get age() {
    return this.addForm.get('age');
  }

  get phone() {
    return this.addForm.get('phone');
  }
}
