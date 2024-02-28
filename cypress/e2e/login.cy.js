describe('Login tests', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('http://localhost:8080/login')
    })
  
    it('enter invalid email',() => {
      cy.get('[data-test-id="email"').type("invalid_email");
      cy.get('[data-test-id="submit"]').click();
      cy.get('[data-test-id="email-error"]').should('be.visible');
    })
  
    it('enter invalid password',() => {
      cy.get('[data-test-id="submit"]').click();
      cy.get('[data-test-id="password-error"]').should('be.visible');
    })
    
    it('enter valid data and click submit',()=> {
      cy.get('[data-test-id="email"').type("john_does@email.com");
      cy.get('[data-test-id="password"').type("12345678");
      cy.get('[data-test-id="submit"]').click();
      cy.url().should('eq', 'http://localhost:8080/thank-you?') 
    })
  })