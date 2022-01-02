import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeemanagementComponent } from './components/employeemanagement/employeemanagement.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PasswordValidator } from './password-validator.directive';
import { SearchFilterPipe } from './search-filter.pipe';
import { HighlightPipe } from './highlight.pipe';
import { DateformatPipe } from './dateformat.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeemanagementComponent,
    LoginComponent,
    PasswordValidator,
    SearchFilterPipe,
    HighlightPipe,
    DateformatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
