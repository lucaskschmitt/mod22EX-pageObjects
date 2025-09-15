/// <reference types="cypress" />

const { homePage } = require("../support/pages/home.page")
import cadastroPage from "../support/pages/cadastro.page"

describe('Teste de Cadastro', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
    cy.visit('/')
  })

  it('deve fazer o cadastro com sucesso', () => {
    homePage.openMenu('Account')
    cy.get('[data-testid="signUp"] > .css-146c3p1').click()
    cadastroPage.preencherDados()
  })
})