import { Component, Input } from '@angular/core';
import { TaskCategoryService } from '../../services/task-category-service';

@Component({
  selector: 'app-task-category-component',
  imports: [],
  templateUrl: './task-category-component.html',
  styleUrl: './task-category-component.css',
})
export class TaskCategoryComponent {
  @Input() currentCategory: string = 'None';
  constructor(public taskCategoryService: TaskCategoryService) {}

  getCategories(): string[] {
    return this.taskCategoryService.getCategories();
  }

  onCategoryChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.setCurrentCategory(selectElement.value);
  }

  setCurrentCategory(category: string): void {
    this.currentCategory = category;
    this.setFilterCategory();
  }

  setFilterCategory(): void {
    this.taskCategoryService.setFilterCategory(this.currentCategory);
  }

  getCurrentCategory(): string {
    return this.currentCategory;
  }

  compare(otherCategory: string): boolean {
    return this.currentCategory === otherCategory;
  }
}
