import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroVinhosComponent } from './cadastro-vinhos.component';

describe('CadastroVinhosComponent', () => {
  let component: CadastroVinhosComponent;
  let fixture: ComponentFixture<CadastroVinhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroVinhosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroVinhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
