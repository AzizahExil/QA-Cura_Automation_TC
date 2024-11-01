describe('Make Appointment Feature', () => {
  it('User Sucsess Make Appointment', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com');

  //Home Page
    cy.wait(1000);
    cy.get('#btn-make-appointment').click().should('not.be.disabled');

  //Login Featurre
    cy.get('h2').should('contain', 'Login');

    cy.wait(1000);
    cy.get('#txt-username').type('John Doe').should('be.visible');
    cy.wait(1000);
    cy.get('#txt-password').type('ThisIsNotAPassword').should('be.visible');
    cy.wait(1000);
    cy.get('#btn-login').click().should('not.be.disabled');
    
  //Make Appointment Feature
    cy.get('h2').should('contain', 'Make Appointment');

    //Combo Facility
    cy.wait(1000);
    cy.get('#combo_facility').select('Seoul CURA Healthcare Center').should('not.be.disabled');
    cy.wait(1000);
    cy.get('#combo_facility').select('Hongkong CURA Healthcare Center').should('not.be.disabled');
    cy.wait(1000);
    cy.get('#combo_facility').select('Tokyo CURA Healthcare Center').should('not.be.disabled');
    cy.wait(1000);
    //Check Apply
    cy.get('[type="checkbox"]').check('Yes').should('not.be.disabled');
    cy.wait(1000);
    cy.get('[type="checkbox"]').uncheck('Yes').should('not.be.disabled');
    //Radio Health Program
    cy.wait(1000);
    cy.get('[type="radio"][value="Medicare"]').check().should('not.be.disabled');
    cy.wait(1000);
    cy.get('[type="radio"][value="Medicaid"]').check().should('not.be.disabled');
    cy.wait(1000);
    cy.get('[type="radio"][value="None"]').check().should('not.be.disabled');
    //Calendar Visit Date
    cy.wait(1000);
    cy.get('#txt_visit_date').type('01/01/2025').should('be.visible');
    cy.wait(1000);
    cy.get('.glyphicon-calendar').click().should('not.be.disabled');
    cy.wait(1000);
    cy.get('.day').contains('10').as('day10');
    cy.wait(1000);
    cy.get('@day10').click();
    cy.wait(1000);
    cy.get('@day10').should('have.class', 'active');
    //Input Comment
    cy.wait(1000);
    cy.get('#txt_comment').type('This Is Test Message').should('be.visible');
    cy.wait(1000);
    //Button Book Appointment
    cy.get('#btn-book-appointment').click().should('not.be.disabled');
  })
})