import { AppComponent } from "./app.component"
describe('App Component', () => {
  let component: AppComponent;

  beforeEach(() => {
    component = new AppComponent();
  });

  it('instance should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    expect(component.title).toEqual('todo-app');
  });
});