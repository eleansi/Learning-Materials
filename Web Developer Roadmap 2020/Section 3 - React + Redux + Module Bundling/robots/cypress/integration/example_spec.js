describe('IO Login/Logout', () => {
    it('should open the application and login then logout', () => {
        // Arrange - setup initial app state
        // - visit a web page 
        cy.visit("http://localhost:3000");
        // - query for an element 
        let getSearch = cy.get('input[name="search_friends"]');

        // Act - take an action
        // - interact with that element
        getSearch.type("Leanne");

        // Assert - make an assertion 
        // - make an assertion about page content 
        //Check that steps exist
        cy.get('.CardsContent')
        .find('div')
        .should('to.be.equal', 1);

    });
});
  