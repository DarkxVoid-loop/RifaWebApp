import { Component, OnInit } from '@angular/core';
import { NaviControllerItemsService } from 'src/app/shared/naviControllerItems.service';

@Component({
  selector: 'app-userMain',
  templateUrl: './userMain.component.html',
  styleUrls: ['./userMain.component.css']
})
export class UserMainComponent implements OnInit {


  constructor(private naviController: NaviControllerItemsService) {

    //metédotos responsaveis por trocar a naviBar
    this.naviController.show();
    this.naviController.doSomethingElseUseful();

   }

  ngOnInit() {
  }

}
