import CreateNewMap from "../../../pageObjects/CreateNewMap";
import ExploreMaps from "../../../pageObjects/ExploreMaps";
import Filters from "../../../pageObjects/Filters";
import MapUtilities from "../../../pageObjects/MapUtilities";
import Stats from "../../../pageObjects/Stats";

//Disable filters test suite
describe('Verify disable filters functionality', function () {

    //Test case to verify disable filter
    it('Verify disable filters', function () {

        //fetching data from fixture file for data-driven testing
        cy.fixture('globalvariables').then((data) => {
        //Custom command for login
        cy.login(data.FiveMapsUrl, data.email, data.password, data.FiveMapsHomeUrl)
        //custom command to select module
        cy.selectModule(data.module[1])
        //click on explore dropdown
        MapUtilities.verifyExploreDrpdwn()
        //select map from dropdown
        MapUtilities.verifyMapsOption()
        //putting mapname in search text box
        ExploreMaps.verifySearchTextBox()
        //verify if the correct map is selected
        ExploreMaps.verifyMapName()
        //click on filters
        CreateNewMap.verifyFilterTab()
        //click on disable filters
        Filters.verifyDisableFilterChkBx()
        //click on stats tab
        CreateNewMap.verifyStatsTab()
        //verify data 
        Stats.verifyDrpdwnData(data.statsData[0])
        //to verify if student data is displayed correct after disabled filter
        Stats.verifyDataCountWithoutFilter(data.statsStudentCountWithoutFilter)
        //click on save icon
        CreateNewMap.verifySaveMap()
        //logout
        cy.logout()
        })
    })
})