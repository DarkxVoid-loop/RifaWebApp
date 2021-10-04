import { NaviControllerItemsService } from 'src/app/shared/naviControllerItems.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  constructor(private naviController: NaviControllerItemsService) {
    this.naviController.hide();
    this.naviController.doSomethingElseUseful();
  }

  ngOnInit() {
  }

}
