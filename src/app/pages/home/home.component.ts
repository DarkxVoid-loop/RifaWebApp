import { NaviControllerItemsService } from 'src/app/shared/naviControllerItems.service';
import { Component, OnInit } from '@angular/core';
import { NavComponent } from 'src/app/componentes/nav/nav.component';
import { HomeService } from 'src/app/http-services/home.service';
import { Rifa } from 'src/app/models/rifa';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showItemsInIndex: boolean = true;

  rifa: Rifa[];

  items = [
    {'id':'0', 'title': 'RIFA - PS5 Geladeira Tv', 'img': '../../../assets/imagens/premiacao.jpeg', 'subtitle': 'carne 0', 'premiacao': 'Carne', 'reservadas': '80', 'status': 'Disponivel'},
    {'id':'1', 'title': 'Rifa - PS4/PS3', 'img': '../../../assets/imagens/premiacao-2.jpeg', 'subtitle': 'carne 1', 'premiacao': '1° Lugar: PS4/2° Lugar: PS3', 'reservadas': '75', 'status': 'Disponivel'},
    {'id':'2', 'title': 'Rifa - R$500,00', 'img': '../../../assets/imagens/premiacao.jpeg', 'subtitle': 'carne 2', 'premiacao': 'R$30.999,00', 'reservadas': '15', 'status': 'Disponivel'},
    {'id':'3', 'title': 'Rifa - Peixes', 'img': '../../../assets/imagens/premiacao-2.jpeg', 'subtitle': 'carne 3', 'premiacao': 'R$40.999,00', 'reservadas': '200', 'status': 'Indisponivel'},
    {'id':'4', 'title': 'Rifa - 3 Carros', 'img': '../../../assets/imagens/premiacao.jpeg', 'subtitle': 'carne 4', 'premiacao': 'R$45.999,00', 'reservadas': '75', 'status': 'Disponivel'},
    {'id':'5', 'title': 'Rifa - 10 Apartamentos', 'img': '../../../assets/imagens/premiacao.jpeg', 'subtitle': 'carne 5', 'premiacao': 'R$50.999,00', 'reservadas': '200', 'status': 'Indisponivel'},
    {'id':'6', 'title': 'Rifa - R$.000.000,00', 'img': '../../../assets/imagens/premiacao.jpeg', 'subtitle': 'carne 6', 'premiacao': 'R$5.999,00', 'reservadas': '200', 'status': 'Indisponivel'},
  ]

  constructor(private naviController: NaviControllerItemsService, private homeService: HomeService) {
    this.naviController.show();
    this.naviController.doSomethingElseUseful();

    this.homeService.getterRifas().subscribe((result) => {
      this.rifa = result;
    });
   }

  ngOnInit() {



  }



  conterGrafic(index:any){;
    var porcentagem;

    porcentagem = (Number(this.items[index]) * 100) / 200;

    return porcentagem;
  }

}
