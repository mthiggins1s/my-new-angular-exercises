import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: '',
  templateUrl: './temp-converter.component.html',
  styleUrls: ['./temp-converter.component.css'],
  standalone: true, // Only if you're using a standalone component
  imports: [FormsModule, CommonModule] // Use the imports for standalone component if necessary
})
export class TemperatureConverterComponent {
  celsius: number | null = null; // Celsius input value
  fahrenheit: number | null = null; // Fahrenheit output value

  constructor() {}

  // Update Fahrenheit whenever Celsius is changed
  ngOnChanges() {
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
