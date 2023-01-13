import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './group-routing.module';
import { GroupListComponent } from './components/group-list/group-list.component';
import { FormsModule } from '@angular/forms';
import { NgDragDropModule } from 'ng-drag-drop';

@NgModule({
  declarations: [
    GroupListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgDragDropModule.forRoot(),
    GroupRoutingModule
  ]
})
export class GroupModule { }
