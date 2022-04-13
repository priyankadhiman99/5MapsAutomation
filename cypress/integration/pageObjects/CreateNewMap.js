var menu = require("../../support/locators/FiveMapsLocators").LOCATORS;

class CreateNewMap {

    //save map
    verifySaveMap() {
        cy.xpath(menu.SAVE_MAP_ICON, { timeout: 12000 }).click()
        cy.wait(5000)
        cy.xpath(menu.MAPNAME_TXTBX, { timeout: 12000 }).clear().type("Test Automation Map")
        //set permission
        cy.xpath(menu.PERMISSION_CHKBX, { timeout: 12000 }).dblclick()
        //click on save button
        cy.xpath(menu.SAVEMAP_BUTTON, { timeout: 12000 }).click()
        cy.log("Map saved successfully!!!")
        cy.wait(2000)
    }

    //select map in existing map
    verifyOpenMapIcon() {
        cy.xpath(menu.OPENMAP_ICON, { timeout: 12000 }).click()
        cy.wait(5000)
    }

    //filters tab
    verifyFilterTab() {
        cy.xpath(menu.FILTERS_TAB, { timeout: 12000 }).click()
        cy.wait(3000)
    }

    //stats tab
    verifyStatsTab() {
        cy.get(menu.STATS_TAB, { timeout: 12000 }).click()
        cy.wait(2000)
    }

    //indicators tab
    verifyIndicatorsTab() {
        //verify click on indicators tab
        cy.xpath(menu.INDICATORSTAB, { timeout: 12000 }).click()
    }


    //verify mapname from open view
    verifyOpenMapViewName() {
        //to verify if the mapname on explore maps and create new map page are same
        cy.xpath(menu.OPENMAPFROMLIST, { timeout: 12000 }).then(function (map1) {
            //method text to obtain text content
            const text1 = map1.text()
            cy.log(text1)
            //to fetch selected mapname from table
            cy.wait(5000)
            //select map from table
            cy.xpath(menu.OPENMAPFROMLIST, { timeout: 12000 }).click()
            //click on open button
            cy.xpath(menu.OPENMAP_BTN, { timeout: 12000 }).click()
            //to fetch updated map name
            cy.wait(8000)
            cy.xpath(menu.MAPNAME, { timeout: 12000 }).then(function (map2) {
                //method text to obtain text content
                const text2 = map2.text()
                cy.log(text2)
                //compare if the correct map is selected
                expect(text1).eq(text2)
            })
        })
    }

    //verify export map icon
    verifyExportIcon() {
        //click on export icon
        cy.xpath(menu.EXPORTMAPICON, { timeout: 12000 }).click()
    }

    //export file to map in png format
    verifyExportToPng() {
        //select png checkbox
        cy.xpath(menu.EXPORTTOPNG, { timeout: 12000 }).click()
        //code to reload page after 50 sec to prevent from pageloadtimeout error
        cy.window().document().then(function (doc) {
            doc.addEventListener('click', () => {
                setTimeout(function () { doc.location.reload() }, 50000)
            })
            cy.xpath(menu.EXPORTMAPDOWNLOAD, { timeout: 12000 }).click()
        })
    }

    //export file to map in xls format
    verifyExportToMapsAndDetails() {
        //select png checkbox
        cy.xpath(menu.EXPORTTOMAPANDDETAILS, { timeout: 12000 }).click()
        //code to reload page after 50 sec to prevent from pageloadtimeout error
        cy.window().document().then(function (doc) {
            doc.addEventListener('click', () => {
                setTimeout(function () { doc.location.reload() }, 50000)
            })
            cy.xpath(menu.EXPORTMAPDOWNLOAD, { timeout: 12000 }).click()
        })
    }

    //export file to map in xls format
    verifyExportToDataTable() {
        //select png checkbox
        cy.xpath(menu.EXPORTTODATATABLE, { timeout: 12000 }).click()
        //code to reload page after 50 sec to prevent from pageloadtimeout error
        cy.window().document().then(function (doc) {
            doc.addEventListener('click', () => {
                setTimeout(function () { doc.location.reload() }, 50000)
            })
            cy.xpath(menu.EXPORTMAPDOWNLOAD, { timeout: 12000 }).click()
        })
    }

    //verify file download
    downloadFile() {
        try {
            cy.exec('rm cypress/downloads/*', {
                log: true,
                failOnNonZeroExit: false
            });
        }
        catch (err) {
            console.log('No Downloads folder found');
        }
        cy.wait(5000)
    }

    //file validation
    fileValidation() {
        cy.task('getFileName', 'cypress/downloads').then((fileName) => {
            fileName && cy.readFile(`cypress/downloads/${fileName}`).should('exist')
        })
    }

    //verify show grid icon 
    verifyShowGridIcon() {
        cy.xpath(menu.SHOWGRIDICON).click()
        //verify if district name column header is visible
        cy.xpath(menu.GRIDDISTRICTNAME, { timeout: 12000 }).should('be.visible')
        cy.log("Grid view")
    }

    //verify show map icon
    verifyShowMapIcon() {
        cy.xpath(menu.SHOWMAPICON, { timeout: 12000 }).click()
        //to verify if street map button is visible
        cy.xpath(menu.STREETMAPBUTTON, { timeout: 12000 }).should('be.visible')
        cy.log("Map view")
    }

    //verify show analytics icon
    verifyShowAnalyticsIcon() {
        cy.xpath(menu.SHOWANALYTICSICON, { timeout: 12000 }).click()
    }

    //verify drawing tools icon
    verifyDrawingToolsIcon() {
        //disable drawing tools 
        cy.xpath(menu.DRAWINGTOOLICON, { timeout: 12000 }).click()
        //verify drawing tools not to be visible
        cy.xpath(menu.DRAWINGTOOLMENUBAR, { timeout: 12000 }).should('not.exist')
        //enable drawing tools 
        cy.xpath(menu.DRAWINGTOOLICON, { timeout: 12000 }).click()
        //verify drawing tools to be visible
        cy.xpath(menu.DRAWINGTOOLMENUBAR, { timeout: 12000 }).should('be.visible')
    }

    //verify realod icon
    verifyReloadIcon() {
        cy.xpath(menu.RELOADICON, { timeout: 12000 }).click()
        cy.wait(5000)
    }

    //verify routing tools icon
    verifyRoutingToolsIcon() {
        cy.xpath(menu.ROUTINGTOOLSICON, { timeout: 12000 }).click()
        cy.xpath(menu.DRAWROUTEBUTTON, { timeout: 12000 }).should('be.visible')
        cy.xpath(menu.ROUTEVIAWAYPOINTS, { timeout: 12000 }).should('be.visible')
    }

    //verify highlight active spatial filter shapes icon
    verifyHighlightActiveSpatialFilterShapeIcon() {
        cy.xpath(menu.HIGHLIGHTACTIVESPATIALFILTERSHAPES, { timeout: 12000 }).click()
    }

}
export default new CreateNewMap();