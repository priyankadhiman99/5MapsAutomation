var menu = require("../../support/locators/FiveMapsLocators").LOCATORS;

class Stats {

    verifyDrpdwnData(statsData) {
        cy.get(menu.STATS_DROPDOWN, { timeout: 12000 }).click().type(statsData)
        cy.xpath(menu.STATSDATA1_VALUE, { timeout: 12000 }).each(($el, index) => {
            cy.xpath(menu.STATSDATA1_VALUE, { timeout: 12000 }).first().click()
            var dataEle = new String();
            dataEle = $el.text()
            expect(dataEle).to.contain(statsData)
        })
    }

    verifyDataCountWithFilter(dataCountWithFilter) {
        //to verify if student data is displayed correct after filter
        cy.xpath(menu.STATS_STUDENTSDATA, { timeout: 12000 }).each(($stuEl, index) => {
            var studataEle = new String();
            studataEle = $stuEl.text()
            expect(studataEle).to.contain(dataCountWithFilter)
        })
    }

    verifyDataCountWithoutFilter(dataCountWithoutFilter) {
        cy.xpath(menu.STATS_STUDENTSDATA, { timeout: 12000 }).each(($stuEl, index) => {
            var studataEle = new String();
            studataEle = $stuEl.text()
            expect(studataEle).to.contain(dataCountWithoutFilter)
        })
    }

    verifyAdditionalDataBtn(statsAdditionalData) {
        //click on additional data button
        cy.xpath(menu.SELECT_ADDITIONAL_DATA_BUTTON).click()
        //select value from dropdown
        cy.xpath(menu.STATS_ADDDATA_DROPDOWN, { timeout: 12000 }).click().type(statsAdditionalData)
    }

    verifyAdditionalDataDrpDwn(statsAdditionalData) {
        cy.xpath(menu.STATS_ADDDATA_VALUE, { timeout: 12000 }).each(($el, index) => {
            cy.wait(3000)
            cy.xpath(menu.STATS_ADDDATA_VALUE, { timeout: 12000 }).first().click()
            var dataEle = new String();
            dataEle = $el.text()
            expect(dataEle).to.contain(statsAdditionalData)
        })
    }

    verifySchoolTypeStats() {
        cy.xpath(menu.SEARCH_DATA, { timeout: 12000 }).type("school type")
        cy.wait(2000)
        cy.get(menu.ADDDATA_CHECKBOX1, { timeout: 12000 }).click()
        cy.wait(2000)
    }

    verifyApplyBtn() {
        cy.xpath(menu.ADDDATA_APPLY_BUTTON, { timeout: 12000 }).click()
        cy.wait(3000)
    }

    verifyDataCountforMiddleSchool(midSchoolCount) {
        cy.xpath(menu.STATS_MIDDLESCHOOL_COUNT, { timeout: 12000 }).each(($schoolEl, index) => {
            var schoolTypeEle = new String();
            schoolTypeEle = $schoolEl.text()
            expect(schoolTypeEle).to.contain(midSchoolCount)
        })
    }
}

export default new Stats();