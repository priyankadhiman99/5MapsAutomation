import Indicators from "../../../pageObjects/Indicators"
import CreateNewMap from "../../../pageObjects/CreateNewMap"

//Verify sort indicator headers est suite
describe('Verify indicator headers sorting functionality', function () {

    before(function () {
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
        })
    })

    it('sort capacity column', function () {
        //sort capacity column
        Indicators.verifyIndicatorCapacitySorting()

    })

    it('sort over/under column', function () {
        //sort over/under column
        Indicators.verifyIndicatorOverUnderValueSorting()

    })

    it('sort percent capacity column', function () {
        //sort percent capacity column
        Indicators.verifyIndicatorPercentSorting()

    })

    //logout
    after(() => {
        cy.logout()
    })


})