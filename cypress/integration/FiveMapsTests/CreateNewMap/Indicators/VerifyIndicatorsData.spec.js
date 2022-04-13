import CreateNewMap from "../../../pageObjects/CreateNewMap"
import Indicators from "../../../pageObjects/Indicators"

//Verify capacity indicators data test suite
describe('Verify capacity indicators data functionality', function () {

    it('Verify capacity indicators data', function () {

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
            //click on indicators tab
            CreateNewMap.verifyIndicatorsTab()
            //verify capacity indicator data is visible
            Indicators.verifyIndicatorsData()
            //logout
            cy.logout()
        })
    })

})