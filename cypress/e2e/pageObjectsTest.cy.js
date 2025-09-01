/// <reference types="cypress" />

const { homePage } = require("../support/pages/home.page")
const { email, senha } = require('../fixtures/data.json')
const { profilePage } = require("../support/pages/profile.page")
const cadastroPage = require("../support/pages/cadastro.page")

describe('Teste de Cadastro', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
    cy.visit('/')
  })

  it('deve fazer o cadastro com sucesso', () => {
    homePage.openMenu('Account')
    cadastroPage.cadastro(firstName, lastName, phoneNumber, emailAddress, password, reenterPassword)
    cy.get('[data-testid="signUp"] > .css-146c3p1').click()
    
  })
})