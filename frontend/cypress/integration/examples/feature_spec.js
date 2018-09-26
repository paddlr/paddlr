describe('Log In', () => {
  it('succesfully performs login action', () => {
    // visit 'baseUrl'
    cy.visit('/');
    // assert if we are in good place - search for a 'smarter world phrase
    cy.contains('smarter world');
    // search for a div with 'Teachers' caption, and click it
    cy.get('a[data-testid="main-link-teachers"]').click();
    // check if url have changed
    cy.url().should('includes', 'teachers');
    cy.contains('more time to teach');
    // get Login button and click it
    cy.get('button[data-testid="menu-button-login"]').click();
    // check if url have changed
    cy.url().should('includes', '/login');
    // submit inputs and click submit button
    cy.get('input[data-testid="login-form-username"]').type('test@email.com');
    cy.get('input[data-testid="login-form-password"]').type('password');
    cy.get('button[data-testid="login-form-submit"]').click();
    // verify that we were redirected
    cy.url({ timeout: 3000 }).should('includes', '/c/');
  });
});
