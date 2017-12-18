import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-query-modal',
  templateUrl: './edit-query-modal.component.html',
  styleUrls: ['./edit-query-modal.component.css']
})
export class EditQueryModalComponent implements OnInit {

  private formSubmitAttempt: boolean;
  form;
  categories: [string];

  constructor(public bsModalRef: BsModalRef,
              private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      category: [''],
      question: [''],
      answer: [''],
      option1: [''],
      option2: [''],
      option3: ['']
    });
    this.categories = ['General Knowledge', 'pharmaceutical', 'Engineering Physics',
      'Computer Science', 'Astrophysics', 'Theoretical Physics', 'Microbiology'];
  }

  updateFormValues (query) {
    this.form = this.formBuilder.group({
      category: [query.category , Validators.required ],
      question: [query.question , Validators.required],
      answer: [query.answer , Validators.required],
      option1: [query.option1 , Validators.required],
      option2: [query.option2],
      option3: [query.option3]
    });
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
