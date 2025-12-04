import { Component } from '@angular/core';
import { TaskCategoryService } from '../../services/task-category-service';

@Component({
  selector: 'app-task-filter-component',
  imports: [],
  templateUrl: './task-filter-component.html',
  styleUrl: './task-filter-component.css',
})
export class TaskFilterComponent {
  private currentFilter : string = 'None';

  constructor(private taskCategoryService: TaskCategoryService) {}

  getCategories(): string[] {
    return this.taskCategoryService.getCategories();
  }

  onCategoryChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.setCurrentFilter(selectElement.value);
    this.taskCategoryService.setFilterCategory(this.currentFilter);
  }

  setCurrentFilter(category: string): void {
    this.currentFilter = category;
  }

  compare(otherCategory: string): boolean {
    return this.currentFilter === otherCategory;
  }
}
