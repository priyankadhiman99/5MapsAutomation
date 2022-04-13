import CreateNewMap from "../../../pageObjects/CreateNewMap";

//Open mapview in existing map test suite
describe('Verify open mapview in existing map functionality', function () {

    //test case to verify open mapview icon
    it('Verify open mapview icon', function () {

        //fetching data from fixture file for data-driven testing
        cy.fixture('globalvariables').then((data) => {
            //Custom command for login 
            cy.login(data.FiveMapsUrl, data.email, data.password, data.FiveMapsHomeUrl)
            //custom command to select module 
            cy.selectModule(data.module[1])
            //Custom command to select maps from Explore dropdown
            cy.createMap()
            //save map
            CreateNewMap.verifySaveMap()
            //click on open map icon
            CreateNewMap.verifyOpenMapIcon()
            //verify if the selected map view is opened
            CreateNewMap.verifyOpenMapViewName()
            //logout
            cy.logout()
        })
    })
})