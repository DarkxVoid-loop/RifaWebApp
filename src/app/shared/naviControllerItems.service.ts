import {Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NaviControllerItemsService {

  visible: boolean;

  constructor() {this.visible = false; }

  hide() { this.visible = false; console.log(this.visible) }

  show() { this.visible = true; console.log(this.visible)}

  toggle() { this.visible = !this.visible; }

  doSomethingElseUseful() { }



}
