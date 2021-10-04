import { ApiDominioBaseUrl } from './../../../environments/environment';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class NavService{

  private readonly endpointDomain = ApiDominioBaseUrl;

  navIsVisible: boolean;
  userSaldo: String

  constructor(){
    this.navIsVisible = false;
  }

  hide() {this.navIsVisible = false}

  show() {this.navIsVisible = true}

  toggle() { this.navIsVisible = !this.navIsVisible; }

  doSomethingElseUseful() { }

}
