import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { CreateQueryTypeModalComponent } from '../create-query-type-modal/create-query-type-modal.component';
import { UserService } from '../services/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-query-types',
  templateUrl: './query-types.component.html',
  styleUrls: ['./query-types.component.css']
})
export class QueryTypesComponent implements OnInit {
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

  openCreateQueryTypeModal() {
    this.bsModalRef = this.modalService.show(CreateQueryTypeModalComponent);
  }
}
