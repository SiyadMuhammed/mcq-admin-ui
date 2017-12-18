import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-paper-modal',
  templateUrl: './create-paper-modal.component.html',
  styleUrls: ['./create-paper-modal.component.css']
})
export class CreatePaperModalComponent implements OnInit {

  private formSubmitAttempt: boolean;
  form;
  years: [number];
  categories: [string];

  constructor(public bsModalRef: BsModalRef,
              private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      year: ['', Validators.required ],
      category: ['', Validators.required ],
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.years = [2007, 2008, 2009, 2010, 2011, 2012, 2013,
      2014, 2014, 2015, 2016, 2017, 2018];
    this.categories = ['PWD Engineer', 'KSEB Assistant Engineer', 'Computer Technician', 'Teachers Trainer',
      'Lab Assistant', 'Police Test', 'PSC Director', 'Stenographer'];
  }

  isFieldValid(field: string) {
    return (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt);
  }

  onSubmit(): void {
    this.formSubmitAttempt = true;
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

}
