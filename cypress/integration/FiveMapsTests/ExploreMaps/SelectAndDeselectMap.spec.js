import ExploreMaps from "../../pageObjects/ExploreMaps";

//Select and deselect all maps test suite
describe('Test Suite to select and deselect all Maps from list', function () {

    //Test case to verify select/deselect all maps functionality
    it('Verify Select/deselect all maps', function () {

        //fetching data from fixture file for data-driven testing
        cy.fixture('globalvariables').then((data) => {
            //Custom command for login
            cy.login(data.FiveMapsUrl, data.email, data.password, data.FiveMapsHomeUrl)
            //custom command to select module
            cy.selectModule(data.module[4])
            //click to select all maps
            ExploreMaps.verifySelectAllMap()
            //click to deselect
            ExploreMaps.verifyDeselectAllMap()
            //logout
            cy.logout()
        })
    })

})