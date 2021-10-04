import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  constructor(private router: Router){}
  public canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const adminToken = JSON.parse(localStorage.getItem('adminToken'));

    if(adminToken){
      return true
    } else {
      this.router.navigate(['admin']);
      return false;
    }
  }

}
