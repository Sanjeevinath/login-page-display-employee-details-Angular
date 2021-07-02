import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from '../employee/employee.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';


const routes: Routes = [
  {path:'employee',component:EmployeeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent} 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
