import { Component } from '@angular/core';
import { Task, Status} from '../../task'
import { TaskListService } from '../../services/task-list';
import { TaskManagerService } from '../../services/task-manager-service';

@Component({
  selector: 'app-task-form-component',
  imports: [],
  templateUrl: './task-form-component.html',
  styleUrl: './task-form-component.css',
})
export class TaskFormComponent {
  private validTask:boolean = false;
  private currentTitle:string = "";
  private currentDescription:string = "";

  constructor(private taskListService:TaskListService, private taskManagerService:TaskManagerService){

  }

  onTitleInputChange(event:Event){
    let input = event.target as HTMLInputElement;
    this.validTask = false;
    if(input.value.length > 0){
      this.validTask = true;
    }
    this.currentTitle = input.value;
  }

  onDescritpionInputChange(event:Event){
    let input = event.target as HTMLInputElement;
    this.currentDescription = input.value;
  }

  onAddButtonClicked(){
    this.taskListService.addTask(this.taskListService.createTask(this.currentTitle,this.currentDescription,"None"));
    console.log(this.taskListService.getTasks())
    this.currentDescription = "";
    this.currentTitle = "";
    this.taskManagerService.hide();
  }

  onCancelButtonClicked(){
    this.currentDescription = "";
    this.currentTitle = "";
    this.taskManagerService.hide();
  }

  show(){
    this.taskManagerService.show();
  }

  isValidTask(): boolean{
    return this.validTask;
  }
}
