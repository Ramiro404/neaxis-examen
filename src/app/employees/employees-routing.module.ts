import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEmployeeComponent } from './components/form-employee/form-employee.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';

const routes: Routes = [
  { path: 'listar', component: ListEmployeesComponent },
  { path: 'formulario', component: FormEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
