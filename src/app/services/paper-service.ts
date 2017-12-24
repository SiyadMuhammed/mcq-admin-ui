import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { environment } from '../../environments/environment';
import { Filter } from '../models/filter';
import { List } from '../models/list';
import { Paper } from '../models/paper';

@Injectable()
export class PaperService {

  private BASE_URL = environment.serverUrl + 'paper/';
  public filter: Filter;
  private fetchResults = new BehaviorSubject<List>(new List (0, []));
  public list: Observable<List> = this.fetchResults.asObservable();

  constructor(private http: HttpClient) { }


  create(data: Paper): Observable<any> {
    return this.http.post(this.BASE_URL, data)
      .map(response => this.reloadList());
  }

  update(data: Paper): Observable<any> {
    return this.http.put(this.BASE_URL + data.id, data)
      .map(response => this.reloadList());
  }

  publish(id: string): Observable<any> {
    return this.http.put(this.BASE_URL + id + '/publish', {})
      .map(response => response);
  }

  unPublish(id: string): Observable<any> {
    return this.http.put(this.BASE_URL + id + '/unPublish', {})
      .map(response => response);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(this.BASE_URL + id)
      .map(response => this.reloadList());
  }

  fetch(filter: Filter): Observable<any> {
    this.filter = filter;
    const requestUrl = this.BASE_URL +
      '?offset=' + filter.offset +
      '&pageSize=' + filter.pageSize +
      '&sortColumn=' + filter.sortColumn +
      '&sortDirection=' + filter.sortDirection;
    return this.http.get(requestUrl)
      .map(response => {
        this.fetchResults.next(response as List);
      });
  }

  fetchById(id: string): Observable<Paper> {
    return this.http.get(this.BASE_URL + id)
      .map(response => response as Paper);
  }

  private reloadList() {
    this.fetch(this.filter).subscribe();
  }
}
