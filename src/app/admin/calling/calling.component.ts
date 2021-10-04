import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-calling',
  templateUrl: './calling.component.html',
  styleUrls: ['./calling.component.css']
})
export class CallingComponent implements OnInit {

  //this variable is responsibility for controller a number;
  conterToNumber = 0;
  //number to callign
  numberToCalling = "55";
  //this is from number to calling
  fromNumber = "552120180349"

  constructor(private http:HttpClient) { }

  ngOnInit() {
    console.log("oi");
  }


  keyboardNumbers = [
    {"id": "1", "value": "1"},
    {"id": "2", "value": "2"},
    {"id": "3", "value": "3"},
    {"id": "4", "value": "4"},
    {"id": "5", "value": "5"},
    {"id": "6", "value": "6"},
    {"id": "7", "value": "7"},
    {"id": "8", "value": "8"},
    {"id": "9", "value": "9"},
    {"id": "10", "value": "0"},

  ]

  items = [...this.keyboardNumbers];

  makeCall(){

    const url = "https://api.apifonica.com/v2/accounts/acc156af35f-4b2b-3e0e-9c9d-2bb88960b2d4/calls";

    const data = {
      "from" : this.fromNumber,
      "to": this.numberToCalling,
      "call_app_sid": "app6589d3f8-e4ea-4923-9a2d-584ff61a620e"
    }

    return this.http.post(url, JSON.stringify(data), {headers: new HttpHeaders(
      {
      'Content-Type': 'application/json',
      Authorization: "Basic YWNjMTU2YWYzNWYtNGIyYi0zZTBlLTljOWQtMmJiODg5NjBiMmQ0OmF1dDc4MjMxMGRmLThiMzgtM2MwMi05NmY0LTk1NTE5NjNkNTYxMA=="
      }
    )}).subscribe(result => console.log(result),
    (error) => {
      console.log(error);
    })
  }

  cathNumbers(valueNumbers:any){
    if(this.conterToNumber < 11){
      //add 1 for cont a number
      this.conterToNumber++;
      this.numberToCalling = this.numberToCalling + valueNumbers;
    }
    if(this.conterToNumber == 11 ){
      console.log(this.numberToCalling);
    }
  }
}
