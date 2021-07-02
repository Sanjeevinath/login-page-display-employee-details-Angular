
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  value=[
    {
      email:"sanjeev@gmail.com",password:"Sanj@123"
    }
  ];
  get(){
    return this.value;
  }
  set(userDetails:any){
    let sample = {
      email:userDetails.email,password:userDetails.password
    }
    this.value.push(sample);
    console.log("new value",this.value);

  }

  constructor() { }
  
}