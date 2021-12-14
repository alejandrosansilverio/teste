import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { LoginComponent } from '../modal/login/login.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(public router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  toHome(){
    this.router.navigate(['/home']);
  }

  toVinhos(){
    this.router.navigate(['/vinhos']);
  }

  toHarmonizacoes(){
    this.router.navigate(['/harmonizacoes']);
  }

  toUvas(){
    this.router.navigate(['/uvas']);
  }

  toCarrinho(){
    this.router.navigate(['/carrinho']);
  }

  /*toLogin(){
    const teste = Swal.fire({
      icon: 'success',
      title: 'swal'
    })
  }*/

  toLogin(){
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '520px',
      height: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {});
  }

}
