import { Component } from '@angular/core';
import { TaskManagerService } from '../../services/task-manager-service';
import { TaskFilterComponent } from '../task-filter-component/task-filter-component';

@Component({
  selector: 'app-task-manager-component',
  imports: [TaskFilterComponent],
  templateUrl: './task-manager-component.html',
  styleUrl: './task-manager-component.css',
})
export class TaskManagerComponent {
  constructor(private taskManagerService: TaskManagerService) {}

  openTaskForm() {
    this.taskManagerService.show();
  }
}
