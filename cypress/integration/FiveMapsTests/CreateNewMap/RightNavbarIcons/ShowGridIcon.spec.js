import CreateNewMap from "../../../pageObjects/CreateNewMap"

//Show gridview functionality
describe('Verify grid view functionality', function () {

    //test case to verify show grid view of map
    it('Verify show gridview for students(current) dataset', function () {

        //fetching data from fixture file for data-driven testing
        cy.fixture('globalvariables').then((data) => {
            //Custom command for login 
            cy.login(this.data.FiveMapsUrl, this.data.email, this.data.password, this.data.FiveMapsHomeUrl)
            //custom command to select module 
            cy.selectModule(this.data.module[1])
            //Custom command to select maps from Explore dropdown
            cy.createMap()
            //save map
            CreateNewMap.verifySaveMap()
            //click on show grid icon
            CreateNewMap.verifyShowGridIcon()
            //logout
            cy.logout()
        })
    })
})