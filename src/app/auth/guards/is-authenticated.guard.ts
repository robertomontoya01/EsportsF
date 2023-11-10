import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {


  localStorage.setItem('lastPath', state.url); //Guarda la ultima ruta visitada por si queremos regresarlos ahi

  const authService = inject( AuthService );
  const router = inject( Router );

  console.log({ status: authService.authStatus() });

  // Si esta autenticado return true
  if ( authService.authStatus() === AuthStatus.authenticated ) {
    return true;
  }

  if( authService.authStatus() === AuthStatus.checking ) {

    return false;

  }

  // Si no esta autenticado los regresamos al login y returnamos false
  router.navigateByUrl('/auth/login');
  return false;



};
