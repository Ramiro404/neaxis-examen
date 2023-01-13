import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';


@NgModule({
  declarations: [
    ListEmployeesComponent,
    EmployeesPageComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
