import { ClientesService } from './../../shared/clientes.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  constructor(
    private service:ClientesService,
    private firestore:AngularFirestore,
    private toastr:ToastrService
  ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.service.formData = {
      id:null,
      nomeCompleto:"",
      idade:0,
      endereco:"",
      cpf:""
    }
  }

  onSubmit(form:NgForm){
    let data = Object.assign({},form.value) ;
    delete data.id;
    if(form.value.id == null){
      this.firestore.collection("clientes").add(data)
    }else{
      this.firestore.doc('clientes/'+form.value.id).update(data)
    }
    this.resetForm()
    this.toastr.success("Dados enviados com sucesso", "clientes")
  }
}
