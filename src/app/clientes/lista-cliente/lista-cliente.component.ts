import { Cliente } from './../../models/cliente';
import { ClientesService } from './../../shared/clientes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.scss']
})
export class ListaClienteComponent implements OnInit {

  list:Cliente[];
  constructor(
    private service:ClientesService
  ) { }

  ngOnInit() {
    this.service.getClientes().subscribe(actionArray =>{
      this.list = actionArray.map(item =>{
        return{
          id:item.payload.doc.id,
          ...item.payload.doc.data() 
        }  as Cliente
      
      })
    })
  }
  onEdit(cliente:Cliente){
    this.service.formData = Object.assign({},cliente) ;
  }

}
