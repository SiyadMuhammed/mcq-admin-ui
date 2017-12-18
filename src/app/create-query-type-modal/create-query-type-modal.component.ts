import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-query-type-modal',
  templateUrl: './create-query-type-modal.component.html',
  styleUrls: ['./create-query-type-modal.component.css']
})
export class CreateQueryTypeModalComponent implements OnInit {

  private formSubmitAttempt: boolean;
  form;

  constructor(public bsModalRef: BsModalRef,
              private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])]
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
