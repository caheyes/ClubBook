import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroupDirective, NgForm, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
};

@Component({
  selector: 'molecule-adicionar-livro',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './molecule-adicionar-livro.component.html',
  styleUrl: './molecule-adicionar-livro.component.scss'
})
export class MoleculeAdicionarLivroComponent {
  nomeForm = new FormControl('', [Validators.required]);
  descricaoForm = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();
}
