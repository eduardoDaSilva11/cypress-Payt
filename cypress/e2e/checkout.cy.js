import Checkout from "../support/pages/Checkout/index";

describe('Checkout', () => {
    beforeEach(() => {
        const user = Cypress.env('user_name')
        const password = Cypress.env('user_password')

        Checkout.acessarLogin()
        Checkout.preencherLogin(user, password)
    });

    afterEach(() => {
        Checkout.deleteCheckout()
    });

    it('Criar checkout', () => {
        Checkout.botaoCriarCheckout()
        Checkout.preencherCadastroCheckout()
        Checkout.adicionarProduto()
    });
});