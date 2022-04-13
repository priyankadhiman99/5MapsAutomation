import ExploreMaps from "../../pageObjects/ExploreMaps"

//Delete selected map test suite
describe('Verify delete selected map functionality', function () {

    //Test case to verify delete selected map functionality
    it('Verify delete selected map', function () {

        //fetching data from fixture file for data-driven testing
        cy.fixture('globalvariables').then(function (data) {
            //Custom command for login
            cy.login(data.FiveMapsUrl, data.email, data.password, data.FiveMapsHomeUrl)
            //custom command to select module
            cy.selectModule(data.module[4])
            //putting mapname in search text box
            ExploreMaps.verifySearchTextBox()
            //select map from table
            ExploreMaps.selectMapFromTable()
            //click on delete selected
            ExploreMaps.verifyDeleteSelectedMapButton()
            //logout
            cy.logout()
        })
    })
})