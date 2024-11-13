describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://sharker92.retool.com/apps/0af61494-a14b-11ef-b3ca-1bbbc5cdc515/Untitled');
  })

  it('tests Welcome Message exists.', () => {
    cy.visit('https://sharker92.retool.com/apps/0af61494-a14b-11ef-b3ca-1bbbc5cdc515/Untitled');
    cy.get('[data-testid="SignUp::Email"]').type('sharker92@hotmail.com');
    cy.get('[data-testid="SignUp::Password"]').type('dvh4yeh-dey1MBR!mtw');
    cy.get('[data-testid="SignUp::SubmitEmailAndPassword"]').click();
    cy.get('._markdown_1i7p2_2 > p').should('contain', '👋 ');
    cy.get('strong').should('contain', 'Hello Andres!');
    cy.get('[data-testid="Component::Button-button1--0"] > ._wrapper_iuyco_160 > ._button_iuyco_5').click();
    cy.wait(1000);
    cy.get('._markdown_1i7p2_2 > p').should('contain', 'Hello Cypress');
    cy.get('._text_18tk6_30 > p').should('contain', 'You Succeded');
  })
})
