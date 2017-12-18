import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { EditPaperTypeModalComponent } from '../edit-paper-type-modal/edit-paper-type-modal.component';

@Component({
  selector: 'app-paper-types-table',
  templateUrl: './paper-types-table.component.html',
  styleUrls: ['./paper-types-table.component.css']
})
export class PaperTypesTableComponent implements OnInit {
  rows = [
    {
      'id': '1',
      'name': 'Lower Division Clerk',
      'shortName': 'LDC',
      'associatedTests': 32
    },
    {
      'id': '2',
      'name': 'Upper Division Clerk',
      'shortName': 'UDC',
      'associatedTests': 12
    },
    {
      'id': '3',
      'name': 'Assistant Engineer',
      'shortName': 'AE',
      'associatedTests': 0
    },
    {
      'id': '4',
      'name': 'Contract Stenographer',
      'shortName': 'Steno',
      'associatedTests': 3
    },
    {
      'id': '5',
      'name': 'Technical Assistant',
      'shortName': 'Tech Support',
      'associatedTests': 27
    }
  ];

  bsModalRef: BsModalRef;
  selectedItem: any;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
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
    this.rows.splice(this.rows.indexOf(this.selectedItem), 1);
    this.bsModalRef.hide();
  }
}
