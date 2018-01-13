import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { EditPaperModalComponent } from '../edit-paper-modal/edit-paper-modal.component';
import { PaperService } from '../services/paper-service';

import { Filter } from '../models/filter';
import { List } from '../models/list';

@Component({
  selector: 'app-papers-table',
  templateUrl: './papers-table.component.html',
  styleUrls: ['./papers-table.component.css']
})
export class PapersTableComponent implements OnInit {

  bsModalRef: BsModalRef;
  selectedItem: any;
  public filter: Filter = new Filter (0, 5, 'title', 'asc');
  public list: List = new List (0, []);

  constructor(private modalService: BsModalService,
              private paperService: PaperService) {
    console.log('init call');
    this.fetchListData();
  }

  ngOnInit() {
    this.paperService.list.subscribe(val => {
      this.list = val;
    });
  }

  onSort (event) {
    this.filter.sortColumn = event.column.prop;
    this.filter.sortDirection = event.newValue;
    console.log('sort call');
    this.fetchListData();
  }

  setPage(pageInfo) {
    this.filter.offset = pageInfo.offset * this.filter.pageSize;
    console.log('page call');
    this.fetchListData();
  }

  openEditPaperModel (paper) {
    this.bsModalRef = this.modalService.show(EditPaperModalComponent);
    this.bsModalRef.content.updateFormValues(paper);
  }

  openConfirmDeleteModal(template: TemplateRef<any>, item) {
    this.selectedItem = item;
    this.bsModalRef = this.modalService.show(template);
  }

  confirmDelete(): void {
    this.paperService.delete(this.selectedItem.id).subscribe(() => {
      this.bsModalRef.hide();
    });
  }

  fetchListData() {
    this.paperService.fetch(this.filter).subscribe();
  }

}

