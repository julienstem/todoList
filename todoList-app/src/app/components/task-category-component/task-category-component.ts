import { Component, Input } from '@angular/core';
import { TaskCategoryService } from '../../services/task-category-service';
import { Task } from '../../task';

@Component({
  selector: 'app-task-category-component',
  imports: [],
  templateUrl: './task-category-component.html',
  styleUrl: './task-category-component.css',
})
export class TaskCategoryComponent {
  @Input() currentCategory: string = 'None';
  @Input() linkedTask: Task | null = null;
  constructor(public taskCategoryService: TaskCategoryService) {}

  getCategories(): string[] {
    return this.taskCategoryService.getCategories();
  }

  onCategoryChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.setCurrentCategory(selectElement.value);
    if (this.linkedTask) {
      this.linkedTask.category = this.currentCategory;
    }
  }

  setCurrentCategory(category: string): void {
    this.currentCategory = category;
  }

  getCurrentCategory(): string {
    return this.currentCategory;
  }

  compare(otherCategory: string): boolean {
    return this.currentCategory === otherCategory;
  }
}
