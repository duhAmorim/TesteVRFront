// cypress/e2e/adicionar_produto.spec.js
import { faker } from '@faker-js/faker';

describe('Adicionar produto ao carrinho', () => {
  it('Deve adicionar um produto ao carrinho com sucesso', () => {
    // Acessar a home do portal web
    cy.visit('https://www.vr.com.br', { failOnStatusCode: false, timeout: 10000 }); // Adiciona um tempo de espera menor para reduzir o tempo de carregamento
    //Como o Cypress não trabalha com multiplas abas não estou clicando no botão de compra online
    
    // Aguardando apenas que a janela esteja carregada para prosseguir
    cy.window().then((win) => {
      // Aqui você pode interagir diretamente com a janela ou seguir com suas interações
      win.location.href = 'https://loja.vr.com.br';

      // Fecha modal de Bem-Vindo
      cy.clickFecharModalBemVindo();

      // Selecionar a opção "Cartões VR"
      cy.clickCartoesVR();

      // Gerar uma quantidade aleatória de cartões do produto "Auto"
      const quantidade = faker.number.int({ min: 1, max: 99 });

      // Adicionar a quantidade de cartões do produto "Auto"
      cy.preecherQuantidadeCartAUTO(quantidade);

      // Gerar um valor de crédito aleatório para o produto "Auto"
      const valorCredito = faker.number.float({ min: 1, max: 1000, fractionDigits: 2 });

      // Digitar o valor de crédito para o produto "Auto"
      cy.preecherValorCartAUTO(valorCredito);

      // Clicar no botão "Adicionar ao carrinho"
      cy.addCarrinhoCartAuto();

      // Soma o valor total da compra
      var total = quantidade * valorCredito;

      // Verificar se o produto foi adicionado ao carrinho com sucesso
      cy.abrirCarrinho();
      cy.checkProtudoCarrinho('Auto');

      // Converter para string formatada no padrão brasileiro
      const valorFormatado = valorCredito.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      const quantidadeFormatado = quantidade.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
      const totalFormatado = total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

      // Valida se os valores estão no carrinho
      cy.checkValorCreditoCarrinho(valorFormatado);
      cy.checkQuantidadeCartaoCarrinho(quantidadeFormatado);
      cy.checkValorTotalCarrinho(totalFormatado);
    });
  });
});
