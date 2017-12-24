import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormBuilder, Validators } from '@angular/forms';
import { QueryTypeService } from '../services/query-type-service';
import { QueryService } from '../services/query-service';
import { QueryCategory } from '../models/queryCategory';
import { Query } from '../models/query';

@Component({
  selector: 'app-edit-query-modal',
  templateUrl: './edit-query-modal.component.html',
  styleUrls: ['./edit-query-modal.component.css']
})
export class EditQueryModalComponent implements OnInit {
  private formSubmitAttempt: boolean;
  form;
  categories: Array<QueryCategory>;

  constructor(public bsModalRef: BsModalRef,
              private formBuilder: FormBuilder,
              private queryTypeService: QueryTypeService,
              private queryService: QueryService) {
    this.queryTypeService.getAll().subscribe(val => this.categories = val);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [''],
      paperId: [''],
      categoryId: [''],
      question: [''],
      answer: [''],
      option1: [''],
      option2: [''],
      option3: ['']
    });
  }

  updateFormValues (query) {
    this.form = this.formBuilder.group({
      id: [query.id],
      paperId: [query.paperId],
      categoryId: [query.categoryId , Validators.required ],
      question: [query.question , Validators.required],
      answer: [query.answer , Validators.required],
      option1: [query.option1 , Validators.required],
      option2: [query.option2],
      option3: [query.option3]
    });
  }

  isFieldValid(field: string) {
    return (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt && this.form.get(field).invalid);
  }

  onSubmit(): void {
    const self = this;
    self.formSubmitAttempt = true;
    if (self.form.valid) {
      const query = self.form.value as Query;
      self.queryService.update(query).subscribe(() => {
        self.bsModalRef.hide();
      });
    }
  }

}
