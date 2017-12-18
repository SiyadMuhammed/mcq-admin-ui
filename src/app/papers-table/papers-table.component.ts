import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { EditPaperModalComponent } from '../edit-paper-modal/edit-paper-modal.component'

@Component({
  selector: 'app-papers-table',
  templateUrl: './papers-table.component.html',
  styleUrls: ['./papers-table.component.css']
})
export class PapersTableComponent implements OnInit {

  bsModalRef: BsModalRef;
  rows = [];
  selectedItem: any;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    this.rows = [{
      id: 1,
      title: 'Accounts Officer/ Shift Supervisor',
      year: 2011,
      category: 'Computer Technician',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ' +
      'aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
      {
        id: 2,
        title: 'Lower Division Clerk /Workshop Attender',
        year: 2014,
        category: 'Computer Technician',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore' +
        ' magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        id: 3,
        title: 'Manager /Employment Officer',
        year: 2009,
        category: 'Lab Assistant',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ' +
        'magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        id: 4,
        title: 'Workshop Attender/ Junior Assistant',
        year: 2011,
        category: 'Teachers Trainer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et' +
        ' dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        id: 5,
        title: 'Architectural Assistant/Assistant Geologist/ Junior Chemist',
        year: 2014,
        category: 'Lab Assistant',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna' +
        ' aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        id: 6,
        title: 'Junior Instructor',
        year: 2016,
        category: 'Teachers Trainer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore' +
        ' magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }];
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
    this.rows.splice(this.rows.indexOf(this.selectedItem), 1);
    this.bsModalRef.hide();
  }

}

