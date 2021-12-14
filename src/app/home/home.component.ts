import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
 
})
export class HomeComponent implements OnInit {
  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog, public router: Router) {}

  ngOnInit() {
    
  }
  
  

}
