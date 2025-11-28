import { Component } from '@angular/core';

@Component({
  selector: 'app-task-form-component',
  imports: [],
  templateUrl: './task-form-component.html',
  styleUrl: './task-form-component.css',
})
export class TaskFormComponent {
  private validTask:boolean = false;

  onTitleInputChange(event:Event){
    let input = event.target as HTMLInputElement;
    this.validTask = false;
    if(input.value.length > 0){
      this.validTask = true;
    }
  }

  isValidTask(): boolean{
    return this.validTask;
  }
}
