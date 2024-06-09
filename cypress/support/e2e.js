// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './pages/home_page'
import './pages/loja_page'
import './pages/cartoes_vr_page'
// Aumenta o tempo limite para o carregamento da página
pageLoadTimeout: 120000, // 120 segundos (ajuste conforme necessário)
    
Cypress.on('uncaught:exception', (err, runnable) => {
    // Impede que o Cypress falhe no teste devido a erros não capturados
    return false;
  });
// Alternatively you can use CommonJS syntax:
// require('./commands')