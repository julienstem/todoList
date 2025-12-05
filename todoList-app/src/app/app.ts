import { Component, signal } from '@angular/core';
import { TaskOverall } from './components/task-overall/task-overall';

@Component({
  selector: 'app-root',
  imports: [TaskOverall],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todoList-app');
}
