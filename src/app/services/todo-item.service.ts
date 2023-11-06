import { Injectable } from '@angular/core';
import { ITodoItem } from '../interface/todo-item.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoItemService {
  private todoItemList: ITodoItem[] = [];

  // Adds a Todo Item to the Todo List
  addItem(todoItem: ITodoItem): void {
    if (!todoItem.id) {
      todoItem.id = this.todoItemList.length + 1;
    }
    this.todoItemList.push(todoItem);
  }

  // Deletes a Todo Item from the Todo List
  deleteItem(id: number): void {
    this.todoItemList.forEach((value, index) => {
      if (value.id === id) this.todoItemList.splice(index, 1);
    });
  }

  // Get all Todo Items from the Todo List
  getTodoItems(): ITodoItem[] {
    return this.todoItemList;
  }
}
