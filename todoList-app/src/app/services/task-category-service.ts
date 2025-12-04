import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskCategoryService {
  private categories: string[] = ['None', 'Work', 'Personal'];
  private filterCategory: string = 'None';

  constructor() {}

  setFilterCategory(category: string): void {
    this.filterCategory = category;
  }
  
  getFilterCategory(): string {
    return this.filterCategory;
  }

  passFilter(category: string): boolean {
    console.log(`Filtering by ${this.filterCategory}, task category is ${category}`);
    return this.filterCategory === 'None' || this.filterCategory === category;
  }

  getCategories(): string[] {
    return this.categories;
  }

  addCategory(category: string): void {
    if (!this.categories.includes(category)) {
      this.categories.push(category);
    }
  }

  removeCategory(category: string): void {
    this.categories = this.categories.filter((cat) => cat !== category);
  }
}
