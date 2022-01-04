import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeesService {
  private path = '../assets/emp.json';

  constructor(private _http: HttpClient) {}

  getEmployees() {
    return this._http.get(this.path).map((response) => {
      return response;
    });
  }
}
