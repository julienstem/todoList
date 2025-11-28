import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list';
import { TaskFormComponent } from './components/task-form-component/task-form-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskListComponent, TaskFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todoList-app');
}
