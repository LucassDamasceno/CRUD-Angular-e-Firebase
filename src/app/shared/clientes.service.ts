import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  formData:Cliente;
  
  constructor(
    private firestore:AngularFirestore
  ) { }
  getClientes(){
    return  this.firestore.collection("clientes").snapshotChanges()
  }
}
