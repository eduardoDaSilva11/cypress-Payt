require('cypress-xpath')

const email = Cypress.env('user_name')
const password = Cypress.env('user_password')

const el = require('./elements').ELEMENTS

class Checkout {

    acessarLogin() {
        cy.visit(el.LoginCheckoutUrl)
    }

    preencherLogin() {
        cy.get(el.email).type(email)
        cy.get(el.senha).type(password)
        cy.get(el.botao).click()
    }

    botaoCriarCheckout() {
        cy.xpath(el.CheckoutBtn).click()
    }

    preencherCadastroCheckout() {
        cy.xpath(el.InputName).type('CypressCheckout')
        cy.xpath(el.InputDescription).type('O conceito de estratégia, em grego strateegia, em latim strategi, em francês stratégie…')
        cy.xpath(el.InputDescriptionFatura).type('CypressCheckout')

        cy.xpath(el.SaveBtn).click()

        cy.contains('Checkout salvo com sucesso').should('be.visible')
    }

    adicionarProduto() {
        cy.xpath(el.adicionarProduto).click()
        cy.xpath(el.OpenDropdown).click()
        cy.xpath(el.escolherProduto, {timeout: 6000}).click()
        cy.xpath(el.adicionarBtn).click()
        cy.xpath(el.SaveAndReturnBtn).click()

        cy.contains('Checkout salvo com sucesso').should('be.visible')
    }

    deleteCheckout() {
        cy.xpath(el.deleteCheckout).click()
        cy.xpath(el.confirmdelete).click()

        cy.contains('Registro excluido com sucesso !!').should('be.visible')
    }

}

export default new Checkout()