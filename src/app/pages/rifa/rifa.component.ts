import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { timer } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { NaviControllerItemsService } from 'src/app/shared/naviControllerItems.service';
import { ModelComponent } from './model/model.component';

@Component({
  selector: 'app-rifa',
  templateUrl: './rifa.component.html',
  styleUrls: ['./rifa.component.css']
})
export class RifaComponent implements OnInit{

	title = 'rifa';
	attributeCondition = false;
  selectedNumbers:String[] = [];
	rifa = {
		'id': '8234',
		'status': 'Em andamento',
		'titulo': 'Título da rifa',
		'descricao': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla hic impedit voluptatem perferendis voluptas ullam eligendi accusamus nobis, quas mollitia animi obcaecati fugit tempore a asperiores ut',
		'precoPorNumero': 'R$10,00',
		'qtdPorCPF': '15',
		'dataSorteio': '17/07/2021',
		'premio': 'Pix de R$500,00',
		'numeroDoSorteio': '81723',
		'resultado': ''
	};
	numeros = [];
  public filteredItems;

  allNumbers = 0;
  enabledNumbers = 0;
  reservedNumbers = 0;
  paidNumbers = 0;
  myNumbers = 0;

  async ngOnInit() {
  }

  constructor(private route: ActivatedRoute, private naviController: NaviControllerItemsService, private router: Router, public dialog: MatDialog){
    //metédotos responsaveis por trocar a naviBar
    this.naviController.show();
    this.naviController.doSomethingElseUseful();
    this.generateNumbers(201);
    this.filteredItems = [...this.numeros];


    for(var i = 0; i < this.numeros.length; i++ ){
      if(this.numeros[i]["status"] == "disponivel"){
        this.enabledNumbers++;
      } else if(this.numeros[i]["status"] == "pago"){
        this.paidNumbers++;
      } else if(this.numeros[i]["status"] == "reservado"){
        this.reservedNumbers++;
      } else if(this.numeros[i]["status"] == "selected"){
        this.myNumbers++;
      }
      this.allNumbers++;
    }
  }

  public generateNumbers(amountNumbers: number){
    var _id;
    amountNumbers = amountNumbers - 1;
    for(let i=0; i < amountNumbers; i++){
      if(i < 10){
        _id = "00" + i;
        this.numeros.push({'id': i,'value': _id, 'status': 'disponivel', 'dono': '' });
      } else if(i < 100){
                _id = "0" + i;
        this.numeros.push({ 'id': i,'value': _id, 'status': 'disponivel', 'dono': '' });
      } else{
        _id = i;
        this.numeros.push({'id': i,'value': _id, 'status': 'disponivel', 'dono': ''})
      }
    }
  }


	// changeAttributeCondition() {
	// 	this.attributeCondition = !this.attributeCondition
	// };
  filterByStatus(category:any) {
    this.filteredItems = this.numeros.filter((item: any) => {
      return item.status.includes(category);
    })
  };
  reset() {
    this.filteredItems = [...this.numeros];
  }

  //this function is responsible for available numbers select
  selectNumber(numbersId:any){
/*     var _id;

    for(var i = 0; i < numbersId.length; i++){
      if(numbersId == ('00' + i)){
        _id
      }
    } */


    if (this.selectedNumbers.indexOf(numbersId) == -1) {
        if (this.numeros[numbersId].status == "disponivel") {
          this.selectedNumbers.push(numbersId);
          this.numeros[numbersId].status = "selected"
          this.itemsDeselected(numbersId);
        } else {
        }
    } else {
      const index = this.selectedNumbers.indexOf(numbersId);
      this.selectedNumbers.splice(index, 1);
      if(this.numeros[numbersId].status == "selected"){
        this.numeros[numbersId].status = "disponivel"
      }
    }
  }

  enabledButton(){
    if (this.selectedNumbers.length >= 1) {
      return true
    } else {
      return false
    }
  }

  reservNumbers(){
    for(var i = 0; i < this.selectedNumbers.length; i++){
      this.numeros[Number(this.selectedNumbers[i])].status = "reservado";
    }
    this.selectedNumbers = [];
    this.enable = true
  }

  itemsDeselected(numbersIdDeselect:any){
    const contador = timer(60000);
    contador.subscribe((n) => {
      if(this.numeros[numbersIdDeselect].status == "selected"){
        this.numeros[numbersIdDeselect].status = "disponivel"
        this.selectedNumbers = [];
      }
    });
  }

  enable:boolean = false

  enabledCompra(){
    if (this.enable){
      return true
    }
    else{
      return false
    }
  }

  acessarRotaCheckout(){
    this.openDialog();
    this.enable = false;
  }



  openDialog(): void {
    this.enable = false;
    const dialogRef = this.dialog.open(ModelComponent, {
      width: '65%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
