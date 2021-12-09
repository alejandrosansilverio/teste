import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UvasComponent } from './uvas.component';

describe('UvasComponent', () => {
  let component: UvasComponent;
  let fixture: ComponentFixture<UvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
