import CreateNewMap from "../../../pageObjects/CreateNewMap"

//Show analytics functionality test suite
describe('Verify show analytics functionality', function () {

    //test case to verify show analytics icon
    it('Verify analytics', function () {

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
            //select show analytics icon
            CreateNewMap.verifyShowAnalyticsIcon()
        })
    })
})