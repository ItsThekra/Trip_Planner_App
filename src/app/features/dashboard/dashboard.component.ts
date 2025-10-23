import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

// Logic for the dashboard component
export class DashboardComponent {
  // Variables:
  origin: string = 'Riyadh'; 
  destination: string = 'Select a destination';
  cities: string[] = ['Riyadh', 'Jeddah', 'Dammam', 'Mecca', 'Medina', 'Abha', 'Taif'];

  // from html to link the button click to this method
  constructor() {
    this.randomizeDestination();
  }

  randomizeDestination() {
  let randomCity = this.origin;

  while (randomCity === this.origin) {
    randomCity = this.cities[Math.floor(Math.random() * this.cities.length)]; // not understand it yet
  }

  this.destination = randomCity;
}

}
