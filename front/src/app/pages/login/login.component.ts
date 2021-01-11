import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  public validateForm!: FormGroup;

  public get year(): number {
    return new Date().getFullYear();
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService
  ) {}

  public submitForm() {
    const { value } = this.validateForm;
    console.log('value ->', value);

    if (value) {
      this.authService
        .login(value)
        .pipe(take(1))
        .subscribe(
          (response) => {
            console.log('response ->', response);
          },
          (error) => {
            console.log('error ->', error);
          }
        );
    }
  }

  public ngOnInit() {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.minLength(6), Validators.required]],
    });
  }
}
