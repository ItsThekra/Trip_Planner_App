// Should import the components used in routee, and define the routes.
import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AuthGuard } from './core/guards/auth.guard'

export const routes: Routes = [
  {
    path: '',            // Home page
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',       // Login page
    component: LoginComponent
  },
    {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',          // any unknown path redirects to login page
    redirectTo: 'login'
  }
];
