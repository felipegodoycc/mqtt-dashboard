import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/shared/models/usuario.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  usuario: UsuarioModel;

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  onSubmit(f: NgForm){
    if(f.invalid) return;
    this.auth.registrar(this.usuario).subscribe( res => {
      console.log(res)
      this.router.navigate(['home'])
    }, err => {
      console.log(err.error.error.message)
    })
  }

}
