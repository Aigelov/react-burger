// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import {
  INGREDIENT_TITLE_1,
  INGREDIENT_TITLE_2,
  INGREDIENT_TITLE_3,
} from "../shared/constants";

Cypress.Commands.add("dragAndDropIngredient", (title) => {
  let newTitle = title;

  cy.get(`article[title="${title}"]`).as("ingredient");
  cy.get(`article[title="${title}"] *[class^="counter_counter__num"]`).as(
    "ingredientCount"
  );
  cy.get("@ingredientCount").then(($counter) => {
    let counter = $counter.text();

    cy.get('*[class^="burger-constructor_ingredients_"]').as(
      "burgerConstructor"
    );

    cy.get("@ingredient").trigger("dragstart");
    cy.get("@burgerConstructor")
      .trigger("drop")
      .then(() => {
        counter = $counter.text();

        if (title === INGREDIENT_TITLE_1) {
          cy.get("@burgerConstructor").should("contain", `${newTitle} (верх)`);
          newTitle = `${title} (низ)`;
        }

        cy.get("@burgerConstructor").should("contain", newTitle);
        cy.get("@ingredientCount").should("contain", counter);
      });
  });
});

Cypress.Commands.add("dragAndDropMultipleIngredients", () => {
  cy.dragAndDropIngredient(INGREDIENT_TITLE_1);
  cy.dragAndDropIngredient(INGREDIENT_TITLE_2);
  cy.dragAndDropIngredient(INGREDIENT_TITLE_3);
});
