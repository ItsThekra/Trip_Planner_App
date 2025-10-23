import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
// @ts-ignore: jwt-encode has no types
import jwtEncode from 'jwt-encode';


// This page splits into two parts: 1. Component Decorator, 2. Component Class

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {} 

    generateJWT(user: any): string {
    const payload = { 
        sub: user.id, 
        email: user.email, 
        exp: Math.floor(Date.now()/1000) + 3600 
    };
    const secret = 'tHekraAljagthami1234562728282992';
    return jwtEncode(payload, secret);
  }

  
  onSubmit() {
    this.http.get<any[]>('https://68f8a73cdeff18f212b6f31a.mockapi.io/users')

      .subscribe(users => {
        const user = users.find(u => u.email === this.email && u.password === this.password);

        if (user) {
          const token = this.generateJWT(user);
          localStorage.setItem('token', token);
          this.router.navigate(['dashboard']);
        } else {
          this.errorMessage = 'Account not found. Please check your credentials.';
        }
      }, error => {
        console.error('Login request failed:', error);
        this.errorMessage = 'An error occurred. Please try again.';
      });
  }
  
}

