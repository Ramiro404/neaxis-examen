import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.scss']
})
export class FormEmployeeComponent implements OnInit {
  form: FormGroup;
  messageError = '';
  constructor(
    private employeeService: EmployeeService,
    private fb: FormBuilder,
    private router:Router
  ) {
    this.form = this.fb.group({
      name: ['',[Validators.maxLength(30), Validators.required]],
      last_name: ['',[Validators.maxLength(30), Validators.required]],
      birthday: ['', Validators.required]
    });
   }

  ngOnInit(): void {

  }

  onSubmit(): void {
    if(this.form.invalid){
      this.form.markAllAsTouched();
    }else {
      const employee: Employee = this.form.getRawValue();
      this.employeeService.save(employee).subscribe(
        (response)=> {
          this.router.navigateByUrl('/empleados/listar');
        },
        (error:HttpErrorResponse)=> {
          this.messageError = 'Algo salio mal, intentalo mas tarde';
        }
      )
    }
  }

}
