describe('Login tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/login');
    });

    it('submit without valid email and password', () => {
        cy.get('[data-test-id="submit"]').click();
        cy.get('[data-test-id="email-error"]').should('be.visible');
        cy.get('[data-test-id="password-error"]').should('be.visible');
    });

    it('clear email error after valid input is added', () => {
        cy.get('[data-test-id="submit"]').click();
        cy.get('[data-test-id="email"]').type('example@example.com');
        cy.get('[data-test-id="submit"]').click();
        cy.get('[data-test-id="email-error"]').should('not.exist');
    });

    it('clear password error after valid input is added', () => {
        cy.get('[data-test-id="submit"]').click();
        cy.get('[data-test-id="password"]').type('password123');
        cy.get('[data-test-id="submit"]').click();
        cy.get('[data-test-id="password-error"]').should('not.exist');
    });

    it('enter valid email and password and click submit', () => {
        cy.get('[data-test-id="email"]').type('example@example.com');
        cy.get('[data-test-id="password"]').type('password123');
        cy.get('[data-test-id="submit"]').click();
        cy.url().should('eq', 'http://localhost:8080/thank-you?');
    });

    it('toggle password visibility', () => {
        cy.get('[data-test-id="password"]').should('have.attr', 'type', 'password');
        cy.get('#pass-toggle-btn').click();
        cy.get('[data-test-id="password"]').should('have.attr', 'type', 'text');
    });

});
