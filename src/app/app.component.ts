import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './services/shered.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample';
  loginData: any = {};
  constructor(private sharedService: SharedService, private router: Router) { }
  get isLoggedIn() {
    this.loginData = this.sharedService.isLoggedIn();
    return this.loginData;
  }
  logout() {
    localStorage.removeItem('userDetails');
    this.router.navigate(['/login']);
  }

}
