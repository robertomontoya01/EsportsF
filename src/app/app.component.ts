import { Component, computed, effect, inject } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { AuthStatus } from './auth/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authApp';

  private authService = inject( AuthService );
  private router = inject( Router );

  public finishedAuthCheck = computed( ()=> {

    if(this.authService.authStatus() === AuthStatus.checking)
    {
      return false;
    }

    return true;

  });

  public authStatusChangedEffect = effect( ()=> {

    console.log('authSTatus', this.authService.authStatus());

    switch (this.authService.authStatus()) {

      case AuthStatus.checking:
        console.log('checking');
        return;

      case AuthStatus.authenticated:
        this.router.navigateByUrl('/dashboard' );
        return;

      case AuthStatus.notAuthenticated:
        this.router.navigateByUrl('/dashboard' );
        return;


    }


  })

}
