import { byDT } from "../../test/TestUtils";

describe('Exercises', () => {
  it('exercise flow', () => {
    // User logs in
    cy.visit('/');
    cy.get(byDT("login-tab")).click();
    cy.get(byDT("email-input")).type("cypress@dumbbell.com");
    cy.get(byDT("password-input")).type("password1234");
    cy.get(byDT("submit-btn")).click();

    //Use visits exercises page
    cy.get(byDT("Exercises-nav-btn")).click();
    cy.url().should('eq', Cypress.config().baseUrl + '/exercises')

    //Create an exercise
    cy.get(byDT("expandable-fab")).click();
    cy.get(byDT("name-input")).type("Name exercise");
    cy.get(byDT("description-input")).type("Exercise description using cypress");
    cy.get(byDT("submit-btn")).click();

    //Navigates to exercise details
    cy.get(byDT("exercise-list-item")).first().click();
    cy.url().should('eq', Cypress.config().baseUrl + '/exercises/1');

    //edit
    cy.get(byDT("Exercises-nav-btn")).click();
    cy.get(byDT("edit-btn")).click();
    cy.url().should('eq', Cypress.config().baseUrl + '/exercises/1/edit');
    cy.get(byDT("name-input")).type("New Name")
    cy.get(byDT("description-input")).type("New exercise description");
    cy.get(byDT("update-btn")).click();
    cy.url().should('eq', Cypress.config().baseUrl + '/exercises');

    //delete
    cy.get(byDT("delete-btn")).click();
    cy.get(byDT("New Name")).should("not.exist");
  })
})