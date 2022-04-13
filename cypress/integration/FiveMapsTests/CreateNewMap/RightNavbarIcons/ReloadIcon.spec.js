import Layers from "../../../pageObjects/Layers";
import ExploreMaps from "../../../pageObjects/ExploreMaps";
import CreateNewMap from "../../../pageObjects/CreateNewMap";

//verify reload map test suite
describe('Verify relaod map functionality', function () {

    //test case to verify reload map icon functionality
    it('reload map', function () {

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
        //save map
        CreateNewMap.verifySaveMap()
        //click on reload icon
        CreateNewMap.verifyReloadIcon()
        //verify if data reloaded 
        Layers.verifyStudentDatasetEnableClustering()
        //logout
        cy.logout()
        })
    })
})