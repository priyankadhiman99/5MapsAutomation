import CreateNewMap from "../../../pageObjects/CreateNewMap";

//Save map test suite
describe('Verify save map functionality', function () {

    //test case to verify save map
    it('Verify save map', function () {

        //fetching data from fixture file for data-driven testing
        cy.fixture('globalvariables').then((data) => {
            //Custom command for login 
            cy.login(data.FiveMapsUrl, data.email, data.password, data.FiveMapsHomeUrl)
            //custom command to select module 
            cy.selectModule(data.module[4])
            //Custom command to select maps from Explore dropdown
            cy.createMap()
            //save map
            CreateNewMap.verifySaveMap()
            //logout
            cy.logout()
        })
    })
})