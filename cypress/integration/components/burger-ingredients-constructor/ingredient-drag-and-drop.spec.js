import {
  COLLECT_BURGER,
  INGREDIENT_TITLE_1,
  INGREDIENT_TITLE_2,
  INGREDIENT_TITLE_3,
} from "../../../shared/constants";

describe("Burger Ingredient Page. Drag and Drop Ingredient.", () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });

  it(`should drag and drop ingredient "${INGREDIENT_TITLE_1}"`, () => {
    cy.contains(COLLECT_BURGER);

    // dragAndDropIngredient(INGREDIENT_TITLE_1);
    cy.dragAndDropIngredient(INGREDIENT_TITLE_1);
  });

  it(`should drag and drop ingredient "${INGREDIENT_TITLE_2}"`, () => {
    // dragAndDropIngredient(INGREDIENT_TITLE_2);
    cy.dragAndDropIngredient(INGREDIENT_TITLE_2);
  });

  it(`should drag and drop ingredient "${INGREDIENT_TITLE_3}"`, () => {
    // dragAndDropIngredient(INGREDIENT_TITLE_3);
    cy.dragAndDropIngredient(INGREDIENT_TITLE_3);
  });

  it(`should drag and drop ingredient "${INGREDIENT_TITLE_2}" counter have to go to 2`, () => {
    // dragAndDropIngredient(INGREDIENT_TITLE_2);
    cy.dragAndDropIngredient(INGREDIENT_TITLE_2);
  });
});
