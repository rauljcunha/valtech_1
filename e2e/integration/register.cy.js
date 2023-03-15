describe('register a new user', () => {
    it('app should be online and able to register a new user', () => {
        cy.viewport(1440, 900)
        cy.wait(2000)
        cy.visit('https://www.marisa.com.br')
        cy.wait(2000)
        cy.get('.navigation > :nth-child(1) > .js-load-users-menu > .my-account-dropdown-menu > .dropdown > .btn > .f-f-pluto-sans').click()
        cy.wait(2000)
        cy.get('#registerWithEmail').click()
        cy.wait(2000)
        cy.get('#register-firstName').type('Myfirstname Mylastname')
        cy.get('#register-birthDate').type('03/03/2003')
        // The app does not accept neither CPF nor email already registered. Sites for CPF: www.geradorcpf.com or www.geradordecpf.org
        // var CPF = new_cpf_generated
        cy.get('#register-cpf').type('321.942.939-49')
        cy.get(':nth-child(5) > :nth-child(1) > .row > .col-xs-4 > .form-group > #register-dddCellPhoneNumber').type('11')
        cy.get(':nth-child(5) > :nth-child(1) > .row > .col-xs-8 > .form-group > #register-cellPhoneNumber').type('999887766')
        // To be a not registered email, we could automate later the concat: CPF + '@test.com'
        cy.get('#register-pf-email').type('321.942.939-49@test.com')
        cy.get('#register-pf-pwd').type('Marisa@pwd')
        cy.get('#register-pf-checkPwd').type('Marisa@pwd')
        cy.get('#optInTerm').click() 
        cy.wait(2000)
        cy.get('#sendFormCompany').click()
        cy.wait(4000)
        cy.get('.conteudo').should('exist')
    })
})