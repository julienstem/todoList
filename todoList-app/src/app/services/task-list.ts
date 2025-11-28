import { Injectable } from '@angular/core';
import { Task, Status } from '../task';

@Injectable({
  providedIn: 'root',
})
export class TaskListService {
  private tasks: Task[];

  constructor() {
    this.tasks = [
      { id: 1, title: 'Task 1', category: 'Work', description: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla",status: Status.PENDING },
      { id: 2, title: 'Task 2', category: 'Home', description: "coucou" ,status: Status.IN_PROGRESS },
      { id: 3, title: 'Task 3', category: 'Hobby', status: Status.COMPLETED },
    ];
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  updateTaskStatus(id: number, status: Status): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.status = status;
    }
  }

  removeTask(task:Task): void{
    const index: number = this.tasks.indexOf(task)
    if(index<0){
      return;
    }
    this.tasks.splice(index,1)
  }

  indexOf(task:Task): number {
    return this.tasks.indexOf(task);
  }
}
