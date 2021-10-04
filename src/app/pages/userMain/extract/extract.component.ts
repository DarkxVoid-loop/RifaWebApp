import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ExtratoService } from 'src/app/http-services/account/shared/extrato.service';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.css']
})
export class ExtractComponent  implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'data1', 'data2'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  private clientID = JSON.parse(localStorage.getItem('id'));


  constructor(private extractService: ExtratoService) {

    this.extractService.getterHistoryEmprestimo(this.clientID).subscribe((result) => {
      console.log(result);
    });
   }


}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  data1: string;
  data2: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', data1: '0.2222', data2: '055228' },
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', data1: '', data2: '' },
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', data1: '', data2: '' },
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', data1: '', data2: '' },
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', data1: '', data2: '' },
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', data1: '', data2: '' },
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', data1: '', data2: '' },
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', data1: '', data2: '' },
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', data1: '', data2: '' },
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', data1: '', data2: '' },
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na', data1: '', data2: '' },
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg', data1: '', data2: '' },
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al', data1: '', data2: '' },
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si', data1: '', data2: '' },
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P', data1: '', data2: '' },
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S', data1: '', data2: '' },
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl', data1: '', data2: '' },
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar', data1: '', data2: '' },
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K', data1: '', data2: '' },
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca', data1: '', data2: '' },
];
