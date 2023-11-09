describe('Página de login', () => {

    beforeEach(() => {
        cy.visit('http://localhost:4200')
        
        cy.intercept('POST', 'http://localhost:3000/user/login', {
            statusCode: 400
        }).as('stubPost')
    })
    
      it('Deve preencher os campos do formulário corretamente e realizar login', () => {
        cy.login('madonna', 'senha123');
        cy.wait('@stubPost');
        //cy.contains('a', '(Logout)').should('be.visible');
      })
    })