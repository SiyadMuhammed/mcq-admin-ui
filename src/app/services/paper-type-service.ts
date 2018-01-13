import { Injectable } from '@angular/core';
import { HttpAthClient } from './http-auth-client';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { environment } from '../../environments/environment';
import { Filter } from '../models/filter';
import { List } from '../models/list';
import { PaperCategory } from '../models/paperCategory';

@Injectable()
export class PaperTypeService {

  private BASE_URL = environment.serverUrl + 'api/paperCategory/';
  public filter: Filter;
  private fetchResults = new BehaviorSubject<List>(new List (0, []));
  public list: Observable<List> = this.fetchResults.asObservable();

  constructor(private http: HttpAthClient) { }


  create(name: string): Observable<any> {
    return this.http.post(this.BASE_URL, { name })
      .map(response => this.reloadList());
  }

  update(id: string, name: string): Observable<any> {
    return this.http.put(this.BASE_URL + id, { name })
      .map(response => this.reloadList());
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

  getAll(): Observable<Array<PaperCategory>> {
    return this.http.get(this.BASE_URL + 'all').
      map(response => response as Array<PaperCategory>);
  }

  private reloadList() {
    this.fetch(this.filter).subscribe();
  }
}
