import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesFormComponent } from './clientes/clientes-form/clientes-form.component';
import { ClientesListaComponent } from './clientes/clientes-lista/clientes-lista.component';
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { path: 'clientes-form', component: ClientesFormComponent },
  { path: 'clientes-lista', component: ClientesListaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
