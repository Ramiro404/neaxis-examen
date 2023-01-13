import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListEmployeesComponent,
    EmployeesPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
