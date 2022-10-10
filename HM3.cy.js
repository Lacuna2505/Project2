/// <reference types="cypress"/>


const params = [
    {
        args: {
            title: 'best toast',
            content: 'toast content',
            position: 'top-right',
            type: 'primary',
            timeout: '4000'
        },
        expected: {
            title: 'best toast',
            content: 'toast content',
            color: 'rgb(233, 29, 99)',
            position: 'justify-content: flex-end; align-items: flex-start;'
        }
    },
    {
        args: {
            title: 'best toast',
            content: 'toast content',
            position: 'top-left',
            type: 'success',
            timeout: '4000'
        },
        expected: {
            title: 'best toast',
            content: 'toast content',
            color: 'rgb(96, 175, 32)',
            position: 'justify-content: flex-end; align-items: flex-start;'
        }

    },
    {
        args: {
            title: 'best toast',
            content: 'toast content',
            position: 'bottom-left',
            type: 'info',
            timeout: '4000'
        },
        expected: {
            title: 'best toast',
            content: 'toast content',
            color: 'rgb(4, 149, 238)',
            position: 'justify-content: flex-end; align-items: flex-start;'
        }

    }
        

    
];
before(() => {
    cy.viewport(1280, 768);
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
    cy.get('[alt="Material Dark Theme"]').click();
    cy.get('[title="Modal & Overlays"]').click();
    cy.get('[title="Toastr"]').click;

    
})

params.forEach(({args, expected}) => {
    it('Toast test', () => {
        cy.get('ngx-toaster', {timeout: 10000})

        cy.get('div.form-group [name="title"]').clear().type(title)
        cy.get('div.form-group [name="content"]').clear().type(content)
        cy.get('[name="timeout"]').clear().type(timeout)
        cy.get('div:nth-child(1) > div.form-group > nb-select > button').click()
        cy.get('#nb-option-25').click();
        cy.get('div:nth-child(2) > div.form-group > nb-select > button').click();
        cy.get('#nb-option-33').click();
        cy.get('.appearance-filled.status-basic').click();

        cy.get('nb-toast[ng-reflect-toast]').then(tile => {
            cy.wrap(tile).should('have.css', 'background-color')
            .and('eq', color )
            .should('contain', expected.title)
            .and('contain', expected.content)

            cy.get('div[dir="ltr"]').should('have.css', 'justify-content: flex-end; align-items: flex-start;')
            .and('eq', expected.position)
            
        })
    })
}

)