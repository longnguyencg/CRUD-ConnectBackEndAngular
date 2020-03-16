import {Injectable} from '@angular/core';
import {IUser} from './IUser';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {log} from 'util';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  userList: IUser[] = [];
  url = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url + 'users');
  }

  getUserById(id): Observable<IUser> {
    return this.http.get<IUser>(this.url + 'users/' + id);
  }

  add(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.url + 'users', user);
  }

  update(id, user): Observable<IUser> {
    return this.http.put<IUser>(this.url + 'users/' + id, user);
  }

  delete(id) {
    return this.http.delete<IUser>(this.url + 'users/' + id);
  }
}
