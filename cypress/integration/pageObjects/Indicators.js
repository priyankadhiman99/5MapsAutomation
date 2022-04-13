var menu = require("../../support/locators/FiveMapsLocators").LOCATORS;

class Indicators {

    //verify if data is visible or not
    verifyIndicatorsData() {
        //verify capacity data
        cy.xpath(menu.INDICATORCAPACITYVAL, { timeout: 12000 }).should('be.visible')
        //verify over/under data
        cy.xpath(menu.INDICATOROVERUNDERVAL, { timeout: 12000 }).should('be.visible')
        //verify percent capacity data
        cy.xpath(menu.INDICATORPERCENTVAL, { timeout: 12000 }).should('be.visible')
    }

    //sorting capacity header
    verifyIndicatorCapacitySorting() {
        //rightclick on capacity header
        cy.xpath(menu.CAPACITYHEADER, { timeout: 12000 }).rightclick()
        //click to sort in ascending order
        cy.xpath(menu.SORTASCENDING, { timeout: 12000 }).click()
        cy.wait(3000)
        //rightclick on capacity header
        cy.xpath(menu.CAPACITYHEADER, { timeout: 12000 }).rightclick()
        //click to sort in descending order
        cy.xpath(menu.SORTDESCENDING, { timeout: 12000 }).click()
        cy.wait(3000)
        //rightclick on capacity header
        cy.xpath(menu.CAPACITYHEADER, { timeout: 12000 }).rightclick()
        //select clear sorting
        cy.xpath(menu.CLEARINDICATORSORTING, { timeout: 12000 }).click()
        cy.wait(3000)
    }

    //sorting over/under header
    verifyIndicatorOverUnderValueSorting() {
        //rightclick on over/under capacity header
        cy.xpath(menu.OVERUNDERHEADER, { timeout: 12000 }).rightclick()
        //click to sort in ascending order
        cy.xpath(menu.SORTASCENDING, { timeout: 12000 }).click()
        cy.wait(3000)
        //rightclick on over/under capacity header
        cy.xpath(menu.OVERUNDERHEADER, { timeout: 12000 }).rightclick()
        //click to sort in descending order
        cy.xpath(menu.SORTDESCENDING, { timeout: 12000 }).click()
        cy.wait(3000)
        //rightclick on over/under capacity header
        cy.xpath(menu.OVERUNDERHEADER, { timeout: 12000 }).rightclick()
        //select clear sorting
        cy.xpath(menu.CLEARINDICATORSORTING, { timeout: 12000 }).click()
        cy.wait(3000)
    }

    //sorting %capacity header
    verifyIndicatorPercentSorting() {
        //rightclick on percent capacity header
        cy.xpath(menu.PERCENTHEADER, { timeout: 12000 }).rightclick()
        //click to sort in ascending order
        cy.xpath(menu.SORTASCENDING, { timeout: 12000 }).click()
        cy.wait(3000)
        //rightclick on percent capacity header
        cy.xpath(menu.PERCENTHEADER, { timeout: 12000 }).rightclick()
        //click to sort in descending order
        cy.xpath(menu.SORTDESCENDING, { timeout: 12000 }).click()
        cy.wait(3000)
        //rightclick on percent capacity header
        cy.xpath(menu.PERCENTHEADER, { timeout: 12000 }).rightclick()
        //select clear sorting
        cy.xpath(menu.CLEARINDICATORSORTING, { timeout: 12000 }).click()
        cy.wait(3000)
    }

}

export default new Indicators();