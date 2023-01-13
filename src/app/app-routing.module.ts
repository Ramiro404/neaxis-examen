import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'inicio', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'empleados', loadChildren: () => import('./employees/employees.module').then( m => m.EmployeesModule)},
  { path: 'grupos', loadChildren: ()=> import('./group/group.module').then(m => m.GroupModule)},
  { path: '**', redirectTo: 'inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
