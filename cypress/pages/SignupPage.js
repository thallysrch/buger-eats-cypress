class SignupPage {

    //visitar a pagina
    go() {
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats-qa.vercel.app/')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    }
    //preencher o formulario
    fillForm(deliver) {
        cy.get('input[name="fullName"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)
        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type=button][value="Buscar CEP"').click()
        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)

        cy.get('input[name="address"]').should('have.value', deliver.address.street)
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)

        cy.get(':nth-child(4) > header > h2').should('have.text', 'Método de entrega')
        //do meu jeito pegando pelo cypress
        //cy.get('.delivery-method > :nth-child(1)').click()
        //exemplo
        cy.contains('.delivery-method li', deliver.delivery_method).click()

        //fazendo uploud de arquivos - npm install cypress-file-upload --save-dev
        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)

    }
    //faz a ação do click para enviar o formulario
    submit() {

        cy.get('form button[type="submit"]').click()
    }

    modalContenteShouldBe() {
        cy.get('.swal2-container .swal2-html-container')
            .should('have.text', 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
            )
    }
    

}

export default new SignupPage;