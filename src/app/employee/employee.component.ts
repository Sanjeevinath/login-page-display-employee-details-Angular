import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  data:any;
  
  title = 'Task1';
  constructor(private service1Service:Service1Service) { 
  }
      ngOnInit()
      {
       //this.data = this.service1Service.getData();
        this.service1Service.getData().subscribe((emp)=>(this.data=emp))
      }
    }
  
  


