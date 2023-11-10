import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  private fb = inject( FormBuilder );
  private authService = inject( AuthService );
  private router = inject( Router );

  public myForm = this.fb.group({
    nickname: ['Maquina de Fuego', [Validators.required, Validators.minLength(3)]],
    email: ['maquina@gmail.com', [Validators.required, Validators.email]],
    password: ['hola1234', [Validators.required, Validators.minLength(6)]]
  });

  createAccount() {

    const { email, password, nickname } = this.myForm.value;

    if (email && password && nickname) {
      this.authService.createAccount(nickname, email, password)
      .subscribe({
        next: () => this.router.navigateByUrl('/dashboard'),
        error: (message: any) => {
          console.log("ERROR", message);

          Swal.fire('Error', message, 'error')
        }
      });

    }
  }

}
