import { Component, OnInit } from '@angular/core';

import { Cliente } from '../cliente'
import { ClientesService } from '../../clientes.service'

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente
  success: boolean = false
  errors:string[]

  constructor(private service : ClientesService ) { 
    this.cliente = new Cliente()
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.salvar(this.cliente).subscribe( response => {
      this.success=true
      this.errors = []
      this.cliente = response
    }, response => {
      this.errors = response.error.errors
      this.success=false

    })
  }
}
