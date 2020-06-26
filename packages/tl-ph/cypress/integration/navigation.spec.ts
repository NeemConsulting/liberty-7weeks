/// <reference types="Cypress" />

describe("Header Navigation tests, non-mobile", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it('Clicking "Product Showcase" navigates user to the product showcase page', () => {
    cy.get(":nth-child(5) > .makeStyles-navigationLink-30").click();
  });
});
