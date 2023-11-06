describe('EndToEndTest for Todo App', () => {

  describe('App Title', () => {
    it('Title should be Todo App', () => {
      cy.visit('http://localhost:4200');
      cy.title().should('eq', 'TodoApp');
    });
  });

  describe('Should be able to add item to the items table', () => {

    it('Description input should take a correct value', () => {
      cy.visit('http://localhost:4200');

      const expectTodoDescription = 'First Todo';
      cy.get("[formControlName = 'description']").type(expectTodoDescription);
      cy.get("input[formControlName = 'description']").invoke('val').then((value) => {
        const actualTodoDescription = value;
        expect(expectTodoDescription).equal(actualTodoDescription);
      });
    });

    it('DueDate input should take a correct value', () => {
      cy.visit('http://localhost:4200');

      const expectTodoDueDate = '07/25/2023';
      cy.get("[formControlName = 'dueDate']").type(expectTodoDueDate);
      cy.get("input[formControlName = 'dueDate']").invoke('val').then((value) => {
        const actualTodoDueDate = value;
        expect(expectTodoDueDate).equal(actualTodoDueDate);
      });
    });

    it('Clicking cancel reset input values', () => {
      cy.visit('http://localhost:4200');

      const expectTodoDescription = 'First Todo';
      cy.get("[formControlName = 'description']").type(expectTodoDescription);

      const expectTodoDueDate = '07/25/2023';
      cy.get("[formControlName = 'dueDate']").type(expectTodoDueDate);

      cy.get("[name = 'cancel']").click();

      cy.get("input[formControlName = 'description']").invoke('val').then((value) => {
        expect('').equal(value);
      });

      cy.get("input[formControlName = 'dueDate']").invoke('val').then((value) => {
        expect('').equal(value);
      });
    });

    it('Todos should be displayed on the left panel after clicking the submit button', () => {
      cy.visit('http://localhost:4200');
      const expectTodoDescription = 'First Todo';
      cy.get("[formControlName = 'description']").type(expectTodoDescription);

      const expectTodoDueDate = '07/25/2023';
      cy.get("[formControlName = 'dueDate']").type(expectTodoDueDate);

      cy.get("[name = 'submit']").click();

      cy.get("[name='descriptionValue']").then((value) => {
        const actualTodoDescription = value.text();
        expect(expectTodoDescription).equal(actualTodoDescription);
      })

      cy.get("[name='dueDateValue']").then((value) => {
        let actualTodoDueDate = value.text();
        expect(expectTodoDueDate).equal(actualTodoDueDate);
      });
    });

    it('Todo Filter should be filter todo', () => {
      cy.visit('http://localhost:4200');

      let expectTodoDescription = 'First Todo';
      cy.get("[formControlName = 'description']").type(expectTodoDescription);
      cy.get("[formControlName = 'dueDate']").type('07/25/2023');
      cy.get("[name = 'submit']").click();
      cy.get('table').contains('td', expectTodoDescription).should('be.visible');

      expectTodoDescription = 'Second Todo';
      cy.get("[formControlName = 'description']").type(expectTodoDescription);
      cy.get("[formControlName = 'dueDate']").type('07/25/2023');
      cy.get("[name = 'submit']").click();
      cy.get('table').contains('td', expectTodoDescription).should('be.visible');

      expectTodoDescription = 'Third Todo';
      cy.get("[formControlName = 'description']").type(expectTodoDescription);
      cy.get("[formControlName = 'dueDate']").type('07/25/2023');
      cy.get("[name = 'submit']").click();
      cy.get('table').contains('td', expectTodoDescription).should('be.visible');

      expectTodoDescription = 'Four Todo';
      cy.get("[formControlName = 'description']").type(expectTodoDescription);
      cy.get("[formControlName = 'dueDate']").type('07/25/2023');
      cy.get("[name = 'submit']").click();
      cy.get('table').contains('td', expectTodoDescription).should('be.visible');

      cy.get("[name = 'filter']").type('Third Todo');

      expectTodoDescription = 'Third Todo'
      cy.get("[name='descriptionValue']").then((value) => {
        const actualTodoDescription = value.text();
        expect(expectTodoDescription).equal(actualTodoDescription);
      })
    });

    it('Todo should be completed by clicking the checkbox', () => {
      cy.visit('http://localhost:4200');
      cy.get("[formControlName = 'description']").type('First Todo');
      cy.get("[formControlName = 'dueDate']").type('07/25/2023');
      cy.get("[name = 'submit']").click();
      cy.get("#mat-mdc-checkbox-1-input").check();
    });

    it('Count number of todos should be added on the left hand panel', () => {
      cy.visit('http://localhost:4200');

      let expectTodoDescription = 'First Todo';
      cy.get("[formControlName = 'description']").type(expectTodoDescription);
      cy.get("[formControlName = 'dueDate']").type('07/25/2023');
      cy.get("[name = 'submit']").click();
      cy.get('table').contains('td', expectTodoDescription).should('be.visible');

      expectTodoDescription = 'Second Todo';
      cy.get("[formControlName = 'description']").type(expectTodoDescription);
      cy.get("[formControlName = 'dueDate']").type('07/25/2023');
      cy.get("[name = 'submit']").click();
      cy.get('table').contains('td', expectTodoDescription).should('be.visible');

      expectTodoDescription = 'Third Todo';
      cy.get("[formControlName = 'description']").type(expectTodoDescription);
      cy.get("[formControlName = 'dueDate']").type('07/25/2023');
      cy.get("[name = 'submit']").click();
      cy.get('table').contains('td', expectTodoDescription).should('be.visible');

      expectTodoDescription = 'Four Todo';
      cy.get("[formControlName = 'description']").type(expectTodoDescription);
      cy.get("[formControlName = 'dueDate']").type('07/25/2023');
      cy.get("[name = 'submit']").click();
      cy.get('table').contains('td', expectTodoDescription).should('be.visible');

      cy.get('table').find('tbody').find('tr').should('have.length', 4);
    });
  });
});