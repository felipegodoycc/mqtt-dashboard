import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  forma:FormGroup;

  constructor() {
    this.forma = new FormGroup({
      'nombre': new FormControl('', Validators.required),
      'apellido': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email])
    })
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.forma)
    console.log(this.forma.value)
  }

}
