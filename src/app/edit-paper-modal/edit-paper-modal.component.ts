import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormBuilder, Validators } from '@angular/forms';
import { PaperTypeService } from '../services/paper-type-service';
import { PaperService } from '../services/paper-service';
import { PaperCategory } from '../models/paperCategory';
import { Paper } from '../models/paper';

@Component({
  selector: 'app-edit-paper-modal',
  templateUrl: './edit-paper-modal.component.html',
  styleUrls: ['./edit-paper-modal.component.css']
})
export class EditPaperModalComponent implements OnInit {

  private formSubmitAttempt: boolean;
  form;
  years: [number];
  categories: Array<PaperCategory>;

  constructor(public bsModalRef: BsModalRef,
              private formBuilder: FormBuilder,
              private paperTypeService: PaperTypeService,
              private paperService: PaperService) {
    this.paperTypeService.getAll().subscribe(val => this.categories = val);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [''],
      year: [''],
      categoryId: [''],
      title: [''],
      description: ['']
    });
    this.years = [2007, 2008, 2009, 2010, 2011, 2012, 2013,
      2014, 2014, 2015, 2016, 2017, 2018];
  }

  updateFormValues (metadata) {
    this.form = this.formBuilder.group({
      id: [metadata.id],
      year: [metadata.year, Validators.required ],
      categoryId: [metadata.categoryId, Validators.required ],
      title: [metadata.title, Validators.required],
      description: [metadata.description, Validators.required]
    });
  }

  isFieldValid(field: string) {
    return (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.form.get(field).invalid && this.formSubmitAttempt);
  }

  onSubmit(): void {
    const self = this;
    self.formSubmitAttempt = true;
    if (self.form.valid) {
      const query = self.form.value as Paper;
      self.paperService.update(query).subscribe(() => {
        self.bsModalRef.hide();
      });
    }
  }

}
