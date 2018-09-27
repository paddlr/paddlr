describe('Select player', () => {
  it('choose from list of players', () => {
    cy.visit('/');
    cy.get('#select_server').select('Edward Thomas');
    cy.get('#select_challenger').select('Danielle');
    cy.get('#start_game_button').click();
    for (var count=0; count < 21; count++) {
      cy.get('#plus_idE').click();
    }
    cy.get('#end_game').click();
    cy.contains('Edward Thomas').should('be.visible');
    cy.contains('WINNER').should('be.visible');
    cy.contains('Score: 21').should('be.visible');

    // cy.url().should('includes', 'teachers');
    // cy.contains('more time to teach');
    // // get Login button and click it
    // cy.get('button[data-testid="menu-button-login"]').click();
    // // check if url have changed
    // cy.url().should('includes', '/login');
    // // submit inputs and click submit button
    // cy.get('input[data-testid="login-form-username"]').type('test@email.com');
    // cy.get('input[data-testid="login-form-password"]').type('password');
    // cy.get('button[data-testid="login-form-submit"]').click();
    // // verify that we were redirected
    // cy.url({ timeout: 3000 }).should('includes', '/c/');
  });
});
