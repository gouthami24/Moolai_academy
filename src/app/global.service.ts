import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public access_token = "";
  public email = "";
  public contact=true;
  constructor() { 
    this.email = "";
      console.log("My intial global email value is: " + this.email);
  }
  setEmail(val: string){
    this.email = val;
  }

  getEmail(){
    return this.email;
  }
}