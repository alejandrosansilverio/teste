import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import {map} from 'rxjs/operators';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { Router } from '@angular/router';
import { CadastroVinhosComponent } from '../modal/cadastro-vinhos/cadastro-vinhos.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-vinhos',
  templateUrl: './vinhos.component.html',
  styleUrls: ['./vinhos.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
  }],
})
export class VinhosComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;
  isLinear = false;
  isSmall: any;
  stepperOrientation: Observable<StepperOrientation>;

  constructor(private breakpointObserver: BreakpointObserver, public router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.isSmall = this.breakpointObserver
    .observe('(min-width: 800px)')
    .pipe(map(({matches}) => (matches ? true : false)));

    this.stepperOrientation = this.breakpointObserver
    .observe('(min-width: 800px)')
    .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));

    this.loadForm();
  }

  loadForm(){
    this.firstFormGroup = new FormGroup({
      firstCtrl: new FormControl('', Validators.required)
    });

    this.secondFormGroup = new FormGroup({
      secondCtrl: new FormControl('', Validators.required)
    });
  }

  toCadastrarVinho(){
    const dialogRef = this.dialog.open(CadastroVinhosComponent, {
      width: '520px',
      height: '470px'
    });

    dialogRef.afterClosed().subscribe(result => {});
  }

}
