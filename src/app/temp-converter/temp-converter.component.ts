import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temperature-converter',
  templateUrl: './temp-converter.component.html',
  styleUrls: ['./temp-converter.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class TemperatureConverterComponent {
  celsius: number | null = null; // Celsius input value
  fahrenheit: number | null = null; // Fahrenheit output value
  tempConvert: number[] = []; // Array to hold temperature values

  newTemp: number = 0;

  // Add the new temperature to the array
  addTemp() {
    if (this.newTemp !== null && !isNaN(this.newTemp)) {
      this.tempConvert.push(this.newTemp);
      this.newTemp = 0; // Reset the input field after adding
    }
  }

  constructor() {}

  // Update Fahrenheit whenever Celsius is changed
  updateFahrenheit() {
    this.fahrenheit = this.convertCelsiusToFahrenheit(this.celsius);
  }

  // Method to convert Celsius to Fahrenheit
  convertCelsiusToFahrenheit(celsius: number | null): number | null {
    if (celsius === null) {
      return null;
    }
    return (celsius * 9 / 5) + 32;
  }
}
