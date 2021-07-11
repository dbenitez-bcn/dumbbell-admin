import { byDT } from "../../test/TestUtils";

describe('Access', () => {
  it("Users access flow", () => {
    // User registers
    cy.visit('/');
    cy.get(byDT("register-tab")).click();
    cy.get(byDT("email-input")).type("cypress@dumbbell.com");
    cy.get(byDT("password-input")).type("password1234");
    cy.get(byDT("password-repeat-input")).type("password1234");
    cy.get(byDT("submit-btn")).click();

    // User logs in
    cy.get(byDT("login-tab")).click();
    cy.get(byDT("email-input")).type("cypress@dumbbell.com");
    cy.get(byDT("password-input")).type("password1234");
    cy.get(byDT("submit-btn")).click();
  })
})