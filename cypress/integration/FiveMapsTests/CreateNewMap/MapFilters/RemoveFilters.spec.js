import CreateNewMap from "../../../pageObjects/CreateNewMap";
import ExploreMaps from "../../../pageObjects/ExploreMaps";
import Filters from "../../../pageObjects/Filters";
import MapUtilities from "../../../pageObjects/MapUtilities";
import Stats from "../../../pageObjects/Stats";

//Remove filters test suite
describe('Verify remove filters functionality', function () {

    //Test case to verify remove filters
    it('Verify remove filters', function () {
        
        //fetching data from fixture file for data-driven testing
        cy.fixture('globalvariables').then(function (data) {
        //Custom command for login
        cy.login(data.FiveMapsUrl, data.email, data.password, data.FiveMapsHomeUrl)
        //custom command to select module
        cy.selectModule(data.module[1])
        //click on explore dropdown
        MapUtilities.verifyExploreDrpdwn()
        //select map from dropdown
        MapUtilities.verifyMapsOption()
        //search for existing map
        ExploreMaps.verifySearchTextBox()
        //verify if the correct map is selected
        ExploreMaps.verifyMapName()
        //click on filters
        CreateNewMap.verifyFilterTab()
        //remove filter
        Filters.verifyRemoveFilters()
        //click on stats tab
        CreateNewMap.verifyStatsTab()
        //verify dropdown data
        Stats.verifyDrpdwnData(data.statsData[0])
        //to verify if student data is displayed correct after removing filter
        Stats.verifyDataCountWithoutFilter(this.data.statsStudentCountWithoutFilter)
        //save map
        CreateNewMap.verifySaveMap()
        //logout
        cy.logout()
        })

    })
})