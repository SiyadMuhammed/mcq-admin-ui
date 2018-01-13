import { Injectable } from '@angular/core';
import { HttpAthClient } from './http-auth-client';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { environment } from '../../environments/environment';
import { Filter } from '../models/filter';
import { List } from '../models/list';
import { Query } from '../models/query';

@Injectable()
export class QueryService {

  private BASE_URL = environment.serverUrl + 'api/query/';
  public filter: Filter;
  private fetchResults = new BehaviorSubject<List>(new List (0, []));
  public list: Observable<List> = this.fetchResults.asObservable();

  constructor(private http: HttpAthClient) { }


  create(data: Query): Observable<any> {
    return this.http.post(this.BASE_URL, data)
      .map(response => this.reloadList());
  }

  update(data: Query): Observable<any> {
    return this.http.put(this.BASE_URL + data.id, data)
      .map(response => this.reloadList());
  }

  delete(id: string): Observable<any> {
    return this.http.delete(this.BASE_URL + id)
      .map(response => this.reloadList());
  }

  fetch(filter: Filter): Observable<any> {
    this.filter = filter;
    const baseUrl = filter.paperId ? this.BASE_URL + filter.paperId : this.BASE_URL;
    const requestUrl = baseUrl +
      '?offset=' + filter.offset +
      '&pageSize=' + filter.pageSize +
      '&sortColumn=' + filter.sortColumn +
      '&sortDirection=' + filter.sortDirection;
    return this.http.get(requestUrl)
      .map(response => {
        this.fetchResults.next(response as List);
      });
  }

  private reloadList() {
    this.fetch(this.filter).subscribe();
  }
}
