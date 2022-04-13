import ExploreMaps from "../../pageObjects/ExploreMaps";

//Sorting headers on explore-maps page test suite
describe('Verify header sorting functionality', function () {


    //login and module selection 
    before(function () {

        //fetching data from fixture file for data-driven testing
        cy.fixture('globalvariables').then(function (data) {
            //Custom command for login
            cy.login(data.FiveMapsUrl, data.email, data.password, data.FiveMapsHomeUrl)
            //custom command to select module
            cy.selectModule(data.module[4])
        })
    })

    it('Sort by name', function () {
        ExploreMaps.verifySortByName()
    })

    it('Sort by description', function () {
        ExploreMaps.verifySortByDescription()
    })

    it('Sort by createdOn', function () {
        ExploreMaps.verifySortByCreatedOn()
    })

    it('Sort by createdBy', function () {
        ExploreMaps.verifySortByCreatedBy()
    })

    it('Sort by lastUpdated', function () {
        ExploreMaps.verifySortByLastUpdated()
    })

    it('logout', function () {
        //logout
        cy.logout()
    })
})

