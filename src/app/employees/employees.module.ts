import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormEmployeeComponent } from './components/form-employee/form-employee.component';


@NgModule({
  declarations: [
    ListEmployeesComponent,
    EmployeesPageComponent,
    FormEmployeeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
