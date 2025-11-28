import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task, Status, ConstructEnum } from '../../task';
import { TaskListService } from '../../services/task-list';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskListComponent {
  protected readonly Status = Status;
  private showDescription: boolean[];

  constructor(private taskListService: TaskListService) {
    this.showDescription = taskListService.getTasks().map(()=>false)
  }

  getTasks(): Task[] {
    return this.taskListService.getTasks();
  }

  OnToggleInput(event: Event, task: Task){
    const input = event.target as HTMLInputElement;
    if(input.checked){
      task.status = Status.COMPLETED;
    }
    else{
      task.status = Status.PENDING;
    }
  }

  OnSelectChange(event: Event, task: Task){
    const select = event.target as HTMLSelectElement;
    let str = select.value;
    task.status = ConstructEnum(str);
  }

  RemoveTask(task:Task){
    this.taskListService.removeTask(task);
    this.showDescription.splice(this.taskListService.indexOf(task),1);
  }

  ToggleDescription(task:Task){
    let index = this.taskListService.indexOf(task);
    this.showDescription[index] = !this.showDescription[index];
  }

  IsShowDescription(task:Task): boolean{
    return this.showDescription[this.taskListService.indexOf(task)]
  }
}
