var menu = require("../support/locators/FiveMapsLocators").LOCATORS;
import MapUtilities from "../integration/pageObjects/MapUtilities";
import ExploreMaps from "../integration/pageObjects/ExploreMaps";
import Layers from "../integration/pageObjects/Layers";

//This command is used to visit url and login
Cypress.Commands.add('login', (url, email, password, homePageUrl) => {
    //visit url
    MapUtilities.verifyNavigateToApp(url)

    //login
    MapUtilities.verifyLogin(email, password, homePageUrl)
})

//This command is used to select module
Cypress.Commands.add('selectModule', (module) => {
    //select module
    MapUtilities.verifyModuleSelectionDrpdwn(module)
})

//This command is used to create new maps
Cypress.Commands.add('createMap', () => {
    //click on create a new map button
    ExploreMaps.verifyCreateNewMapButton()
    //select datasets
    Layers.verifyStudentdataSet()
    //select elementary building overlays
    Layers.verifySelectedElementaryBuildingOverLays()
    //select high building overlays
    Layers.verifySelectedHighBuildingOverlays()
    //select mid buildings overlays
    Layers.verifySelectedMiddleBuildingOverlays()
    //verify checked elementary buildings checkbox
    Layers.verifyCheckedElementaryBuildingOverLays()
    //verify checked high buildings checkbox
    Layers.verifyCheckedHighBuildingOverLays()
    //verify checked middle buildings checkbox
    Layers.verifyCheckedMiddleBuildingOverLays()
    cy.log('Map created')
})

//This command is used to logout from application
Cypress.Commands.add('logout', () => {
    //logout
    MapUtilities.verifyLogout()
})
