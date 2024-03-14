describe('Login tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost/login')
    })

    it('submit without all credentials', () =>{
        cy.get('[data-test-id="submit"]').click();
        cy.get('[data-test-id="email-error"]').should('be.visible');
        cy.get('[data-test-id="password-error"]').should('be.visible');



    })

    it('submit with valid credentials',() => {
        cy.get('[data-test-id="email"').type("mang@l.com");
        cy.get('[data-test-id="password"').type("c4g4n1n43");
        cy.get('[data-test-id="submit"]').click();
        cy.url().should('eq', 'http://localhost/thank-you?') 
      })
})