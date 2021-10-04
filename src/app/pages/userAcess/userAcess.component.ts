import { Component, OnInit } from '@angular/core';
import { NaviControllerItemsService } from 'src/app/shared/naviControllerItems.service';

@Component({
  selector: 'app-userAcess',
  templateUrl: './userAcess.component.html',
  styleUrls: ['./userAcess.component.css']
})
export class UserAcessComponent implements OnInit {

  constructor(private naviController: NaviControllerItemsService) {

      //metédotos responsaveis por trocar a naviBar
      this.naviController.show();
      this.naviController.doSomethingElseUseful();
    }

  ngOnInit() {
  }

}
