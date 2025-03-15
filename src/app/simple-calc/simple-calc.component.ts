import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-calc',
  imports: [FormsModule],
  templateUrl: './simple-calc.component.html',
  styleUrl: './simple-calc.component.css'
})
export class CalculatorComponent {
  num1: number = 0;
  num2: number = 0;
  operation: string = 'add';
  result: number = 0;

  calculate() {
    switch (this.operation) {
      case 'add':
        this.result = this.num1 + this.num2;
        break;
      case 'subtract':
        this.result = this.num1 - this.num2;
        break;
      case 'multiply':
        this.result = this.num1 * this.num2;
        break;
      case 'divide':
        this.result = this.num2 !== 0 ? this.num1 / this.num2 : NaN;
        break;
      default:
        this.result = 0;
    }
  }
}
