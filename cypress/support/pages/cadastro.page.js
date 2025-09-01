/// <reference types="cypress" />

import { faker } from "@faker-js/faker"

class CadastroPage {
    get #firstName() { return cy.get('[data-testid="firstName"]')}
    get #lastName() { return cy.get('[data-testid="lastName"]')}
    get #phoneNumber() {return cy.get('[data-testid="phone"]')}
    get #emailAddress() {return cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]')}
    get #password() {return cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]')}
    get #reenterPassword() {return cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]')}

    cadastro(firstName, lastName, phoneNumber, emailAddress, password, reenterPassword){
        firstName = faker.person.firstName()
        lastName = faker.person.lastName()
        phoneNumber = faker.number.phoneNumber()
        emailAddress = faker.internet.email()
        password = "1234"
        reenterPassword = "1234"
    }
}

module.exports = new CadastroPage();
    
    
