import CreateNewMap from "../../../pageObjects/CreateNewMap";
import Filters from "../../../pageObjects/Filters";
import Stats from "../../../pageObjects/Stats";

var menu = require("../../../support/pageObjects/locators/FiveMapsLocators").LOCATORS;

//Add one filter test suite
describe('Verify add filters functionality', function () {

    //Test case to verify add filter
    it('Verify add filters', function () {

        //fetching data from fixture file for data-driven testing
        cy.fixture('globalvariables').then((data) => {
        //Custom command for login
        cy.login(data.FiveMapsUrl, data.email, data.password, data.FiveMapsHomeUrl)
        //custom command to select module
        cy.selectModule(data.module[1])
        //custom command to create map
        cy.createMap()
        //click on filter tab
        CreateNewMap.verifyFilterTab()
        //apply filters for datasets
        Filters.verifyDatasetFilterIcon()
        //add gender filter
        Filters.verifyGenderMale()
        //add gradelevelfilters
        //Filters.verifyGradeLevel()
        //click on apply button
        Filters.verifyApplyBtn()
        //click on stats tab
        CreateNewMap.verifyStatsTab()
        //Select dropdown
        Stats.verifyDrpdwnData(data.statsData[0])
        //to verify if student data is displayed correct after filter
        Stats.verifyDataCountWithFilter(data.statsStudentCountWithFilter)
        //save map
        CreateNewMap.verifySaveMap()
        //logout
        cy.logout()
        })
    })
})