import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
    constructor(
        private authService: AuthService,
        private router: Router
    ) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.authService.isLoggedIn()) {
            // redirect to some view explaining what happened
            this.router.navigateByUrl('/login');
            return false;
          } else {
            return true;
          }
    }
}
