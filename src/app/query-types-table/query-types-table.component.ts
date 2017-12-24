import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { EditQueryTypeModalComponent } from '../edit-query-type-modal/edit-query-type-modal.component';
import { QueryTypeService } from '../services/query-type-service';

import { Filter } from '../models/filter';
import { List } from '../models/list';

@Component({
  selector: 'app-query-types-table',
  templateUrl: './query-types-table.component.html',
  styleUrls: ['./query-types-table.component.css']
})
export class QueryTypesTableComponent implements OnInit {

  public filter: Filter = new Filter (0, 5, 'name', 'asc');
  public list: List = new List (0, []);
  bsModalRef: BsModalRef;
  selectedItem: any;

  constructor(private modalService: BsModalService,
              private queryTypeService: QueryTypeService) {
    this.fetchListData();
  }

  ngOnInit() {
    this.queryTypeService.list.subscribe(val => {
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


  openEditModal (queryType) {
    this.bsModalRef = this.modalService.show(EditQueryTypeModalComponent);
    this.bsModalRef.content.updateFormValues(queryType);
  }

  openConfirmDeleteModal(template: TemplateRef<any>, item) {
    this.selectedItem = item;
    this.bsModalRef = this.modalService.show(template);
  }

  confirmDelete(): void {
    this.queryTypeService.delete(this.selectedItem.id).subscribe(() => {
      this.bsModalRef.hide();
    });
  }

  fetchListData() {
    this.queryTypeService.fetch(this.filter).subscribe();
  }

}
