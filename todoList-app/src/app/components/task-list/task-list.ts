import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task, Status } from '../../task';
import { TaskListService } from '../../services/task-list';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskListComponent implements OnInit {
  private tasks: Task[] = [];
  protected readonly Status = Status;

  constructor(private taskListService: TaskListService) {
  }

  ngOnInit(): void {
    this.tasks = this.taskListService.getTasks();
  }

  getTasks(): Task[] {
    return this.tasks;
  }
}
