import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/models/Group.model';
import { GroupService } from 'src/app/services/group.service';
import { Employee } from 'src/app/models/Employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {
  groups: Group[] = [];
  filteredGroups: Group[] = [];
  employees: Employee[] = [];
  errorMessage = '';
  search = '';
  constructor(
    private groupService: GroupService,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.groupService.findAll().subscribe(
      (response)=> {
        if(response.data.groups){
          this.groups = response.data.groups;
          this.filteredGroups = this.groups;
        }
      },
      (error: HttpErrorResponse)=> {
        this.errorMessage = 'Ocurrio un error, intentalo mas tarde';
      }
    )
  }

  searchGroup(): void {
    if(this.search !== ''){
      this.filteredGroups = this.groups.filter((group) => {
        const name = group.name.toLocaleLowerCase();
        return name.includes(this.search);
      });
    }else {
      this.filteredGroups = this.groups;
    }
  }

  onItemDrop(event: any): void{
    console.log(event.dragData);
    const{ id} = event.dragData;
    this.employeeService.findByGroup(id).subscribe(
      (response)=> {
        if(response.data.employees){
          this.employees = response.data.employees;

        }

      }
    )
  }



}
