import { Component, OnInit } from '@angular/core';
import EmployeesJson from 'src/assets/employee.json';
interface EMPLOYEE {
  empid: number;
  empname: string;
  position: string;
  date: string;
}
@Component({
  selector: 'app-employeemanagement',
  templateUrl: './employeemanagement.component.html',
  styleUrls: ['./employeemanagement.component.scss']
})
export class EmployeemanagementComponent implements OnInit {
  Employees: EMPLOYEE[] = EmployeesJson;
  isDesc: boolean = false;
  column: string = "EmpName";
  searchText = '';
  constructor() { }

  ngOnInit(): void {
  }
  sort(property: string) {
    this.isDesc = !this.isDesc; //change the direction
    this.column = property;
    let direction = this.isDesc ? 1 : -1;
    this.Employees.sort(function (a, b) {
      console.log(a);
      console.log(b);
      if (a['empname'] < b['empname']) {
        return -1 * direction;
      } else if (a['empname'] > b['empname']) {
        return 1 * direction;
      } else {
        return 0;
      }
    });
  }
}
