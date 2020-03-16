import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {UserServiceService} from '../user/user-service.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {IUser} from '../user/IUser';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  editForm;
  user;
  index;

  constructor(protected fb: FormBuilder,
              protected userService: UserServiceService, protected router: Router, protected route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.index = this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(this.index).subscribe(next => {
      this.user = next;
      this.editForm = this.fb.group({
        name: [this.user.name, [Validators.required, Validators.minLength(4)]],
        age: [this.user.age, [Validators.required]],
        phone: [this.user.phone, [Validators.required]],
      });
    });
  }

  onSubmit(data, id) {
    const user: IUser = {
      name: data.name,
      age: data.age,
      phone: data.phone
    };
    this.userService.update(id, user).subscribe(next => {
    });
    this.router.navigate(['/user']);
  }

  get name() {
    return this.editForm.get('name');
  }

  get age() {
    return this.editForm.get('age');
  }

  get phone() {
    return this.editForm.get('phone');
  }
}
