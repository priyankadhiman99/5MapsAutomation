import Layers from "../../../pageObjects/Layers";
import ExploreMaps from "../../../pageObjects/ExploreMaps";
import CreateNewMap from "../../../pageObjects/CreateNewMap";

//routing tools functionality test suite
describe('Verify routing tools functionality', function () {

    //fetching data from fixture file for data-driven testing
    before(function () {
        cy.fixture('globalvariables').then(function (data) {
            this.data = data
        })
    })

    //test case to enable map routes
    it('routing tolls icon', function () {

        //fetching data from fixture file for data-driven testing
        cy.fixture('globalvariables').then((data) => {
            //Custom command for login 
            cy.login(data.FiveMapsUrl, data.email, data.password, data.FiveMapsHomeUrl)
            //custom command to select module 
            cy.selectModule(data.module[4])
            //click on create a new map button
            ExploreMaps.verifyCreateNewMapButton()
            //select datasets
            Layers.verifyStudentdataSet()
            //enable clustering
            Layers.studentDatasetEnableClustering()
            //select elementary building overlays
            Layers.verifySelectedElementaryBuildingOverLays()
            //verify checked elementary buildings checkbox
            Layers.verifyCheckedElementaryBuildingOverLays()
            //click on routing tools icon
            CreateNewMap.verifyRoutingToolsIcon()
            //save map
            CreateNewMap.verifySaveMap()
            //logout
            cy.logout()
        })
    })
})