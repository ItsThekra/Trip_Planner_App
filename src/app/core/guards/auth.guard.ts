import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ // auth.guard.ts: injectable in any part of the app
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');

    if (token) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
