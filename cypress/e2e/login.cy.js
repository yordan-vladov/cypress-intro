describe('Login tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/login');
        cy.contains('h2', 'Login').should('be.visible');
    });

    it('displays error for invalid credentials', () => {
        cy.get('[data-test-id="email"]').type('invalid_username');
        cy.get('[data-test-id="password"]').type('invalid_password');
        cy.get('form').submit();
        cy.url().should('eq', 'http://localhost:8080/login');
    });

    it('redirects to thank-you page for valid credentials', () => {
        cy.get('[data-test-id="email"]').type('admin@abv.bg');
        cy.get('[data-test-id="password"]').type('admin12345678');
        cy.get('form').submit();
        cy.url().should('eq', 'http://localhost:8080/thank-you');
    });
});
