import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismListaLivrosComponent } from './organism-lista-livros.component';

describe('OrganismListaLivrosComponent', () => {
  let component: OrganismListaLivrosComponent;
  let fixture: ComponentFixture<OrganismListaLivrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganismListaLivrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganismListaLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
