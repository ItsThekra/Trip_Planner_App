import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  origin = 'Riyadh';
  destination = 'Select a destination';
  url = '';
  shortUrl = '';

  constructor(private http: HttpClient) {}

  randomizeDestination() {
    const cities = ['Jeddah', 'Dammam', 'Mecca', 'Medina', 'Abha', 'Taif'];
    this.destination = cities[Math.floor(Math.random() * cities.length)];
    this.url = `https://www.google.com/maps/dir/${this.origin}/${this.destination}/`;

    const api =  `https://api.allorigins.win/get?url=${encodeURIComponent(`https://is.gd/create.php?format=simple&url=${this.url}`)}`;
   
    this.http.get<any>(api).subscribe(res => {
      this.shortUrl = res.contents.trim();  
    });
  }
}