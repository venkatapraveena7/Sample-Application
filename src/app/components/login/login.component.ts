import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shered.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginData: {} | undefined;
  form = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  loading = false;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private sharedService: SharedService,
    private router: Router) { }

  ngOnInit() {
  }
  get f() { return this.form.controls; }
  get isLoggedIn() {
    this.loginData = this.sharedService.isLoggedIn();
    return this.loginData;
  }
  // loginUser(event: { preventDefault: () => void; target: any; }) {
  //   event.preventDefault()
  //   const target = event.target
  //   const username = target.querySelector('#username').value
  //   const password = target.querySelector('#password').value
  //   var userDetails = this.sharedService.getUserDetails(username, password);
  //   console.log(userDetails);
  //   if (userDetails) {
  //     this.router.navigate(['/dashboard']);

  //   } else {

  //   }
  // }
  onSubmit() {
    this.submitted = true;

    // reset alerts on submit

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    var userDetails = this.sharedService.getUserDetails(this.f['username'].value, this.f['password'].value)
    console.log(userDetails);
    if (userDetails) {
      if (this.sharedService.isLoggedIn()) {
        console.log(this.sharedService.isLoggedIn());
        this.loading = false;
        const redirect = this.sharedService.redirectUrl ? this.sharedService.redirectUrl : '';
        this.router.navigate([redirect]);
      }
    } else {

    }
  }
}