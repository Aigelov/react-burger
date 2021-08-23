import { COLLECT_BURGER } from "../../shared/constants";

describe("Menu works correctly with routes", () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });

  it("should open Burger Ingredients by default", () => {
    cy.contains(COLLECT_BURGER);
  });

  it("should open Orders Feed page after Лента заказов link click", () => {
    cy.get("a").contains("Лента заказов").click();
    cy.contains("Лента заказов");
  });

  it("should open Burger Ingredients page after Конструктор link click", () => {
    cy.contains("Конструктор").click();
    cy.contains(COLLECT_BURGER);
  });
});
