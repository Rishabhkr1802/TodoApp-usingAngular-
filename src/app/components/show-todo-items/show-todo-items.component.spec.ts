import { ShowTodoItemsComponent } from "./show-todo-items.component";

describe('ShowTodoItemsComponent', () => {
  let component: ShowTodoItemsComponent;
  let mockService;
  const items = [{
    id: 1, description: 'value',
    dueDate: '10/09/2023',
    isDone: false
  }];


  beforeEach(() => {

    mockService = {
      getTodoItems: jest.fn(() => items),
      deleteItem: jest.fn(),
    };

    component = new ShowTodoItemsComponent(mockService);
  });

  describe('Component instance', () => {
    it('should be created', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('ngOnInit Method', () => {
    it('should be Initialized', () => {
      // Setup
      component.ngOnInit();
      expect(component.searchText).toEqual('');

      // Execute
      expect(mockService.getTodoItems).toHaveBeenCalled();
      expect(component.items).toEqual(items);
    });
  });

  describe('removeTodoItem Method', () => {
    it('should be remove todo item', () => {
      component.removeTodoItem(1);
      expect(mockService.deleteItem).toHaveBeenCalledWith(1);
    });
  });
});