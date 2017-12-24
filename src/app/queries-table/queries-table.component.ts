import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { EditQueryModalComponent } from '../edit-query-modal/edit-query-modal.component';
import { QueryService } from '../services/query-service';

import { Filter } from '../models/filter';
import { List } from '../models/list';

@Component({
  selector: 'app-queries-table',
  templateUrl: './queries-table.component.html',
  styleUrls: ['./queries-table.component.css']
})
export class QueriesTableComponent implements OnInit {

  bsModalRef: BsModalRef;
  selectedQuestion: any;
  public filter: Filter = new Filter (0, 5, 'question', 'asc');
  public list: List = new List (0, []);

  constructor(private modalService: BsModalService,
              private queryService: QueryService) {
    this.fetchListData();
  }

  ngOnInit() {
    this.queryService.list.subscribe(val => {
      this.list = val;
    });
  }

  onSort (event) {
    this.filter.sortColumn = event.column.prop;
    this.filter.sortDirection = event.newValue;
    this.fetchListData();
  }

  setPage(pageInfo) {
    this.filter.offset = pageInfo.offset * this.filter.pageSize;
    this.fetchListData();
  }

  openEditQuestionModel (query) {
    this.bsModalRef = this.modalService.show(EditQueryModalComponent);
    this.bsModalRef.content.updateFormValues(query);
  }

  openConfirmDeleteModal(template: TemplateRef<any>, item) {
    this.selectedQuestion = item;
    this.bsModalRef = this.modalService.show(template);
  }

  confirmDelete(): void {
    this.queryService.delete(this.selectedQuestion.id).subscribe(() => {
      this.bsModalRef.hide();
    });
  }

  fetchListData() {
    this.queryService.fetch(this.filter).subscribe();
  }
}
