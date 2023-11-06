import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ITodoItem } from '../../interface/todo-item.interface';
import { TodoItemService } from '../../services/todo-item.service';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.scss'],
})
export class AddTodoItemComponent implements OnInit {
  addTodoItemForm: FormGroup;

  constructor(
    private todoItemService: TodoItemService,
    private datepipe: DatePipe
  ) {
  }

  ngOnInit(): void {
    this.addTodoItemForm = new FormGroup({
      description: new FormControl('', [Validators.required]),
      dueDate: new FormControl('', [Validators.required])
    });
  }

  addTodoItem(): void {
    let description: string = this.addTodoItemForm.controls['description'].value;
    let dueDate: Date = this.addTodoItemForm.controls['dueDate'].value;
    let todoItem: ITodoItem = { description: description, dueDate: this.datepipe.transform(dueDate, 'MM/dd/yyyy'), isDone: false };
    // Add TodoItem to TodoList
    this.todoItemService.addItem(todoItem);
    this.resetValues();
  }

  resetValues(): void {
    this.addTodoItemForm.reset();
    Object.keys(this.addTodoItemForm.controls).forEach((key) => {
      this.addTodoItemForm.get(key).setErrors(null);
    });
  }
}