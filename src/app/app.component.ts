import { Component, OnInit, VERSION } from '@angular/core';
import { EmployeesService } from './employees.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: String = 'Http Service Demo';
  employees: any;

  constructor(private _employeesService: EmployeesService) {}
  ngOnInit() {
    this._employeesService
      .getEmployees()
      .subscribe((employees) => (this.employees = employees));
  }
}
