import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { EditQueryTypeModalComponent } from '../edit-query-type-modal/edit-query-type-modal.component';

@Component({
  selector: 'app-query-types-table',
  templateUrl: './query-types-table.component.html',
  styleUrls: ['./query-types-table.component.css']
})
export class QueryTypesTableComponent implements OnInit {

  rows = [
    {
      'id': '1',
      'name': 'General Knowledge',
      'associatedQuestions': 32
    },
    {
      'id': '2',
      'name': 'Engineering Physics',
      'associatedQuestions': 12
    },
    {
      'id': '3',
      'name': 'Astrophysics',
      'associatedQuestions': 0
    },
    {
      'id': '4',
      'name': 'Theoretical Physics',
      'associatedQuestions': 3
    },
    {
      'id': '5',
      'name': 'Experimental Physics',
      'associatedQuestions': 23
    },
    {
      'id': '6',
      'name': 'Microbiology',
      'associatedQuestions': 2
    },
    {
      'id': '7',
      'name': 'pharmaceutical',
      'associatedQuestions': 9
    },
    {
      'id': '8',
      'name': 'Organic Chemistry',
      'associatedQuestions': 70
    },
    {
      'id': '9',
      'name': 'General English',
      'associatedQuestions': 19
    },
    {
      'id': '10',
      'name': 'Computer Science',
      'associatedQuestions': 0
    }
  ];

  bsModalRef: BsModalRef;
  selectedItem: any;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
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
    this.rows.splice(this.rows.indexOf(this.selectedItem), 1);
    this.bsModalRef.hide();
  }

}
