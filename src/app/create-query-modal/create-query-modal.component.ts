import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-query-modal',
  templateUrl: './create-query-modal.component.html',
  styleUrls: ['./create-query-modal.component.css']
})
export class CreateQueryModalComponent implements OnInit {
  private formSubmitAttempt: boolean;
  form;
  categories: [string];

  constructor(public bsModalRef: BsModalRef,
              private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      category: ['', Validators.required ],
      question: ['', Validators.required],
      answer: ['', Validators.required],
      option1: ['', Validators.required],
      option2: [''],
      option3: ['']
    });
    this.categories = ['General Knowledge', 'pharmaceutical', 'Engineering Physics',
      'Computer Science', 'Astrophysics', 'Theoretical Physics', 'Microbiology'];
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
