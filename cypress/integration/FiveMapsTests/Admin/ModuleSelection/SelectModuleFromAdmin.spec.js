import MapUtilities from "../../../pageObjects/MapUtilities"

//Module selection from admin test suite
describe('Verify module selection functionality from admin', function () {

    //test case to select module
    it('Select module', function () {

        //fetching data from fixture file for data-driven testing
        cy.fixture('globalvariables').then((data) => {
            //Custom command for login
            cy.login(data.FiveMapsUrl, data.email, data.password, data.FiveMapsHomeUrl)
            //select module 
            MapUtilities.verifyModuleSelectionFromAdminDrpdwn(data.module[4])
            //logout
            cy.logout()
        })
    })
})