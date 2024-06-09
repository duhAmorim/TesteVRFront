Cypress.Commands.add( 'clickBTNCompraOnline', () => {
    // Clicar no botão "Compre online" para navegar até a loja
    cy.get('#buttonCompreOnline').click();


})