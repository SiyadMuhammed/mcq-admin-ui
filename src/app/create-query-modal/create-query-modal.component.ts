import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormBuilder, Validators } from '@angular/forms';
import { QueryTypeService } from '../services/query-type-service';
import { QueryService } from '../services/query-service';
import { QueryCategory } from '../models/queryCategory';
import { Query } from '../models/query';

@Component({
  selector: 'app-create-query-modal',
  templateUrl: './create-query-modal.component.html',
  styleUrls: ['./create-query-modal.component.css']
})
export class CreateQueryModalComponent implements OnInit {
  private formSubmitAttempt: boolean;
  form;
  paperId = '';
  categories: Array<QueryCategory>;

  constructor(public bsModalRef: BsModalRef,
              private formBuilder: FormBuilder,
              private queryTypeService: QueryTypeService,
              private queryService: QueryService) {
    this.queryTypeService.getAll().subscribe(val => this.categories = val);
  }

  ngOnInit() {
    this.form = this.getNewForm(this.paperId);
  }

  supplyPaperId (id) {
    this.paperId = id;
    this.form = this.getNewForm(this.paperId);
  }

  getNewForm (paperId: string) {
    return this.formBuilder.group({
      id: [''],
      categoryId: ['', Validators.required ],
      paperId: [paperId],
      question: ['', Validators.required],
      answer: ['', Validators.required],
      option1: ['', Validators.required],
      option2: [''],
      option3: ['']
    });
  }

  isFieldValid(field: string) {
    return (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt);
  }

  onSubmit(closeModal: boolean): void {
    const self = this;
    self.formSubmitAttempt = true;
    if (self.form.valid) {
      const query = self.form.value as Query;
      self.queryService.create(query).subscribe(() => {
        if (closeModal) {
          self.bsModalRef.hide();
        } else {
          self.formSubmitAttempt = false;
          this.form = this.getNewForm(this.paperId);
        }
      });
    }
  }
}
