import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupListComponent } from './components/group-list/group-list.component';

const routes: Routes = [
  { path: 'listar', component: GroupListComponent},
  { path: '', redirectTo: 'listar', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
