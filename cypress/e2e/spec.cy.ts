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
  })
})
