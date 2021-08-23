import {
  COLLECT_BURGER,
  LOGIN_BUTTON,
  ORDER_BUTTON,
} from "../../../shared/constants";

describe('Burger Ingredient Page. Click on button "Оформить заказ".', () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });

  it(`should drag and drop multiple ingredients`, () => {
    cy.contains(COLLECT_BURGER);

    cy.dragAndDropMultipleIngredients();

    cy.get("button").contains(ORDER_BUTTON).click();
    cy.get("button").should("contain", LOGIN_BUTTON);
  });
});
