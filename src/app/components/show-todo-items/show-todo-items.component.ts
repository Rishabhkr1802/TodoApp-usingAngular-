import { Component, OnInit } from '@angular/core';
import { ITodoItem } from '../../interface/todo-item.interface';
import { TodoItemService } from '../../services/todo-item.service';

@Component({
  selector: 'app-show-todo-items',
  templateUrl: './show-todo-items.component.html',
  styleUrls: ['./show-todo-items.component.scss'],
})
export class ShowTodoItemsComponent implements OnInit {
  items: ITodoItem[];
  searchText = '';

  constructor(private todoItemService: TodoItemService) {}

  ngOnInit(): void {
    this.items = this.todoItemService.getTodoItems();
  }

  removeTodoItem(id: number): void {
    this.todoItemService.deleteItem(id);
  }
}
