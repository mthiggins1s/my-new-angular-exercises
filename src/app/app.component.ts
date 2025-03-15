import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ClickCounterComponent } from './click-counter/click-counter.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FavoriteColorsComponent } from './favorite-colors/favorite-colors.component';
import { TemperatureConverterComponent } from './temp-converter/temp-converter.component';
import { CalculatorComponent } from './simple-calc/simple-calc.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ClickCounterComponent, TaskListComponent, FavoriteColorsComponent, TemperatureConverterComponent, CalculatorComponent, FormsModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-new-angular-exercises';
}
