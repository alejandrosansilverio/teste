import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
 
})
export class HomeComponent implements OnInit {

  vinhos: Array<any> = [];
  uvas = []
  tiposVinhos = []
  harmonizacoes = []

  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog, public router: Router, private http: HttpClient) {}

  ngOnInit() {

    forkJoin([
      this.http.get("http://localhost:3000/vinhos/", {}),
      this.http.get("http://localhost:3000/uvas/", {}),
      this.http.get("http://localhost:3000/tipo_vinhos/", {}),
      this.http.get("http://localhost:3000/harmonizacoes", {})
    ]).subscribe((results: any)=>{
      this.vinhos = results[0];
      this.uvas = results[1];
      this.tiposVinhos = results[2];
      this.harmonizacoes = results[3]
    })
  }

   searchTipoVinho(id: any){
    let tipos: any = [];
     this.tiposVinhos.forEach((e: any)=>{
      if(e._id == id){
        tipos.push(e);
      }
    })
    return tipos
  }

   searchUvas(id: any){
    let tipos: any = [];
     this.uvas.forEach((e: any)=>{
      if(e._id == id){
        tipos.push(e);
      }
    })
    return tipos
  }

   searchHarmonizacao(id: any){
    let tipos: any = [];
     this.harmonizacoes.forEach((e: any)=>{
      if(e._id == id){
        tipos.push(e);
      }
    })
    return tipos
  }
  
  

}
