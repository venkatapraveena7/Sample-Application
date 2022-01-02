import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeemanagementComponent } from './components/employeemanagement/employeemanagement.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
{ path: 'employeemanagement', component: EmployeemanagementComponent, canActivate: [AuthGuard] },
{ path: 'login', component: LoginComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
