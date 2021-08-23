describe("Burger Ingredient Page. Ingredient click.", () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });

  it("should click on ingredient", () => {
    cy.contains("Флюоресцентная булка R2-D3");
    cy.get("article").contains("Флюоресцентная булка R2-D3").click();
  });

  it("should open modal", () => {
    cy.contains("Детали ингредиента");
  });

  it("should contain modal header title", () => {
    cy.contains("Детали ингредиента");
  });

  it("should close modal", () => {
    cy.get('*[class^="modal_close"]').click();
  });

  it("should not contain modal header title", () => {
    cy.contains("Детали ингредиента").should("not.exist");
  });
});
