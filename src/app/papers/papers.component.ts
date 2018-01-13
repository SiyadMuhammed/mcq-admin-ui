import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { CreatePaperModalComponent } from '../create-paper-modal/create-paper-modal.component';
import { UserService } from '../services/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-papers',
  templateUrl: './papers.component.html',
  styleUrls: ['./papers.component.css']
})
export class PapersComponent implements OnInit {

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

  openCreatePaperModalModal() {
    this.bsModalRef = this.modalService.show(CreatePaperModalComponent);
  }

}
