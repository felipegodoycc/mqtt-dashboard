import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/shared/models/usuario.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  recordarme = false;

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
    if( localStorage.getItem('email')) {
      this.usuario.email = localStorage.getItem('email');
      this.recordarme = true;
    }
  }

  onSubmit(f: NgForm){
    if(f.invalid) return;
    Swal.fire({
      allowOutsideClick: false,
      title: 'Espere porfavor',
      icon: 'info'
    })
    Swal.showLoading();
    this.auth.login(this.usuario).subscribe( res => {
      Swal.close();
      if(this.recordarme) localStorage.setItem('email', this.usuario.email)
      this.router.navigate(['home'])
    }, err => {
      console.log(err.error.error.message)
      Swal.fire({
        title: 'Error',
        text: err.error.error.message,
        icon: 'error'
      })
    })
  }

}
