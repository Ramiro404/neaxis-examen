import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [];
  currentEmployees: Employee[] = [];
  totalPagesArray: number [] = [];
  totalPages = 0;
  messageError = '';
  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.employeeService.findAll().subscribe(
      (response) => {
        if (response.data.employees) {
          this.employees = response.data.employees;
          this.totalPages = Math.ceil(this.employees.length / 10);
          this.gotoPage(0);
          for (let index = 0; index < this.totalPages; index++) {
            this.totalPagesArray.push(index);
          }
        }
      },
      (error: HttpErrorResponse) => {
        this.messageError = 'Algo salio mal';
        console.error(error);
      }
    )
  }

  gotoPage(page: number): void{
    let skip;
    if(page == 0){
      skip = 0;
    }else {
      skip = page * 10;
    }

    let limit = skip + 10;
    if(limit > this.employees.length){
      limit = this.employees.length;
    }
    this.currentEmployees = [];
    for (let index = skip; index < limit; index++) {
      const element = this.employees[index]
      this.currentEmployees.push(element);
    }
  }

}
