/// <reference types="cypress" />

class CadastroPage {

    preencherDados(){
        const randomEmail = Math.random().toString(36).substring(2,15)+"@gmail.com"
        cy.get('[data-testid="firstName"]').type('Lucas')
        cy.get('[data-testid="lastName"]').type('Schmitt')
        cy.get('[data-testid="phone"]').type('11987654321')
        cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]').type(randomEmail)
        cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]').type('1234')
        cy.get('[data-testid="repassword"]').type('1234')
        cy.get('[data-testid="create"]').click()
    }
}

export default new CadastroPage();
    
    
