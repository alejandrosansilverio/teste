import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { CadastroComponent } from '../cadastro/cadastro.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
  }

  dismiss(){
    this.dialogRef.close();
  }

  toLogin(){
    const res = Swal.fire({
      icon: 'success',
      title: 'Logado com sucesso!',
      confirmButtonColor: 'rgb(76, 177, 76)'
    });

    /*const res = Swal.fire({
      icon: 'error',
      title: 'Algo deu errado. Tente novamente.',
      confirmButtonColor: 'rgb(194, 28, 28)'
    });*/
  }

  cadastro(){
    this.dismiss();
    const dialogRef = this.dialog.open(CadastroComponent, {
      width: '520px',
      height: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {});
  }

}
