import { Component} from '@angular/core';
import { Task, Status, ConstructEnum } from '../../task';
import { TaskListService } from '../../services/task-list';
import { TaskCategoryComponent } from '../task-category-component/task-category-component';
import { TaskCategoryService } from '../../services/task-category-service';

@Component({
  selector: 'app-task-list',
  imports: [TaskCategoryComponent],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskListComponent {
  protected readonly Status = Status;
  private showDescription: boolean[];

  constructor(private taskListService: TaskListService, private taskCategoryService: TaskCategoryService) {
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
    this.taskListService.updateTasks();
  }

  OnSelectChange(event: Event, task: Task){
    const select = event.target as HTMLSelectElement;
    let str = select.value;
    task.status = ConstructEnum(str);
    this.taskListService.updateTasks();
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

  passFilter(task:Task): boolean{
    return this.taskCategoryService.passFilter(task.category);
  }

  isTaskListEmpty(): boolean {
    return this.taskListService.isEmpty();
  }
}
