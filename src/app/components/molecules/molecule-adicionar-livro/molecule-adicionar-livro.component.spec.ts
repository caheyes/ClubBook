import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoleculeAdicionarLivroComponent } from './molecule-adicionar-livro.component';

describe('MoleculeAdicionarLivroComponent', () => {
  let component: MoleculeAdicionarLivroComponent;
  let fixture: ComponentFixture<MoleculeAdicionarLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoleculeAdicionarLivroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoleculeAdicionarLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
