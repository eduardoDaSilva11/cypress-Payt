const email = Cypress.env('user_name')
const password = Cypress.env('user_password')
const emailerror = Cypress.env('user_name_error')
const passwordError = Cypress.env('user_password_error')

const el = require('./elements').ELEMENTS

class Login {
    acessarLogin() {
        cy.visit(el.LoginUrl)
    }

    preencherLogin() {
        cy.get(el.email).type(email)
        cy.get(el.senha).type(password)
        cy.get(el.botao).click()
    }

    preencherLoginError() {
        cy.get(el.email).type(emailerror)
        cy.get(el.senha).type(passwordError)
        cy.get(el.botao).click()
    }

    validarAcesso() {
        cy.url().should('eq', el.UrlValidacao)
    }

    validarMsgError() {
        cy.contains('Credenciais inválidas').should('be.visible')

    }
}

export default new Login()