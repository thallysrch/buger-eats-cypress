escribe('home page', () => {
  it('passes', () => {
    cy.viewport(1440, 900)
    cy.visit('https://fleetmaintenance-spa-uat.azureedge.net/')
    //cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
  })
})



import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'
import SignupPage from '../pages/SignupPage'

describe('Signup', () => {
  // // beforeEach(function () {
  // //   cy.fixture('deliver').then((d) => {
  // //     this.deliver = d
  // //   })
  // })

  // //GANCHOS
  // before(function(){
  //   cy.log('Tudo aqui é executado uma única vez ANTES de TODOS os casos de testes')
  // }) 

  // beforeEach(function(){
  //   cy.log('Tudo aqui é excutado sempre ANTES de CADA caso de teste')
  // })

  // after(function(){
  //   cy.log('Tudo aqui é executado uma única vez DE'POIS de TODOS os casos de testes')
  // }) 

  // afterEach(function(){
  //   cy.log('Tudo aqui é executado uma única vez DEPOIS de CADA os casos de testes')
  // }) 

  it.skip('User should be deliver', function () {

    var deliver = signupFactory.deliver()

    signup.go()
    signup.fillForm(deliver)
    signup.submit()
    signup.modalContenteShouldBe

    const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato'    
  })

  it.skip('Incorrect document', function () {

    var deliver = signupFactory.deliver()

    deliver.cpf ='000000141AA'

    signup.go()
    signup.fillForm(deliver)
    signup.submit()
    signup.modalContenteShouldBe
    //signup.alertMessageShouldBe('Oops! CPF inválido')
    //verificado msg de alerta cpf invalido
    cy.get('.alert-error').should('have.text', 'Oops! CPF inválido')

  })
  it.skip('Incorrect email', function () {

    var deliver = signupFactory.deliver()

    deliver.email = 'user.com.br'

    signup.go()
    signup.fillForm(deliver)
    signup.submit()
    signup.modalContenteShouldBe
    //signup.alertMessageShouldBe('Oops! Email com formato inválido.')
    //verificado msg de alerta cpf invalido
    cy.get('.alert-error').should('have.text', 'Oops! Email com formato inválido.')

  })

  //validar mensagens de alerta
  // it('required fields', function(){
  //   signup.go()
  //   signup.submit()
  //   cy.contains('.alert-error').should('be.visible')('have.text','É necessario informar o nome'),
  //   cy.contains('.alert-error').should('have.text','É necessario informar o CPF'),
  //   cy.contains('.alert-error').should('have.text','É necessario informar o email'),
  //   cy.contains('.alert-error').should('have.text','É necessario informar o CEP'),
  //   cy.contains('.alert-error').should('have.text','É necessario informar o número do endereço'),
  //   cy.contains('.alert-error').should('have.text','Selecione o método de entrega'),
  //   cy.contains('.alert-error').should('have.text','Adicione uma foto da sua CNH')
  // })
}

)
