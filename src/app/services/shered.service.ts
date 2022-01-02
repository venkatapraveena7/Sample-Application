import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
export interface CommonAlert {
  type: 'snack-alert';
  value: {
    alertType: 'info' | 'warning' | 'error' | 'success',
    // any valid html code. except for custom component can be passed with classes as well
    htmlContent: string,
    // default v-bottom
    position: 'v-center' | 'v-bottom',
    // duration in ms
    duration?: number;
  };
}
@Injectable({
  providedIn: 'root'
})

export class SharedService {
  redirectUrl!: string;
  constructor() {
  }

  getUserDetails(userName: any, password: any) {
    if (userName == 'Praveena' && password == "Pravi@777") {
      var payload = {
        userName: userName,
        password: password
      }
      localStorage.setItem('userDetails', JSON.stringify(payload));
      return true;
    } else {
      return false;
    }
  }
  isLoggedIn() {
    if (localStorage.getItem('userDetails') != null) {
      const currentUser = JSON.parse(localStorage.getItem('userDetails')!);
      return currentUser;
    }
    return false;
  }


}
