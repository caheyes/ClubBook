import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoleculeLivroAdicionadoComponent } from './molecule-livro-adicionado.component';

describe('MoleculeLivroAdicionadoComponent', () => {
  let component: MoleculeLivroAdicionadoComponent;
  let fixture: ComponentFixture<MoleculeLivroAdicionadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoleculeLivroAdicionadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoleculeLivroAdicionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
