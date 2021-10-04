import { AccountGrudServiceService } from 'src/app/http-services/account/shared/accountGrudService.service';
import { NaviControllerItemsService } from 'src/app/shared/naviControllerItems.service';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/http-services/account/shared/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})


export class NavComponent implements OnInit {

  private userId = JSON.parse(localStorage.getItem('id'));

  saldo: any = 0;
  apelido = "Zaza"

  public isMenuCollapsed = true;

  showItems: boolean = false;

  constructor(private accountService: AccountService,
    public naviController: NaviControllerItemsService,
    private accountCrudServise: AccountGrudServiceService) {

    if(this.accountService.verifyToken()){
      this.showItems = true;
      this.accountCrudServise.getterSaldo(this.userId).subscribe((result) => {this.saldo = result});
    }


   }


  ngOnInit() {
    this.accountService.showItemsInNav.subscribe(
      _showItems => this.showItems = _showItems
    );
  }

  onSubmit(){
    this.accountService.loggout();
  }

  sendMsg(){
    const urlLink = `http://api.whatsapp.com/send?phone=559492064861&text=Olá`
    return window.open(urlLink, '_blank');
  }

}
