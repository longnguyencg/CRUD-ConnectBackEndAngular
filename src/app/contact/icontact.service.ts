import {Injectable} from '@angular/core';
import {IContact} from './IContact';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {log} from 'util';

@Injectable({
  providedIn: 'root'
})
export class IContactService {
  url = 'http://127.0.0.1:8000/api/contacts';
  contactList: IContact[] = [];
  constructor(private http: HttpClient) {
  }
}
