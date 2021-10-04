import { Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModelComponent>, private router: Router) { }

  ngOnInit(): void {
  
  }

  onNoClick(): void {
    this.dialogRef.close();
    
  }

  credit(){
    this.router.navigate(['/rifa/:id/model/pagamentos/checkout'])
  }

  saldo(){
    this.router.navigate(['/rifa/:id/model/pagamentos/emprestimo'])
  }

}
