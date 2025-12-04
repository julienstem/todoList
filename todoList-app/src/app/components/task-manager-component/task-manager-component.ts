import { Component } from '@angular/core';
import { TaskManagerService } from '../../services/task-manager-service';
import { TaskCategoryComponent } from '../task-category-component/task-category-component';

@Component({
  selector: 'app-task-manager-component',
  imports: [TaskCategoryComponent],
  templateUrl: './task-manager-component.html',
  styleUrl: './task-manager-component.css',
})
export class TaskManagerComponent {
  constructor(private taskManagerService: TaskManagerService) {}

  openTaskForm() {
    this.taskManagerService.show();
  }
}
