import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { EditPaperTypeModalComponent } from '../edit-paper-type-modal/edit-paper-type-modal.component';
import { PaperTypeService } from '../services/paper-type-service';

import { Filter } from '../models/filter';
import { List } from '../models/list';

@Component({
  selector: 'app-paper-types-table',
  templateUrl: './paper-types-table.component.html',
  styleUrls: ['./paper-types-table.component.css']
})
export class PaperTypesTableComponent implements OnInit {

  public filter: Filter = new Filter (0, 5, 'name', 'asc');
  public list: List = new List (0, []);
  bsModalRef: BsModalRef;
  selectedItem: any;

  constructor(private modalService: BsModalService,
              private paperTypeService: PaperTypeService) {
    this.fetchListData();
  }

  ngOnInit() {
    this.paperTypeService.list.subscribe(val => {
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

  openEditModal (paperType) {
    this.bsModalRef = this.modalService.show(EditPaperTypeModalComponent);
    this.bsModalRef.content.updateFormValues(paperType);
  }

  openConfirmDeleteModal(template: TemplateRef<any>, item) {
    this.selectedItem = item;
    this.bsModalRef = this.modalService.show(template);
  }

  confirmDelete(): void {
    this.paperTypeService.delete(this.selectedItem.id).subscribe(() => {
      this.bsModalRef.hide();
    });
  }

  fetchListData() {
    this.paperTypeService.fetch(this.filter).subscribe();
  }
}
