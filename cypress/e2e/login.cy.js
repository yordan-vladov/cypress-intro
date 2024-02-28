describe('Log in tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8080/login')
    })
  
    it('enter submit without valid user name',() => {
      cy.get('[data-test-id="submit"]').click();
      cy.get('[data-test-id="fullname-error"]').should('be.visible');
    })
  
    it('full name error is cleared after valid input is added',() => {
      cy.get('[data-test-id="submit"]').click();
      cy.get('[data-test-id="fullname"').type("John Doe");
      cy.get('[data-test-id="submit"]').click();
      cy.get('[data-test-id="fullname-error"]').should('not.exist');
    })
  
    it('enter valid data and click submit',()=> {
      cy.get('[data-test-id="fullname"').type("John Doe");
      cy.get('[data-test-id="password"').type("12345678");
      cy.get('[data-test-id="submit"]').click();
      cy.url().should('eq', 'http://localhost:8080/thank-you?') 
    })
  })