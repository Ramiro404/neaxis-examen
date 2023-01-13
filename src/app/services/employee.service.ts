import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/Employee.model';
import { ResponseApi } from '../models/Response.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  //private API_URL = `${environment}/employees/ramiro`;
  private API_URL = 'https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/ramiro'
  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<ResponseApi<Employee[]>> {
    return this.http.get<ResponseApi<Employee[]>>(this.API_URL);
  }

  save(employee: Employee): Observable<ResponseApi<Employee>> {
    return this.http.post<ResponseApi<Employee>>(this.API_URL, employee);
  }
}
