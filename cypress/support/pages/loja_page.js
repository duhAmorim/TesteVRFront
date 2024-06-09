Cypress.Commands.add( 'clickFecharModalBemVindo', () => {
      // Fecha modal de Bem-Vindo
      cy.get('.close-button').click();
})

Cypress.Commands.add( 'clickCartoesVR', () => {
    // Selecionar a opção "Cartões VR"
    cy.get('#btn-selecionar-modalidade-avulso').click();
})