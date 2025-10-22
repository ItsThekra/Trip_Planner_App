import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',            // الصفحة الرئيسية
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',       // صفحة تسجيل الدخول
    component: LoginComponent
  },
    {
    path: 'Dashboard',       
    component: DashboardComponent
  },

  {
    path: '**',          // أي مسار غير معروف يرجع للـ login
    redirectTo: 'login'
  }
];
