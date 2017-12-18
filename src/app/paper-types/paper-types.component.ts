import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { CreatePaperTypeModalComponent } from '../create-paper-type-modal/create-paper-type-modal.component';

@Component({
  selector: 'app-paper-types',
  templateUrl: './paper-types.component.html',
  styleUrls: ['./paper-types.component.css']
})
export class PaperTypesComponent implements OnInit {

  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openCreatePaperTypeModalModal() {
    this.bsModalRef = this.modalService.show(CreatePaperTypeModalComponent);
  }

}
