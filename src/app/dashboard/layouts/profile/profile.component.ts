import { Component, computed, inject } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  private authService = inject( AuthService );
  private router = inject( Router );


  public user = computed( ()=> this.authService.currentUser() );

  public status = computed( ()=> this.authService.authStatus() );

  constructor() {
    console.log(this.user());
    console.log(this.status());
  }

  onLogout() {
    this.authService.logout();
  }


}
