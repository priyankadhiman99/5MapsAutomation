import CreateNewMap from "../../../pageObjects/CreateNewMap"
//import { deleteDownloadsFolder } from "../../../support/pageObjects/MapUtils/DeleteDownloadsFolder"

//export map functionality test suite
describe('Verify export file functionality', function () {

    const downloadsFolder = Cypress.config('downloadsFolder')

    //verify export file to png format
    it.skip('Verify export file to map(.png)', function () {

        //fetching data from fixture file for data-driven testing
        cy.fixture('globalvariables').then((data) => {
            cy.task('deleteFolder', downloadsFolder)
            //Custom command for login 
            cy.login(data.FiveMapsUrl, data.email, data.password, data.FiveMapsHomeUrl)
            //custom command to select module 
            cy.selectModule(data.module[2])
            //Custom command to select maps from Explore dropdown
            cy.createMap()
            //save map
            CreateNewMap.verifySaveMap()
            //export map
            CreateNewMap.verifyExportIcon()
            //export map to png
            CreateNewMap.verifyExportToPng()
            //verify if file is downloaded
            CreateNewMap.downloadFile()
            CreateNewMap.fileValidation()
            //to reload page
            cy.reload()
            //logout
            cy.logout()
        })
    })

    //verify export file to Maps and details
    it.skip('Verify export file to maps and details(.xls)', function () {

        //fetching data from fixture file for data-driven testing
        cy.fixture('globalvariables').then((data) => {
            //Custom command for login 
            cy.login(data.FiveMapsUrl, data.email, data.password, data.FiveMapsHomeUrl)
            //custom command to select module 
            cy.selectModule(data.module[2])
            //Custom command to select maps from Explore dropdown
            cy.createMap()
            //save map
            CreateNewMap.verifySaveMap()
            //export map
            CreateNewMap.verifyExportIcon()
            //export map to png
            CreateNewMap.verifyExportToMapsAndDetails()
            //verify if file is downloaded
            CreateNewMap.downloadFile()
            CreateNewMap.fileValidation()
            //to reload page
            cy.reload()
            //logout
            cy.logout()
        })
    })

    //verify export map to data table
    it('Verify export file to data Table(.xls)', function () {

        //fetching data from fixture file for data-driven testing
        cy.fixture('globalvariables').then((data) => {
            cy.task('deleteFolder', downloadsFolder)
            //Custom command for login 
            cy.login(data.FiveMapsUrl, data.email, data.password, data.FiveMapsHomeUrl)
            //custom command to select module 
            cy.selectModule(data.module[2])
            //Custom command to select maps from Explore dropdown
            cy.createMap()
            //save map
            CreateNewMap.verifySaveMap()
            //export map
            CreateNewMap.verifyExportIcon()
            //export map to png
            CreateNewMap.verifyExportToDataTable()
            //verify if file is downloaded
            CreateNewMap.downloadFile()
            CreateNewMap.fileValidation()
            //to reload page
            cy.reload()
            //logout
            cy.logout()
        })
    })

})