import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

interface Food {
  id: number;
  nome: string;
}

@Component({
  selector: 'app-cadastro-vinhos',
  templateUrl: './cadastro-vinhos.component.html',
  styleUrls: ['./cadastro-vinhos.component.scss']
})
export class CadastroVinhosComponent implements OnInit {

  vinhos: Food[] = [
    {id: 1, nome: 'Tinto'},
    {id: 2, nome: 'Branco'},
    {id: 3, nome: 'Rosé'},
    {id: 4, nome: 'Espumante'},
    {id: 5, nome: 'Sobremesa'},
    {id: 6, nome: 'Fortificado'}
  ];

  uvas: Food[] = [
    {id: 1, nome: 'Carbenet Sauvignon'},
    {id: 2, nome: 'Merlot'},
    {id: 3, nome: 'Chardonnay'},
    {id: 4, nome: 'Pinot Noir'},
    {id: 5, nome: 'Malbec'},
    {id: 6, nome: 'Sauvignon Blanc'},
    {id: 7, nome: 'Shiraz/Syrah'},
    {id: 8, nome: 'Zinfandel'},
    {id: 9, nome: 'Nebbiolo'},
    {id: 10, nome: 'Sangiovese'},
    {id: 11, nome: 'Pior Grigio'},
    {id: 12, nome: 'Riesling'},
    {id: 13, nome: 'Chenin Blanc'},
    {id: 14, nome: 'Moscato'},
    {id: 15, nome: 'Albarino'}
  ];

  harmonizacoes: Food[] = [
    {id: 1, nome: 'Carne de vaca'},
    {id: 2, nome: 'Cordeiro'},
    {id: 3, nome: 'Vitela'},
    {id: 4, nome: 'Carne de porco'},
    {id: 5, nome: 'Carne de caça (cervo, veado, etc.)'},
    {id: 6, nome: 'Aves'},
    {id: 7, nome: 'Cogumelos'},
    {id: 8, nome: 'Carne curada'},
    {id: 9, nome: 'Queijo de cabra'},
    {id: 10, nome: 'Queijos maduros'},
    {id: 11, nome: 'Queijos suaves e moles'},
    {id: 12, nome: 'Massa'},
    {id: 13, nome: 'Comida picante'},
    {id: 14, nome: 'Aperitivo'},
    {id: 15, nome: 'Aperitivos e lanches'},
    {id: 16, nome: 'Peixes magros'},
    {id: 17, nome: 'Peixe (salmão, atum, etc.)'},
    {id: 18, nome: 'Marisco'},
    {id: 19, nome: 'Vegetariano'}
  ];

  fileName = '';
  dadosVinho: FormGroup;

  constructor(public dialogRef: MatDialogRef<CadastroVinhosComponent>, private http: HttpClient) { }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm(){
    this.dadosVinho = new FormGroup({
      nome: new FormControl('nome', Validators.required),
      vinicola: new FormControl('vinicola', Validators.required),
      pais_origem: new FormControl('pais_origem', Validators.required),
      tipo_vinho: new FormControl('tipo_vinho', Validators.required),
      tipo_uva: new FormControl('tipo_uva', Validators.required),
      harmonizacao: new FormControl('harmonizacao', Validators.required),
      rotulo: new FormControl('rotulo', Validators.required),
    });
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
