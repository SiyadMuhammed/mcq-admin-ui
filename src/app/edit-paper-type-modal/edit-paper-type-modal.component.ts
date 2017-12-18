import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-edit-paper-type-modal',
  templateUrl: './edit-paper-type-modal.component.html',
  styleUrls: ['./edit-paper-type-modal.component.css']
})
export class EditPaperTypeModalComponent implements OnInit {

  private formSubmitAttempt: boolean;
  form;

  constructor(public bsModalRef: BsModalRef,
              private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [''],
      shortName: ['']
    });
  }

  isFieldValid(field: string) {
    return (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt);
  }

  updateFormValues (paperType) {
    this.form = this.formBuilder.group({
      id: [paperType.id],
      name: [paperType.name, Validators.compose([
        Validators.required,
        Validators.minLength(10)
      ])],
      shortName: [paperType.shortName, Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])]
    });
  }

  onSubmit(): void {
    this.formSubmitAttempt = true;
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

}
