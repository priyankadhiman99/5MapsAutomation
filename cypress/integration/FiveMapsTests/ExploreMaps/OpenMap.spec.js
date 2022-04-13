import ExploreMaps from "../../pageObjects/ExploreMaps"
import MapUtilities from "../../pageObjects/MapUtilities"
import CreateNewMap from "../../pageObjects/CreateNewMap"

//Open selected map test suite
describe('Verify open selected map functionality', function () {

    //test case to verify open selected map
    it('Open selected map', function () {

        //fetching data from fixture file for data-driven testing
        cy.fixture('globalvariables').then(function (data) {
            //Custom command for login
            cy.login(data.FiveMapsUrl, data.email, data.password, data.FiveMapsHomeUrl)
            //custom command to select module
            cy.selectModule(data.module[4])
            //Custom command to select maps from Explore dropdown
            cy.createMap()
            //save map
            CreateNewMap.verifySaveMap()
            //click on explore dropdown
            MapUtilities.verifyExploreDrpdwn()
            //select map from dropdown
            MapUtilities.verifyMapsOption()
            //putting mapname in search text box
            ExploreMaps.verifySearchTextBox()
            //open map
            ExploreMaps.verifyMapName()
            //logout
            cy.logout()
        })
    })
})