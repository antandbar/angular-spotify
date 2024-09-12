import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const sessionGuard: CanActivateFn = (route, state) => {
  const checkCookieSession = (): boolean => {
    try {
      const router = new Router();
      const cookieService = inject(CookieService);
      const token: boolean = cookieService.check('token');

      if (!token) {
        router.navigate(['/', 'auth']);
      }

      return token;
    } catch (e) {
      console.log('Algo sucedió: ', e);
      return false;
    }
  };

  return checkCookieSession();
};
