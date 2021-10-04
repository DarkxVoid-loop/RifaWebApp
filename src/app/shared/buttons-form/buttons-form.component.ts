import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-buttons-form',
  templateUrl: './buttons-form.component.html',
  styleUrls: ['./buttons-form.component.css']
})
export class ButtonsFormComponent implements OnInit {


  @Output() voltar = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

}
