Cypress.Commands.add( 'preecherQuantidadeCartAUTO', (quantidade) => {
      // Adicionar a quantidade de cartões do produto "Auto"
    cy.get('#produto-auto-quantidade')
    .type(quantidade);
})

Cypress.Commands.add( 'preecherValorCartAUTO', (valor) => {
   // Digitar o valor de crédito para o produto "Auto"
   cy.get('#produto-auto-valor').type(valor);
})

Cypress.Commands.add( 'addCarrinhoCartAuto', () => {
    // Clicar no botão "Adicionar ao carrinho"
    cy.get('#btn-adicionar-carrinho-auto').click();
 })

 Cypress.Commands.add( 'abrirCarrinho', () => {
    // Clicar no carrinho
    cy.get('#btn-meu-carrinho > .fa-light').click();
 })

 Cypress.Commands.add( 'checkProtudoCarrinho', (cartao) => {
    // Verificar se o produto foi adicionado ao carrinho com sucesso
    cy.get('.product-title__information > p').contains(cartao).should('exist');
 })

 Cypress.Commands.add( 'checkValorCreditoCarrinho', (valor) => {
    // Verificar se o valor adicionado ao carrinho está correto
    cy.get('.product-information__value > :nth-child(2)').contains(valor).should('exist');
 })

 Cypress.Commands.add( 'checkQuantidadeCartaoCarrinho', (quantidade) => {
    // Verificar se a quantidade adicionada ao carrinho está correta
    cy.get('.product-information__amount > :nth-child(2)').contains(quantidade).should('exist');
 })
 Cypress.Commands.add( 'checkValorTotalCarrinho', (valor) => {
    // Verificar se o valor Total do carrinho está correto
    cy.get('.information__total-value').contains(valor).should('exist');
 })