import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseApi } from '../models/Response.model';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private API_URL = environment.URL_BASE + '/groups/ramiro';
  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(this.API_URL);
  }


}
