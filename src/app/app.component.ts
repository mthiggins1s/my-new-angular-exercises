import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClickCounterComponent } from './click-counter/click-counter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ClickCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-new-angular-exercises';
}
