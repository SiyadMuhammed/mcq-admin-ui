import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { CreateQueryModalComponent } from '../create-query-modal/create-query-modal.component';
import { UserService } from '../services/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.css']
})
export class QueriesComponent implements OnInit {

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

  openCreateQueryModal() {
    this.bsModalRef = this.modalService.show(CreateQueryModalComponent);
  }
}
