import { Component, OnInit } from '@angular/core';
import { RegulamentoService } from 'src/app/http-services/regulamento.service';
import { Regulamento } from 'src/app/models/regulamento';
import { NaviControllerItemsService } from 'src/app/shared/naviControllerItems.service';

@Component({
  selector: 'app-regulamento',
  templateUrl: './regulamento.component.html',
  styleUrls: ['./regulamento.component.css']
})
export class RegulamentoComponent implements OnInit {
  regulamentoObj: Regulamento[];

  regulamentoTitle:string;

  regulamento = []

  constructor(private regulamentoService: RegulamentoService, private naviController: NaviControllerItemsService) {

    this.naviController.show();
    this.naviController.doSomethingElseUseful();

    this.regulamentoService.getRegumento().subscribe((result) => {
      this.regulamentoObj = result;
      this.regulamentoTitle = this.regulamentoObj['titulo'];
      for(var i = 0; i < this.regulamentoObj['items'].length; i++){
        if(this.regulamentoObj['items'][i]['titulo'] == " "){
          this.regulamento.push(
            {
             /*  "regulamentoID": String(this.regulamentoObj[i]['items']['regulamentoItemId']), */
              "title": this.regulamentoObj['items'][i]['titulo'],
              "data": this.regulamentoObj["items"][i]['texto'],
              "titleControll": true
            }
          );
        } else {
          this.regulamento.push(
            {
             /*  "regulamentoID": String(this.regulamentoObj[i]['items']['regulamentoItemId']), */
              "title": this.regulamentoObj['items'][i]['titulo'],
              "data": this.regulamentoObj["items"][i]['texto'],
              "titleControll": false
            }
          );
        }
      }
    });
   }

  ngOnInit() {
  }


}
