import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user-service';

@Injectable()
export class HttpAthClient {

  constructor(private http: HttpClient, private userService: UserService) {}

  createHeader() {
    const session = this.userService.session();
    if (session.isAuthorized) {
      return { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + session.accessToken }) };
    } else {
      return { headers: new HttpHeaders() };
    }
  }

  get(url) {
    const headers = this.createHeader();
    return this.http.get(url, headers);
  }

  post(url, data) {
    const headers = this.createHeader();
    return this.http.post(url, data, headers);
  }

  delete(url) {
    const headers = this.createHeader();
    return this.http.delete(url, headers);
  }

  put(url, data) {
    const headers = this.createHeader();
    return this.http.put(url, data, headers);
  }
}
