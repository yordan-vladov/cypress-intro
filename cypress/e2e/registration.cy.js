describe('Registration tests', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:8080/')
  })

  it('enter submit without valid fullname', () => {
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="fullname-error"]').should('be.visible');
  })

  it('enter submit without valid email', () => {
    cy.get('[data-test-id="submit"]').click();

    cy.get('[data-test-id="email-error"]').should('be.visible');
  })

  it('enter submit without valid password', () => {
    cy.get('[data-test-id="submit"]').click();

    cy.get('[data-test-id="password-error"]').should('be.visible');
  })

  it('enter submit without valid gender', () => {
    cy.get('[data-test-id="submit"]').click();

    cy.get('[data-test-id="gender-error"]').should('be.visible');
  })

  it('enter submit without valid date', () => {
    cy.get('[data-test-id="submit"]').click();

    cy.get('[data-test-id="date-error"]').should('be.visible');
  })

  it('Full name error is cleared after valid input is added', () => {
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="fullname"').type("John Doe");
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="fullname-error"]').should('not.exist');
  })

  it('Password error is cleared after valid input is added', () => {
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="password"').type("12345678");
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="password-error"]').should('not.exist');
  })

  it('Email error is cleared after valid input is added', () => {
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="email"').type("johndoe@gmail.com");
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="email-error"]').should('not.exist');
  })

  it('Gender error is cleared after valid input is added', () => {
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="gender"').select("Male")
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="gender-error"]').should('not.exist');
  })

  it('Date error is cleared after valid input is added', () => {
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="date"').type("2005-07-14")
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="date-error"]').should('not.exist');
  })

  it('enter invalid email', () => {
    cy.get('[data-test-id="email"').type("invalid_email");
    cy.get('[data-test-id="submit"]').click();
  })

});