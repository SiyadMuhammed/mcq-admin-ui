import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { EditPaperModalComponent } from '../edit-paper-modal/edit-paper-modal.component';
import { EditQueryModalComponent } from '../edit-query-modal/edit-query-modal.component';
import { CreateQueryModalComponent } from '../create-query-modal/create-query-modal.component';
import { ActivatedRoute } from '@angular/router';
import { PaperService } from '../services/paper-service';
import { QueryService } from '../services/query-service';
import { Paper } from '../models/paper';
import { Filter } from '../models/filter';
import { List } from '../models/list';
import { UserService } from '../services/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-paper',
  templateUrl: './manage-paper.component.html',
  styleUrls: ['./manage-paper.component.css']
})
export class ManagePaperComponent implements OnInit {

  bsModalRef: BsModalRef;
  metadata: Paper = new Paper();
  id: string
  public filter: Filter = new Filter (0, 5, 'question', 'asc');
  public list: List = new List (0, []);
  selectedQuestion: any;

  constructor(private modalService: BsModalService,
              private route: ActivatedRoute,
              private paperService: PaperService,
              private queryService: QueryService,
              private userService: UserService,
              private router: Router) {
    if(!this.userService.isAuthorized()) {
      this.router.navigate(['login']);
    }
    
    this.route.params.subscribe( params => this.id = params.id);
    this.paperService.fetchById(this.id).subscribe(val => this.metadata = val);
    this.fetchListData();
  }

  ngOnInit() {
    this.queryService.list.subscribe(val => {
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

  openEditModal () {
    this.bsModalRef = this.modalService.show(EditPaperModalComponent);
    this.bsModalRef.content.updateFormValues(this.metadata);
  }

  togglePublish () {
    if (this.metadata.publish) {
      this.paperService.unPublish(this.id).subscribe(() => this.metadata.publish = false );
    } else {
      this.paperService.publish(this.id).subscribe(() => this.metadata.publish = true );
    }
  }

  openEditQuestionModel (query) {
    this.bsModalRef = this.modalService.show(EditQueryModalComponent);
    this.bsModalRef.content.updateFormValues(query);
  }

  openCreateQueryModal() {
    this.bsModalRef = this.modalService.show(CreateQueryModalComponent);
    this.bsModalRef.content.supplyPaperId(this.id);
  }

  openConfirmDeleteModal(template: TemplateRef<any>, item) {
    this.selectedQuestion = item;
    this.bsModalRef = this.modalService.show(template);
  }

  confirmDelete(): void {
    this.queryService.delete(this.selectedQuestion.id).subscribe(() => {
      this.bsModalRef.hide();
    });
  }

  fetchListData() {
    this.filter.paperId = this.id;
    this.queryService.fetch(this.filter).subscribe();
  }
}
