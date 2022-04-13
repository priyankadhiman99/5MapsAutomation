import CreateNewMap from "../../../pageObjects/CreateNewMap"

//Drawing tools functionality test suite
describe('Verify drawing tools functionality in map view', function () {

    //test case to verify enable/disable drawing tools functionality
    it('Verify enable/disable drawing tools', function () {

        //fetching data from json file for data-driven testing
        cy.fixture('globalvariables').then((data) => {
            //Custom command for login 
            cy.login(data.FiveMapsUrl, data.email, data.password, data.FiveMapsHomeUrl)
            //custom command to select module 
            cy.selectModule(data.module[4])
            //Custom command to select maps from Explore dropdown
            cy.createMap()
            //save map
            CreateNewMap.verifySaveMap()
            //select drawing tools icon
            CreateNewMap.verifyDrawingToolsIcon()
            //logout
            cy.logout()
        })

    })
})