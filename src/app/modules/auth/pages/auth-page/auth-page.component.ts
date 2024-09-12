import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, CommonModule],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent implements OnInit {
  errorSession: boolean = false;
  formLogin: FormGroup = new FormGroup({});

  constructor(private asAuthService: AuthService, private cookie: CookieService){}

  ngOnInit():void{
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ])
      }
    );
  }
  sendLogin(): void {
    const {email, password} = this.formLogin.value;
    this.asAuthService.sendCredentials(email, password)
    .subscribe(responseOk => {
/*       {
        "email":"test@test.com",
        "password":"12345678" 
    } */
      console.log("Session iniciada correcta");
      const { tokenSession, data } = responseOk;
      this.cookie.set('token', tokenSession, 4, '/');
    },
    err => {
      this.errorSession = true;
      console.log("Ocurrio error con tu email o password");
    }
  )
  }
}
