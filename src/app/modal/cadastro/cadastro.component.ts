import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  checked = false;

  constructor(public dialogRef: MatDialogRef<CadastroComponent>){}
  ngOnInit(): void {
  }

  dismiss(){
    this.dialogRef.close();
  }

  cadastrar(){
    const res = Swal.fire({
      icon: 'success',
      title: 'Cadastrado concluído com sucesso!',
      confirmButtonColor: 'rgb(76, 177, 76)'
    });
  }

}
