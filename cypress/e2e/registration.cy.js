describe('Registration tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/');
  });

  it('should display error when submitting without valid full name', () => {
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="fullname-error"]').should('be.visible');
  });

  it('should clear full name error after valid input is added', () => {
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="fullname"]').type('John Doe');
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="fullname-error"]').should('not.exist');
  });

  it('should display error when entering invalid email', () => {
    cy.get('[data-test-id="email"]').type('invalid_email');
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="email-error"]').should('be.visible');
  });

  it('should display error when submitting without selecting gender', () => {
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="gender-error"]').should('be.visible');
  });

  it('should display error when submitting without entering password', () => {
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="password-error"]').should('be.visible');
  });

  it('should submit the form with valid data', () => {
    cy.get('[data-test-id="fullname"]').type('John Doe');
    cy.get('[data-test-id="email"]').type('john_doe@email.com');
    cy.get('[data-test-id="password"]').type('12345678');
    cy.get('[data-test-id="gender"]').select('Male');
    cy.get('[data-test-id="date"]').type('2000-01-01');
    cy.get('[data-test-id="submit"]').click();
    cy.url().should('eq', 'http://localhost:8080/thank-you?');
  });

  it('should display error when submitting without selecting date', () => {
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="date-error"]').should('be.visible');
  });

  it('should display error when submitting without selecting gender', () => {
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="gender-error"]').should('be.visible');
  });

  it('should display error when submitting without entering password', () => {
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="password-error"]').should('be.visible');
  });
});
