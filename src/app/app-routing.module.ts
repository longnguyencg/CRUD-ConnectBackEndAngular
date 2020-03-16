import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CommonModule } from '@angular/common';
import {UserListComponent} from './user-list/user-list.component';
import {UserAddComponent} from './user-add/user-add.component';
import {UserEditComponent} from './user-edit/user-edit.component';

const routes: Routes = [
  { path: 'user', component: UserListComponent },
  { path: 'user/create', component: UserAddComponent },
  { path: 'user/edit/:id', component: UserEditComponent }
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
