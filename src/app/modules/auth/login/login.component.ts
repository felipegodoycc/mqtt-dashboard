import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthAPIService } from 'src/app/core/services/auth-api.service';
import { UsuarioAPI } from 'src/app/shared/models/usuarioAPI.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioAPI = new UsuarioAPI();
  recordarme = false;

  constructor(private auth: AuthAPIService,
              private router: Router) { }

  ngOnInit() {
    if ( localStorage.getItem('username')) {
      this.usuario.username = localStorage.getItem('username');
      this.recordarme = true;
    }
  }

  onSubmit(f: NgForm) {
    if (f.invalid) { return; }
    Swal.fire({
      allowOutsideClick: false,
      title: 'Espere porfavor',
      icon: 'info'
    });
    Swal.showLoading();
    this.auth.login(this.usuario).subscribe( res => {
      Swal.close();
      if (res.reset_password){
        this.router.navigateByUrl(`/auth/reset_password/${ res.token }`);
      } else {
        if (this.recordarme) { localStorage.setItem('username', this.usuario.username); }
        this.router.navigate(['home']);
      }
    }, err => {
      console.log(err);
      Swal.fire({
        title: 'Error',
        text: err,
        icon: 'error'
      });
    });
  }
}
