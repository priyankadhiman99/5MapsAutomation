var menu = require("../../support/locators/FiveMapsLocators").LOCATORS;

class Filters {

    verifyDatasetFilterIcon() {
        cy.xpath(menu.DATASET_FILTER_ICON, { timeout: 12000 }).click()
    }

    verifyOverLaysFiltersIcon(){
        cy.xpath(menu.OVERLAYS_FILTER_ICON, { timeout: 12000 }).click()
    }

    verifyGenderMale() {
        cy.xpath(menu.FILTER_SEARCHBOX, { timeout: 12000 }).type('gender')
        cy.wait(3000)
        cy.get(menu.SELECTEDFILTER_CHECKBOX, { timeout: 12000 }).first().click()
        cy.get(menu.MALE_CHECKBOX, { timeout: 12000 }).first().click()
    }

    verifyGradeLevel() {
        cy.xpath(menu.FILTER_SEARCHBOX, { timeout: 12000 }).clear().type("grade level")
        cy.xpath(menu.GRADELEVEL_CHECKBOX, { timeout: 12000 }).click()
        cy.wait(2000)
        cy.xpath(menu.GRADE_01_CHECKBOX, { timeout: 12000 }).click()
        cy.wait(2000)
        cy.xpath(menu.GRADE_02_CHECKBOX, { timeout: 12000 }).click()
        cy.wait(2000)
        cy.xpath(menu.GRADE_03_CHECKBOX, { timeout: 12000 }).click()
        cy.wait(2000)
    }

    verifySchoolType(){
        cy.xpath(menu.FILTER_SEARCHBOX, { timeout: 12000 }).type('school type')
        cy.wait(3000)
        cy.get(menu.SELECTEDFILTER_CHECKBOX, { timeout: 12000 }).first().click()
        cy.wait(3000)
        cy.xpath(menu.SCHOOLTYPE_CHECKBOX1, { timeout: 12000 }).first().click()
        cy.xpath(menu.SCHOOLTYPE_CHECKBOX2, { timeout: 12000 }).first().click()
    }

    verifyApplyBtn() {
        cy.get(menu.FILTER_APPLY_BUTTON, { timeout: 12000 }).click()
        cy.wait(3000)
    }

    verifyDisableFilterChkBx(){
        cy.get(menu.DISABLE_FILTER_CHECKBOX, { timeout: 12000 }).should('be.visible').click()
        cy.wait(2000)
    }

    verifyRemoveFilters(){
        cy.xpath(menu.REMOVEFILTER_BUTTON1, { timeout: 12000 }).click()
        cy.wait(3000)
    }

}

export default new Filters();