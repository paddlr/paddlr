describe("Feature tests", () => {
  describe("game setup tests", () => {
    it("two players can be selected", () => {
      cy.visit("/");
      cy.get("#select_server").select("Edward Thomas");
      cy.get("#select_challenger").select("Danielle");
      cy.get("#start_game_button").click();
      cy.contains("Edward Thomas").should("be.visible");
      cy.contains("Danielle").should("be.visible");
    });
  });
  describe("scoring scenarios..", () => {
    beforeEach(function() {
      cy.visit("/");
      cy.get("#select_server").select("Edward Thomas");
      cy.get("#select_challenger").select("Danielle");
      cy.get("#start_game_button").click();
    });

    it("plays a game of 15-14 and displays the correct score ", () => {
      for (var count = 0; count <14; count++) {
        cy.get("#plus_idE").click();
        cy.get("#plus_idD").click();
 }
        cy.get("#plus_idE").click();
        cy.contains("15").should("be.visible");
        cy.contains("14").should("be.visible");




    });


    it("plays a game of 21-0 and correctly displays winner", () => {
      for (var count = 0; count < 21; count++) {
        cy.get("#plus_idE").click();
      }
      cy.get("#end_game").click();
      cy.contains("Edward Thomas").should("be.visible");
      cy.contains("Winner!!").should("be.visible");
      cy.contains("21").should("be.visible");
    });

    

    describe("plays a game of 23-21", () => {
     

      it("and correctly displays winner", () => {
        for (var count = 0; count < 20; count++) {
          cy.get("#plus_idE").click();
          cy.get("#plus_idD").click();
        }

        cy.get("#plus_idD").click();
        cy.get("#plus_idE").click();
        cy.get("#plus_idE").click();
        cy.get("#plus_idE").click();

        cy.get("#end_game").click();
        cy.contains("Edward Thomas").should("be.visible");
        cy.contains("Winner!!").should("be.visible");
        cy.contains("21").should("be.visible");
      });
    });
  });
});
