import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';

const SESSION_KEY = 'mcqAdmin/session';

const saveSession = session => {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
};

const deleteSession = () => {
  console.log('session removed');
  localStorage.removeItem(SESSION_KEY);
}

const loadSession = () => {
  const storedSession = localStorage.getItem(SESSION_KEY);
  const session = storedSession ? JSON.parse(storedSession) : null;
  return session;
};

@Injectable()
export class UserService {
  private sessionStorage = { isAuthorized: false };

  public collapseSideMenu = true;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const url = environment.serverUrl + 'token';
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    var data = "grant_type=password&username=" + username + "&password=" + password;

    return this.http.post(url, data, httpOptions)
      .map(response => this.createSession(response))
      .map(response => this.session());

  }

  logout() {
    console.log('user service: logout');
    deleteSession();
  }

  session(): any {
    return loadSession();
  }

  isAuthorized(): boolean {
    return !!loadSession();
  }

  toggleSideMenu() {
    this.collapseSideMenu = !this.collapseSideMenu;
  }

  private createSession(res) {
    var session = {
      isAuthorized: true,
      accessToken: res.access_token
    }
    saveSession(session);
  }

}
