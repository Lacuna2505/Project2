/// <reference types="cypress"/>


it("Домашка_2", () => {
    cy.viewport(1280, 768);
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
    cy.get('[alt="Material Dark Theme"]').click();
    cy.get('[title="Forms"]').click();
    cy.get('[title="Form Layouts"]').click();


const params = [
    {arg: ['Vlada ', 'lala@gmail.com'], expected: ['Vlada ', 'lala@gmail.com']},
    {arg: ['Lina', 'hello@gmail.com'], expected: ['Lina', 'hello@gmail.com']}
]
params.forEach(({arg, expected}) => {
    cy.get('[class="col-md-12"] [placeholder="Jane Doe"]').clear().type(arg[0]);
    cy.get('[class="col-md-12"] [placeholder="Jane Doe"]').should('contain.value', expected[0]);
    cy.get('[class="col-md-12"] [placeholder="Email"]').clear().type(arg[1]);
    cy.get('[class="col-md-12"] [placeholder="Email"]').should('contain.value', expected[1]);
    cy.get('nb-card.inline-form-card [type="submit"]').click();
})
})