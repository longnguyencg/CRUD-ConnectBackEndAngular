import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserListComponent} from './user-list/user-list.component';
import {InputSearchComponent} from './input-search/input-search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserAddComponent} from './user-add/user-add.component';
import {AppRoutingModule} from './app-routing.module';
import {UserEditComponent} from './user-edit/user-edit.component';
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    InputSearchComponent,
    UserAddComponent,
    UserEditComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
