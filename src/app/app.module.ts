import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeesService } from './employees.service';

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  declarations: [AppComponent],
  providers: [EmployeesService],

  bootstrap: [AppComponent],
})
export class AppModule {}
