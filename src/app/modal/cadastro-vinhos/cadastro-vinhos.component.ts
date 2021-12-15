import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cadastro-vinhos',
  templateUrl: './cadastro-vinhos.component.html',
  styleUrls: ['./cadastro-vinhos.component.scss']
})
export class CadastroVinhosComponent implements OnInit {

  vinhos: Food[] = [
    {value: '1', viewValue: 'Tinto'},
    {value: '2', viewValue: 'Branco'},
    {value: '3', viewValue: 'Rosé'},
    {value: '4', viewValue: 'Espumante'},
    {value: '4', viewValue: 'Sobremesa'},
    {value: '5', viewValue: 'Fortificado'}
  ];

  uvas: Food[] = [
    {value: '1', viewValue: 'Carbenet Sauvignon'},
    {value: '2', viewValue: 'Merlot'},
    {value: '3', viewValue: 'Chardonnay'},
    {value: '4', viewValue: 'Pinot Noir'},
    {value: '4', viewValue: 'Malbec'},
    {value: '5', viewValue: 'Sauvignon Blanc'},
    {value: '6', viewValue: 'Shiraz/Syrah'},
    {value: '7', viewValue: 'Zinfandel'},
    {value: '8', viewValue: 'Nebbiolo'},
    {value: '9', viewValue: 'Sangiovese'},
    {value: '10', viewValue: 'Pior Grigio'},
    {value: '11', viewValue: 'Riesling'},
    {value: '12', viewValue: 'Chenin Blanc'},
    {value: '13', viewValue: 'Moscato'},
    {value: '14', viewValue: 'Albarino'}
  ];

  harmonizacoes: Food[] = [
    {value: '1', viewValue: 'Carne de vaca'},
    {value: '2', viewValue: 'Cordeiro'},
    {value: '3', viewValue: 'Vitela'},
    {value: '4', viewValue: 'Carne de porco'},
    {value: '5', viewValue: 'Carne de caça (cervo, veado, etc.)'},
    {value: '6', viewValue: 'Aves'},
    {value: '7', viewValue: 'Cogumelos'},
    {value: '8', viewValue: 'Carne curada'},
    {value: '9', viewValue: 'Queijo de cabra'},
    {value: '10', viewValue: 'Queijos maduros'},
    {value: '11', viewValue: 'Queijos suaves e moles'},
    {value: '12', viewValue: 'Massa'},
    {value: '12', viewValue: 'Comida picante'},
    {value: '14', viewValue: 'Aperitivo'},
    {value: '15', viewValue: 'Aperitivos e lanches'},
    {value: '16', viewValue: 'Peixes magros'},
    {value: '17', viewValue: 'Peixe (salmão, atum, etc.)'},
    {value: '18', viewValue: 'Marisco'},
    {value: '19', viewValue: 'Vegetariano'}
  ];

  fileName = '';

  constructor(public dialogRef: MatDialogRef<CadastroVinhosComponent>, private http: HttpClient) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    const file:File = event.target.files[0];
    if (file) {
        this.fileName = file.name;
        const formData = new FormData();
        formData.append("thumbnail", file);
        const upload$ = this.http.post("/api/thumbnail-upload", formData);
        upload$.subscribe();
    }
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
