import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskManagerService {
  private showPopUp:boolean = false;
  
  isShowing():boolean{
    return this.showPopUp;
  }

  show(){
    this.showPopUp = true;
  }

  hide(){
    this.showPopUp = false;
  }
}
