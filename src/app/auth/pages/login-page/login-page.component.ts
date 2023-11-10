import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  private fb = inject( FormBuilder );
  private authService = inject( AuthService );
  private router = inject( Router );



  public myForm = this.fb.group({
    email: ['maquina@gmail.com', [Validators.required, Validators.email]],
    password: ['hola1234', [Validators.required, Validators.minLength(6)]]
  });


  login() {

    const { email, password } = this.myForm.value;

    if (email && password) {
      this.authService.login(email, password)
      .subscribe({
        next: () => this.router.navigateByUrl('/dashboard'),
        error: (message: any) => {
          Swal.fire('Error', message, 'error')
        }
      });

    }
  }


}
