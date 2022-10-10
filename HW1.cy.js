/// <reference types="cypress"/>

it("Домашка_1", () => {
    cy.viewport(1280, 768);
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
    cy.get('[alt="Material Dark Theme"]').click();
    cy.get('[title="Forms"]').click();
    cy.get('[title="Form Layouts"]').click();

    //Inline Form
    cy.get('[class="col-md-12"] [placeholder="Jane Doe"]');
    cy.get('[class="col-md-12"] [placeholder="Email"]');
    cy.get('nb-card.inline-form-card span.custom-checkbox');
    cy.get('nb-card.inline-form-card [type="submit"]');

    //Using the Grid
    cy.get('#inputEmail1');
    cy.get('#inputPassword2');
    cy.get('nb-radio-group nb-radio:nth-child(1)');
    cy.get('nb-radio-group nb-radio:nth-child(2)');
    cy.get('nb-radio-group nb-radio:nth-child(3)');
    cy.get('.form-group.row button[status="primary"]');
    

    //Basic Form
    cy.get('#exampleInputEmail1');
    cy.get('#exampleInputPassword1');
    cy.get('div.form-group>nb-checkbox>label>span.custom-checkbox');
    cy.get('div.col-md-6 [status="danger"]');

    //Form without labels
    cy.get('[placeholder="Recipients"]');
    cy.get('[placeholder="Subject"]');
    cy.get('[placeholder="Message"]');
    cy.get('button[status="success"]');

    //Block Form
    cy.get('#inputFirstName');
    cy.get('#inputLastName');
    cy.get('#inputEmail');
    cy.get('#inputWebsite');
    cy.get('nb-card button.status-basic');

    //Horizontal form
    cy.get('#inputEmail3');
    cy.get('#inputPassword3');
    cy.get('div.form-group.row span.custom-checkbox');
    cy.get('button[status="warning"]');


    
   
})
