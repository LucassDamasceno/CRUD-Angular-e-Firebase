import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AngularFireModule} from '@angular/fire'
import {AngularFirestoreModule} from '@angular/fire/firestore'
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import {environment} from '../environments/environment';
import { ClienteComponent } from './clientes/cliente/cliente.component';
import { ListaClienteComponent } from './clientes/lista-cliente/lista-cliente.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
 
@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ListaClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
