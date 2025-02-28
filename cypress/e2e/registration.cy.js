describe('Registration tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
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

  it('enter invalid email',() => {
    cy.get('[data-test-id="email"').type("invalid_email");
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="email-error"]').should('be.visible');
  })

  it('enter valid data and click submit',()=> {
    cy.get('[data-test-id="fullname"').type("John Doe");
    cy.get('[data-test-id="email"').type("john_doe@email.com");
    cy.get('[data-test-id="password"').type("12345678");
    cy.get('[data-test-id="gender"').select("Male");
    cy.get('[data-test-id="date"').type("2000-01-01");
    cy.get('[data-test-id="submit"]').click();
    cy.url().should('eq', 'http://localhost:8080/thank-you?') 
  })
})

describe('Login tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/login')
  })

  it('enter invalid email',() => {
    cy.get('[data-test-id="email"').type("invalid_email");
    cy.get('[data-test-id="password"').type("password");
    cy.get('[data-test-id="login"]').click();
    cy.get('[data-test-id="email-error"]').should('be.visible');
  })

  it('enter valid email and password and click login',()=> {
    cy.get('[data-test-id="email"').type("john_doe@email.com");
    cy.get('[data-test-id="password"').type("12345678");
    cy.get('[data-test-id="login"]').click();
    cy.url().should('eq', 'http://localhost:8080/dashboard') 
  })
})
