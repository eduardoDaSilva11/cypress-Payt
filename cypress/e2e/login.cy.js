import Login from '../support/pages/Login'

describe('Login', () => {
  it('login successfully', () => {
    const user = Cypress.env('user_name')
    const password = Cypress.env('user_password')

    Login.acessarLogin()
    Login.preencherLogin(user, password)
    Login.validarAcesso()
  })
})

describe('Login error', () => {
  it('Messagem de erro ao logar com login errado', () => {
    const userError = Cypress.env('user_name_error')
    const passwordError = Cypress.env('user_password_error')

    Login.acessarLogin()
    Login.preencherLoginError(userError, passwordError)
    Login.validarMsgError()
  });
});