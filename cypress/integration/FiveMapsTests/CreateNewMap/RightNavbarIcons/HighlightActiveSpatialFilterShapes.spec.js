import Layers from "../../../pageObjects/Layers";
import ExploreMaps from "../../../pageObjects/ExploreMaps";
import CreateNewMap from "../../../pageObjects/CreateNewMap";

//Open map in existing map test suite
describe('Verify highlight active spatial filter shapes functionality', function () {

    //test case to highlight spatial filter shapes    
    it('highlight active spatial filter shapes', function () {

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
        CreateNewMap.verifyHighlightActiveSpatialFilterShapeIcon()
        //save map
        CreateNewMap.verifySaveMap()
        //logout
        cy.logout()
        })
    })
})