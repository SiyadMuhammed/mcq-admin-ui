import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private formSubmitAttempt: boolean;
  form;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }

  isFieldValid(field: string) {
    return (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt);
  }

  onSubmit(): void {

    // console.log('routing');
    // this.router.navigate(['papers']);

    const self = this;
    self.formSubmitAttempt = true;
    if (self.form.valid) {
      const data = self.form.value;
      this.userService.login(data.username, data.password).subscribe((res) => {
        if (res.isAuthorized) {
          self.router.navigate(['papers']);
        }
      });
    }
  }
}
