import { Injectable } from '@angular/core';
import { Task, Status } from '../task';

@Injectable({
  providedIn: 'root',
})
export class TaskListService {
  private storageKey: string = 'tasks';
  private tasks: Task[];

  constructor() {
    this.tasks =  this.loadTask();
  }

  private loadTask(): Task[] {
    const tasksJson = localStorage.getItem(this.storageKey);
    if (tasksJson) {
      return JSON.parse(tasksJson) as Task[];
    }
    return [];
  }

  private saveTasks(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.tasks));
  }

  updateTasks(): void {
    this.saveTasks();
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
    this.saveTasks();
  }

  createTask(title:string,description:string,category:string): Task{
    let task:Task = {title,category,description,status: Status.PENDING}
    return task;
  }

  removeTask(task:Task): void{
    const index: number = this.tasks.indexOf(task)
    if(index<0){
      return;
    }
    this.tasks.splice(index,1)
    this.saveTasks();
  }

  indexOf(task:Task): number {
    return this.tasks.indexOf(task);
  }

  isEmpty(): boolean {
    return this.tasks.length === 0;
  }
}
