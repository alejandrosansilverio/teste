import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { forkJoin } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-vinhos',
  templateUrl: './cadastro-vinhos.component.html',
  styleUrls: ['./cadastro-vinhos.component.scss']
})
export class CadastroVinhosComponent implements OnInit {

  fileName = '';
  dadosVinho: FormGroup;
  nome: string;
  vinicola: string;
  pais_origem: string;
  tipo_vinho = [];
  tipo_uva = [];
  harmonizacao = [];
  vinhos: any;
  uvas: any;
  harmonizacoes: any;
  rotulo: any;
  body: any;
  arquivo: any;

  constructor(public dialogRef: MatDialogRef<CadastroVinhosComponent>, private http: HttpClient) { }

  ngOnInit(): void {
    this.loadForm();
    forkJoin([
      this.http.get("http://localhost:3000/tipo_vinhos"),
      this.http.get("http://localhost:3000/uvas"),
      this.http.get("http://localhost:3000/harmonizacoes")
    ]).subscribe(res => {
      this.vinhos = res[0];
      this.uvas = res[1];
      this.harmonizacoes = res[2];
    })
  }

  loadForm(){
    this.dadosVinho = new FormGroup({
      nome: new FormControl(this.nome, Validators.required),
      vinicola: new FormControl(this.vinicola, Validators.required),
      pais_origem: new FormControl(this.pais_origem, Validators.required),
      tipo_vinho: new FormControl(this.tipo_vinho, Validators.required),
      tipo_uva: new FormControl(this.tipo_uva, Validators.required),
      harmonizacao: new FormControl(this.harmonizacao, Validators.required),
      rotulo: new FormControl(this.rotulo, Validators.required),
    });
  }

  onFileSelected(event: any) {
    var file:File = event.target.files[0];
    if (file) {
        this.fileName = file.name;
        const formData = new FormData();
        formData.append("rotulo", file);
        /*const upload$ = this.http.post("/api/thumbnail-upload", formData);
        upload$.subscribe();*/
        this.arquivo = formData;
        return this.arquivo;
    }


}

  dismiss(){
    this.dialogRef.close();
  }

  cadastrar(){
    this.body = {
      nome: this.dadosVinho.value.nome,
      vinicola: this.dadosVinho.value.vinicola,
      pais_origem: this.dadosVinho.value.pais_origem,
      tipo_vinho: this.dadosVinho.value.tipo_vinho,
      tipo_uva: this.dadosVinho.value.tipo_uva,
      harmonizacao: this.dadosVinho.value.harmonizacao,
      rotulo: this.arquivo
    }
    const formData = new FormData();
    formData.append("rotulo", this.dadosVinho.value.rotulo);
    formData.append("nome", this.dadosVinho.value.nome);
    formData.append("vinicola", this.dadosVinho.value.vinicola);
    formData.append("pais_origem", this.dadosVinho.value.pais_origem);
    formData.append("tipo_vinho", this.dadosVinho.value.tipo_vinho);
    formData.append("tipo_uva", this.dadosVinho.value.tipo_uva);
    formData.append("harmonizacao", this.dadosVinho.value.harmonizacao);


    // let formData = new FormData(this.dadosVinho);

    this.http.post("https://api-trabalho-web.herokuapp.com/vinhos/", formData).subscribe((res) => {
      if(res){
         const res = Swal.fire({
      icon: 'success',
      title: 'Cadastrado concluído com sucesso!',
      confirmButtonColor: 'rgb(76, 177, 76)'
    }).then((r)=>{
      window.location.href = '/home'
    });
      }
    });

   /* const res = Swal.fire({
      icon: 'success',
      title: 'Cadastrado concluído com sucesso!',
      confirmButtonColor: 'rgb(76, 177, 76)'
    });*/
  }

}
