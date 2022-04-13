import CreateNewMap from "../../../pageObjects/CreateNewMap"

//Show map view functionality
describe('Verify map view functionality', function () {

    //test case to show mapview functionality
    it('Verify show mapview', function () {
        //fetching data from fixture file for data-driven testing
        cy.fixture('globalvariables').then(function (data) {
            //Custom command for login 
            cy.login(data.FiveMapsUrl, data.email, data.password, data.FiveMapsHomeUrl)
            //custom command to select module 
            cy.selectModule(data.module[1])
            //Custom command to select maps from Explore dropdown
            cy.createMap()
            //save map
            CreateNewMap.verifySaveMap()
            //click on open grid icon
            CreateNewMap.verifyShowGridIcon()
            //click on show map icon
            CreateNewMap.verifyShowMapIcon()
            //logout
            cy.logout()
        })
    })
})