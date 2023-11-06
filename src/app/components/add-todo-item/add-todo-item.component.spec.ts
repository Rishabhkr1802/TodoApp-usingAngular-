import { AddTodoItemComponent } from "./add-todo-item.component";

describe('AppTodoItemComponent', () => {
  let component: AddTodoItemComponent;
  let mockService, mockPipe;

  beforeEach(() => {

    mockService = {
      addItem: jest.fn(),
    };

    mockPipe = {
      transform: jest.fn(() => '10/09/2023'),
    };

    component = new AddTodoItemComponent(mockService, mockPipe);
  });


  it('Instance should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('initializes add-todo form', () => {
      // Setup
      component.ngOnInit();
      // Expect
      expect(component.addTodoItemForm.controls['description']).not.toBeNull();
      expect(component.addTodoItemForm.controls['dueDate']).not.toBeNull();
    });
  });

  describe('addTodoItem', () => {
    it('adds a todo item', () => {
      const value = 'new to-do task';

      // setup a new add todo item form and its controls
      component.ngOnInit();

      // assign some values to the controls inside form
      component.addTodoItemForm.controls['description'].setValue(value);
      component.addTodoItemForm.controls['dueDate'].setValue(new Date(2023, 9, 10));

      // execute function
      component.addTodoItem();

      expect(mockService.addItem).toHaveBeenCalledWith({
        description: value,
        dueDate: '10/09/2023',
        isDone: false,
      });
    });
  });

  describe('resetValue method', () => {
    it('should be clear form data after click the cancel button', () => {
      const value = 'todo item add';

      // Setup 
      component.ngOnInit();
      expect(component.addTodoItemForm.controls['description'].setValue(value));
      expect(component.addTodoItemForm.controls['dueDate'].setValue(new Date(2023, 5, 3)));

      // Execute
      component.resetValues();

      // Expect
      expect(component.addTodoItemForm.controls['description'].value).toBeNull();
      expect(component.addTodoItemForm.controls['dueDate'].value).toBeNull();
      expect(component.addTodoItemForm.controls['description'].errors).toBeNull();
      expect(component.addTodoItemForm.controls['dueDate'].errors).toBeNull();
    });
  });
});