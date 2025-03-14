import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClickCounterComponent } from './click-counter/click-counter.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FavoriteColorsComponent } from './favorite-colors/favorite-colors.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ClickCounterComponent, TaskListComponent, FavoriteColorsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-new-angular-exercises';
}
