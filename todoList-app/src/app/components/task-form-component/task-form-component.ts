import { Component } from '@angular/core';
import { Task, Status} from '../../task'
import { TaskListService } from '../../services/task-list';

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
  private showPopUp:boolean = false;

  constructor(private taskListService:TaskListService){

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
    this.showPopUp = false;
  }

  onCancelButtonClicked(){
    this.currentDescription = "";
    this.currentTitle = "";
    this.showPopUp = false;
  }

  show(){
    this.showPopUp = true;
  }

  isShowing():boolean{
    return this.showPopUp;
  }

  isValidTask(): boolean{
    return this.validTask;
  }
}
