import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  

// Link all somthing togther here:
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// The Login Component Class:
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {} // Add HttpClient and Router

  onSubmit() {
    // Fetch data from MockAPI: 
    this.http.get<any[]>('https://68f8a73cdeff18f212b6f31a.mockapi.io/users')
      .subscribe(users => {
        const user = users.find(u => u.email === this.email && u.password === this.password);

        if (user) {
          // موجود: نروح للداشبورد
          this.router.navigate(['Dashboard']);
        } else {
          // غير موجود: رسالة خطأ
          this.errorMessage = 'Account not found. Please check your credentials.';
        }
      }, error => {
        this.errorMessage = 'An error occurred. Please try again.';
      });
  }
}

