import MapUtilities from "../../../pageObjects/MapUtilities"

//Module management test suite
describe('Verify module management functionality', function () {

    //test case to verify module management page
    it('Open module management page', function () {

        //fetching data from fixture file for data-driven testing
        cy.fixture('globalvariables').then((data) => {
            //Custom command for login
            cy.login(data.FiveMapsUrl, data.email, data.password, data.FiveMapsHomeUrl)
            //select module management option
            MapUtilities.verifyModuleManagement()
            //logout
            cy.logout()
        })
    })
})