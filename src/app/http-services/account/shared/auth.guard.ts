import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router){}
  public canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = JSON.parse(localStorage.getItem('token'));

    if(token){
      return true
    } else {
      this.router.navigate(['userAcess/login']);
      return false;
    }
  }
}
