import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarmonizacoesComponent } from './harmonizacoes.component';

describe('HarmonizacoesComponent', () => {
  let component: HarmonizacoesComponent;
  let fixture: ComponentFixture<HarmonizacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarmonizacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HarmonizacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
