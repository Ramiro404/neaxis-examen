import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEmployeeComponent } from './components/form-employee/form-employee.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';

const routes: Routes = [
  {
    path: '', component: EmployeesPageComponent,  children: [
      { path: 'listar', component: ListEmployeesComponent },
      { path: 'formulario', component: FormEmployeeComponent },
      { path: '', redirectTo: 'listar', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
