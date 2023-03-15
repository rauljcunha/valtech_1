describe('register a new user', () => {
    it('app should be online and able to register a new user', () => {
        cy.viewport(1440, 900)
        cy.wait(2000)
        cy.visit('https://www.marisa.com.br')
        cy.wait(2000)
        cy.get('.navigation > :nth-child(1) > .js-load-users-menu > .my-account-dropdown-menu > .dropdown > .btn > .f-f-pluto-sans').click()
        cy.wait(2000)
        cy.get('#j_username').type('321.942.939-49@test.com')
        cy.get('#j_password').type('Marisa@pwd')
        cy.get('button[class="btn btn-default btn-block btn-login"]').click()
        cy.wait(4000)
        cy.get('.my-account--page-header > .f-w-500').should('exist')
    })
})