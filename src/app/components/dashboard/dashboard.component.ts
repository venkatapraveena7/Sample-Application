import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shered.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  loginData: any = {};
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }
  get isLoggedIn() {
    this.loginData = this.sharedService.isLoggedIn();
    return this.loginData;
  }
}
