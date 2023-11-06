import { TodoItemService } from './todo-item.service';

describe('TodoItemService', () => {
  let service: TodoItemService;

  beforeEach(() => {
    service = new TodoItemService();
  });

  it('service instance should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('getTodoItems method should be default return zero elements', () => {
    expect(service.getTodoItems().length).toEqual(0);
    expect(service.getTodoItems()).toEqual([]);
  });

  it('addTodoList method should be add no of todos', () => {
    service.addItem({ description: 'test', dueDate: 'test', isDone: false });
    service.addItem({ description: 'test', dueDate: 'test', isDone: false });
    expect(service.getTodoItems().length).toEqual(2);
  });

  it('deleteFromTodoList method should be removed todos', () => {
    service.addItem({ description: 'test', dueDate: 'test', isDone: false });
    service.addItem({ description: 'test', dueDate: 'test', isDone: false });
    service.deleteItem(1);
    expect(service.getTodoItems().length).toEqual(1);
  });

  it('getAllTodos method should be return exact length of todos', () => {
    // Setup
    service.addItem({ description: 'test', dueDate: 'test', isDone: false });
    service.addItem({ description: 'test', dueDate: 'test', isDone: false });
    service.addItem({ description: 'test', dueDate: 'test', isDone: false });
    service.addItem({ description: 'test', dueDate: 'test', isDone: false });
    service.addItem({ description: 'test', dueDate: 'test', isDone: false });
    // Execute
    expect(service.getTodoItems().length).toEqual(5);
    service.deleteItem(1);
    service.deleteItem(4);
    service.deleteItem(2);
    // Expect
    expect(service.getTodoItems().length).toEqual(2);
  });
});