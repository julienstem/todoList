import { Component } from '@angular/core';
import  { TaskManagerComponent } from '../task-manager-component/task-manager-component';
import { TaskListComponent } from '../task-list/task-list';
import { TaskFormComponent } from '../task-form-component/task-form-component';
import { TaskManagerService } from '../../services/task-manager-service';

@Component({
  selector: 'app-task-overall',
  imports: [TaskManagerComponent, TaskListComponent, TaskFormComponent],
  templateUrl: './task-overall.html',
  styleUrl: './task-overall.css',
})
export class TaskOverall {
  constructor(private taskManagerService: TaskManagerService) {}

  isTaskFormVisible(): boolean {
    return this.taskManagerService.isShowing();
  }
}
