import Layers from "../../../pageObjects/Layers"
import ExploreMaps from "../../../pageObjects/ExploreMaps"
import MapUtilities from "../../../pageObjects/MapUtilities"
var menu = require("../../../../support/locators/FiveMapsLocators").LOCATORS;

//Save map test suite
describe('Verify applying spatial filters functionality', function () {


    it('Verify applying spatial filters(include) for overlays', function () {
        //fetching data from fixture file for data-driven testing
        cy.fixture('globalvariables').then(function (data) {
            //Custom command for login 
            cy.login(data.FiveMapsUrl, data.email, data.password)
            //custom command to select module 
            cy.selectModule(data.module[1])
            //select maps from Explore dropdown
            MapUtilities.verifyMapsOption()
            cy.wait(2000)
            //click on create a new map button
            ExploreMaps.verifyCreateNewMapButton()
            cy.wait(5000)
            //select datasets
            Layers.verifySelectStudentdataSet()
            //select overlays
            Layers.verifySelectElementarySchoolOverlays()
            //verify checked overlays
            Layers.verifyCheckedElementarySchoolOverlays()
            //click on spatial filter icon
            Layers.verifySpatialFilterIcon()
            //Select include
            Layers.verifyIncludeSpatialFilters()
        })

    })

    it.skip('Verify applying spatial filters(exclude) for overlays', function () {
        //fetching data from fixture file for data-driven testing
        cy.fixture('globalvariables').then(function (data) {
            //Custom command for login 
            cy.login(data.FiveMapsUrl, data.email, data.password)
            //custom command to select module 
            cy.selectModule(data.module[1])
            //select maps from Explore dropdown
            MapUtilities.verifyMapsOption()
            cy.wait(2000)
            //click on create a new map button
            ExploreMaps.verifyCreateNewMapButton()
            cy.wait(5000)
            //select datasets
            Layers.verifySelectStudentdataSet()
            //select overlays
            Layers.verifySelectElementarySchoolOverlays()
            //verify checked overlays
            Layers.verifyCheckedElementarySchoolOverlays()
            //click on spatial filter icon
            Layers.verifySpatialFilterIcon()
            //select exclude
            Layers.verifyExcludeSpatialFilters()
        })
    })

    it.skip('Verify applying spatial filters(off) for overlays', function () {
        //fetching data from fixture file for data-driven testing
        cy.fixture('globalvariables').then(function (data) {
            //Custom command for login 
            cy.login(data.FiveMapsUrl, data.email, data.password)
            //custom command to select module 
            cy.selectModule(data.module[1])
            //select maps from Explore dropdown
            MapUtilities.verifyMapsOption()
            cy.wait(2000)
            //click on create a new map button
            ExploreMaps.verifyCreateNewMapButton()
            cy.wait(5000)
            //select datasets
            Layers.verifySelectStudentdataSet()
            //select overlays
            Layers.verifySelectElementarySchoolOverlays()
            //verify checked overlays
            Layers.verifyCheckedElementarySchoolOverlays()
            //click on spatial filter icon
            Layers.verifySpatialFilterIcon()
            //Select off
            Layers.verifyOffSpatialFilters()
        })
    })
})