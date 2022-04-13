import MapUtilities from "../../../pageObjects/MapUtilities"

//Active users test suite
describe('Verify active users functionality', function () {

    //test case to verify no. of active users
    it('Active users list', function () {
        
        //fetching data from fixture file for data-driven testing
        cy.fixture('globalvariables').then((data) => {
        //Custom command for login
        cy.login(data.FiveMapsUrl, data.email, data.password, data.FiveMapsHomeUrl)
        //select active users
        MapUtilities.verifyActiveUsers()
        //logout
        cy.logout()
        })
    })
})