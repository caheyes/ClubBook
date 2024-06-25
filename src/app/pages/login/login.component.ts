import { Component } from '@angular/core';
import { BookLoginComponent } from '../../assets/images/book-login/book-login.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroupDirective, NgForm, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
};

@Component({
  selector: 'login',
  standalone: true,
  imports: [BookLoginComponent, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  emailForm = new FormControl('', [Validators.required, Validators.email]);
  senhaForm = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();

  constructor(private router: Router) {}

  //methods
  getLogin() {
    this.router.navigate(['/home']);
  }
}
