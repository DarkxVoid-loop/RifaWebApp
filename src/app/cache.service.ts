import { Injectable } from '@angular/core';
import { Rifa } from './models/rifa';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor() { }
  public getToken() {
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkFkbWluIiwicm9sZSI6IkFkbWluIiwibmJmIjoxNjI5MTI2NDgzLCJleHAiOjE2MjkzODU2ODMsImlhdCI6MTYyOTEyNjQ4MywiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3QiLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdCJ9.q_WWsA_40hrUw1ltA-c3uIUf1WVc7dglh27harfnaNw";
  }

  public setRifa(rifa) {
    localStorage.removeItem("rifa");
    localStorage.setItem("rifa", JSON.stringify(rifa));
  }
  public getRifa() {
   return JSON.parse(localStorage.getItem('rifa')) as Rifa;
  }
  public removeRifa() {
    localStorage.removeItem("rifa");
  }

}
