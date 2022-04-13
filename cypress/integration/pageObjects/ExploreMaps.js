var menu = require("../../support/locators/FiveMapsLocators").LOCATORS;

class ExploreMaps {

    verifySearchTextBox() {
        //put value in search text box
        cy.xpath(menu.SEARCH_MAP_TXTBX, { timeout: 12000 }).first().type('Test Automation Map')
        cy.wait(2000)
    }

    verifyCreateNewMapButton() {
        //click on create a new map button
        cy.xpath(menu.CREATE_MAP, { timeout: 12000 }).click()
        cy.wait(5000)
    }

    verifyOpenMapFromTable() {
        //click on open selected map button
        cy.xpath(menu.OPEN_SELECTED, { timeout: 12000 }).click()
    }

    selectMapFromTable() {
        //select map from table
        cy.xpath(menu.MAPNAME_CHECKBOX, { timeout: 12000 }).click()
    }

    verifyDeleteSelectedMapButton() {
        //verify delete selected map button
        cy.xpath(menu.DELETE_SELECTED_MAP_BUTTON, { timeout: 12000 }).click()
        //click on yes
        cy.xpath(menu.DELETE_MAP_YES, { timeout: 12000 }).click()
    }

    verifySelectAllMap() {
        //verify select all checbox
        cy.xpath(menu.SELECT_ALL_MAP_CHECKBOX, { timeout: 12000 }).invoke('attr', 'aria-checked').should('eq', 'false')
        cy.xpath(menu.SELECT_ALL_MAP_CHECKBOX, { timeout: 12000 }).first().click()
        cy.wait(2000)
        cy.xpath(menu.SELECT_ALL_MAP_CHECKBOX, { timeout: 12000 }).invoke('attr', 'aria-checked').should('eq', 'true')
        cy.log('All maps selected from list')
        cy.wait(2000)
    }

    verifyDeselectAllMap() {
        //verify deselect all checkbox
        cy.xpath(menu.SELECT_ALL_MAP_CHECKBOX, { timeout: 12000 }).invoke('attr', 'aria-checked').should('eq', 'true')
        cy.xpath(menu.SELECT_ALL_MAP_CHECKBOX, { timeout: 12000 }).first().click()
        cy.xpath(menu.SELECT_ALL_MAP_CHECKBOX, { timeout: 12000 }).invoke('attr', 'aria-checked').should('eq', 'false')
        cy.log('Deselected all maps from list')
        cy.wait(3000)
    }

    verifyMapName() {
        //to verify if the mapname on explore maps and create new map page are same
        cy.xpath(menu.OPEN_SELECTED, { timeout: 12000 }).then(function (map1) {
            //method text to obtain text content
            const text1 = map1.text()
            cy.log(text1)
            //to fetch selected mapname from table
            cy.wait(5000)
            //select map from table
            cy.xpath(menu.OPEN_SELECTED, { timeout: 12000 }).click()
            //to fetch mapname on map page
            cy.wait(5000)
            cy.xpath(menu.MAPNAME, { timeout: 12000 }).then(function (map2) {
                //method text to obtain text content
                const text2 = map2.text()
                cy.log(text2)
                //compare if the correct map is selected
                expect(text1).eq(text2)
            })
        })
    }

    verifySortByName() {
        cy.wait(5000)
        //double click on name header to sort in ascending order
        cy.xpath(menu.SORT_BY_NAME, { timeout: 12000 }).first().click().wait(2000)
        //double click on description header to sort in descending order
        cy.xpath(menu.SORT_BY_NAME, { timeout: 12000 }).click().wait(2000)
        //clear sorting
        cy.xpath(menu.SORT_BY_NAME, { timeout: 12000 }).rightclick()
        cy.xpath(menu.CLEARMAPSORTING, { timeout: 12000 }).click().wait(2000)
    }

    verifySortByDescription() {
        //double click on description header to sort in ascending order
        cy.xpath(menu.SORT_BY_DESC, { timeout: 12000 }).click().wait(2000)
        //double click on description header to sort in descending order
        cy.xpath(menu.SORT_BY_DESC, { timeout: 12000 }).click().wait(2000)
        //clear sorting
        cy.xpath(menu.SORT_BY_DESC, { timeout: 12000 }).rightclick()
        cy.xpath(menu.CLEARMAPSORTING, { timeout: 12000 }).click().wait(2000)
    }

    verifySortByCreatedOn() {
        //double click on createdOn header to sort in ascending order
        cy.xpath(menu.SORT_BY_CREATEDON, { timeout: 12000 }).click().wait(2000)
        //double click on description header to sort in descending order
        cy.xpath(menu.SORT_BY_CREATEDON, { timeout: 12000 }).click().wait(2000)
        //clear sorting
        cy.xpath(menu.SORT_BY_CREATEDON, { timeout: 12000 }).rightclick()
        cy.xpath(menu.CLEARMAPSORTING, { timeout: 12000 }).click().wait(2000)
    }

    verifySortByCreatedBy() {
        //double click on createdBy header to sort in ascending order
        cy.xpath(menu.SORT_BY_CREATEDBY, { timeout: 12000 }).click().wait(2000)
        //double click on description header to sort in descending order
        cy.xpath(menu.SORT_BY_CREATEDBY, { timeout: 12000 }).click().wait(2000)
        //clear sorting
        cy.xpath(menu.SORT_BY_CREATEDBY, { timeout: 12000 }).rightclick()
        cy.xpath(menu.CLEARMAPSORTING, { timeout: 12000 }).click().wait(2000)
    }

    verifySortByLastUpdated() {
        //double click on lastUpdated header to sort in ascending order
        cy.xpath(menu.SORT_BY_LAST_UPDATED, { timeout: 12000 }).click().wait(2000)
        //double click on description header to sort in descending order
        cy.xpath(menu.SORT_BY_LAST_UPDATED, { timeout: 12000 }).click().wait(2000)
        //clear sorting
        cy.xpath(menu.SORT_BY_LAST_UPDATED, { timeout: 12000 }).rightclick()
        cy.xpath(menu.CLEARMAPSORTING, { timeout: 12000 }).click().wait(2000)
    }
}

export default new ExploreMaps();