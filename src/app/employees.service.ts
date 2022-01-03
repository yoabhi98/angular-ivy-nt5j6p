import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeesService {
  private path = '../assets/employees.json';

  constructor(private _http: HttpClient) {}

  getEmployees() {
    return this._http.get(this.path).map((response) => {
      return response;
    });
  }
}
