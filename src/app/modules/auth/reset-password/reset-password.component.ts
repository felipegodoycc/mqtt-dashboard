import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthAPIService } from 'src/app/core/services/auth-api.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  password: string;
  confirmPassword: string;
  token: string;

  constructor(private router: Router,
              private rutaActiva: ActivatedRoute,
              private auth: AuthAPIService) { }

  ngOnInit() {
    this.token = this.rutaActiva.snapshot.params.token;
  }

  onSubmit(form: NgForm){
    if(this.password === this.confirmPassword){
      this.auth.resetPassword(this.token, this.password).subscribe( res => {
        this.router.navigateByUrl('/auth/login');
      });
    }
  }

}
