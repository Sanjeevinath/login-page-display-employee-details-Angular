import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  url = 'http://localhost:4000';
constructor(private http: HttpClient) { }
getData(): Observable<any> {
  return this
          .http
          .get(`${this.url}/employeedetails`); 
      }
      
  employeedetails=[{
    id:1,
    firstname:"Alex",
    lastname:"Pandian",
    designation:"Salesman",
    age:24,
    address:"Chennai"
  },
  {
    id:2,
    firstname:"Boney",
    lastname:"Kapoor",
    designation:"Developer",
    age:26,
    address:"Erode"
  },
  {
    id:3,
    firstname:"Charlie",
    lastname:"sekar",
    designation:"Salesman",
    age:24,
    address:"Chennai"
  },
  {
    id:4,
    firstname:"David",
    lastname:"Billa",
    designation:"Tester",
    age:25,
    address:"Coimbatore"
  },
  {
    id:5,
    firstname:"Ezhil",
    lastname:"arasan",
    designation:"Manager",
    age:24,
    address:",Bangalore"
  },
  {
    id:6,
    firstname:"Hema",
    lastname:"Vilas",
    designation:"Tester",
    age:25,
    address:"Chennai"
  },
  {
    id:7,
    firstname:"Farukh",
    lastname:"Khan",
    designation:"Manager",
    age:25,
    address:"Coimbatore"
  },
  {
    id:8,
    firstname:"Gowtham",
    lastname:"Gambhir",
    designation:"Developer",
    age:24,
    address:"Chennai"
  },
  {
    id:9,
    firstname:"Iniyan",
    lastname:"Kumaran",
    designation:"Tester",
    age:26,
    address:"8Kerala"
  },
  {
    id:10,
    firstname:"John",
    lastname:"Durai",
    designation:"Manager",
    age:28,
    address:"Chennai"
  }
];


}





  
