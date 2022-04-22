import { AuthService } from './auth.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable() //para usar outro service aqui, o authService
export class AuthGuard implements CanActivate {


  constructor(private authService: AuthService,
              private router: Router) {
  }

  /*Executado antes de carregar a rota*/
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.authService.isAuthenticated().then(
      (authenticated: boolean) => {
        if(authenticated) {
          return true;
        } else {
          this.router.navigate(['/']);
        }
      }
    );
  }

}
