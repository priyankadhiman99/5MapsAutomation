import CreateNewMap from "../../../pageObjects/CreateNewMap";
import Filters from "../../../pageObjects/Filters";
import Stats from "../../../pageObjects/Stats";

//Add multiple filters test suite
describe('Verify add filters functionality', function () {

    //Test case to verify adding multiple filters
    it('Verify add filters', function () {

        //fetching data from fixture file for data-driven testing
        cy.fixture('globalvariables').then((data) => {
        //Custom command for login
        cy.login(data.FiveMapsUrl, data.email, data.password, data.FiveMapsHomeUrl)
        //custom command to select module
        cy.selectModule(data.module[1])
        //custom command to create map
        cy.createMap()
        //apply filters for datasets
        CreateNewMap.verifyFilterTab()
        //apply filters for datasets
        Filters.verifyDatasetFilterIcon()
        //add gender filter
        Filters.verifyGenderMale()
        //click on apply button
        Filters.verifyApplyBtn()
        //click on stats tab
        CreateNewMap.verifyStatsTab()
        //Select dropdown
        Stats.verifyDrpdwnData(data.statsData[0])
        //to verify if student data is displayed correct after filter
        Stats.verifyDataCountWithFilter(data.statsStudentCountWithFilter)
        cy.wait(2000)
        //apply filters for overlays
        CreateNewMap.verifyFilterTab()
        Filters.verifyOverLaysFiltersIcon()
        Filters.verifySchoolType()
        //click on apply button
        Filters.verifyApplyBtn()
        //click on stats tab
        CreateNewMap.verifyStatsTab()
        //Select dropdown
        Stats.verifyDrpdwnData(data.statsData[0])
        //to verify if student data is displayed correct after filter
        Stats.verifyDataCountWithFilter(data.statsStudentCountWithFilter)
        //select additional data
        Stats.verifyAdditionalDataBtn(data.statsAdditionalData[0])
        //select value from dropdown
        Stats.verifyAdditionalDataDrpDwn(data.statsAdditionalData[0])
        //enter value in search data textbox
        Stats.verifySchoolTypeStats()
        Stats.verifyApplyBtn()
        //verify correct value displayed for middle school count
        Stats.verifyDataCountforMiddleSchool(data.statsMiddleSchoolCount)
        //save map
        CreateNewMap.verifySaveMap()
        //logout
        cy.logout()
        })
    })
})