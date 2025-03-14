import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  taskList: string[] = [];

  newTask = '';

  addTask(task:string) {
    this.taskList.push(task)
  }

}
