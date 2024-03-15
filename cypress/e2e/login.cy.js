describe('Login tests', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('http://localhost:8080/login')
    })
  
    it('enter invalid and then enter valid email', () => {
     cy.get('#email')
          .type("invalid_email");
      cy.get('input[type="submit"]')
          .click();
      cy.get('[data-test-id="email-error"]')
          .should('be.visible');
  
      cy.get('input[type="submit"]')
         .click();
      cy.get('#email')
         .type('valid@email.com');
      cy.get('input[type="submit"]')
         .click();
      cy.get('[data-test-id="email-error"]')
         .should('not.exist');
    })
  
    it('enter invalid and then enter valid password', () => {
       cy.get('input[type="submit"]')
          .click();
       cy.get('[data-test-id="password-error"]')
          .should('be.visible');
       cy.get('#password')
          .type('secretpass');
       cy.get('input[type="submit"]')
          .click();
       cy.get('[data-test-id="password-error"]')
          .should('not.exist');
    });
  
    it('enter valid data and click submit',()=> {
      cy.get('#email')
          .type("john_does@email.com");
      cy.get('#password')
          .type("12345678");
      cy.get('input[type="submit"]')
          .click();
      cy.url()
          .should('eq', 'http://localhost:8080/thank-you?') 
    })
  })