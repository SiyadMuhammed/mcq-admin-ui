import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { CreatePaperTypeModalComponent } from '../create-paper-type-modal/create-paper-type-modal.component';
import { UserService } from '../services/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paper-types',
  templateUrl: './paper-types.component.html',
  styleUrls: ['./paper-types.component.css']
})
export class PaperTypesComponent implements OnInit {

  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService, 
    private userService: UserService,
    private router: Router) {
    if(!this.userService.isAuthorized()) {
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
  }

  openCreatePaperTypeModalModal() {
    this.bsModalRef = this.modalService.show(CreatePaperTypeModalComponent);
  }

}
