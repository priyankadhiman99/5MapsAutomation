var menu = require("../../support/locators/FiveMapsLocators").LOCATORS;

class MapUtilities {

    verifyNavigateToApp(url) {
        cy.visit(url)
        cy.title().should('include', 'Frontline - Location Analytics')
        cy.wait(2000)
    }

    verifyLogin(email, password, homePageUrl) {
        cy.xpath(menu.LOGIN_USERNAME, { timeout: 12000 }).type(email)
        cy.xpath(menu.LOGIN_PASSWORD, { timeout: 12000 }).type(password)
        cy.xpath(menu.LOGIN_BUTTON, { timeout: 12000 }).should('be.visible').click()
        cy.log('Successfully logged in!!!')
        cy.url().should('include', homePageUrl)
        cy.wait(2000)
    }

    verifyModuleSelectionDrpdwn(module) {
        //select module
        cy.xpath(menu.MODULE_NAME, { timeout: 12000 }).click()
        //cy.xpath(menu.MODULE_NAME, { timeout: 12000 }).clear().type(module)
        cy.xpath(menu.MODULE_SELECT, { timeout: 12000 }).each(($el, index) => {
            cy.xpath(menu.MODULE_SELECT, { timeout: 12000 }).click()
            cy.wait(3000)
            var modName = new String();
            modName = $el.text()
            expect(modName).to.contain(module)
        })
    }

    verifyExploreDrpdwn() {
        //click on explore dropdown
        cy.xpath(menu.EXPLORE, { timeout: 12000 }).click()
    }

    verifyMapsOption() {
        //click on maps 
        cy.xpath(menu.MAPS, { timeout: 12000 }).click()
        cy.wait(5000)
    }

    verifyModuleManagement() {
        //click on admin dropdown
        cy.xpath(menu.ADMIN, { timeout: 12000 }).click()
        //select module management
        cy.xpath(menu.MODULEMANAGEMENT, { timeout: 12000 }).click()
        //verify text
        cy.xpath(menu.VERIFYMODULETEXT, { timeout: 12000 }).should('be.visible')
    }

    verifyActiveUsers() {
        //click on admin dropdown
        cy.xpath(menu.ADMIN, { timeout: 12000 }).click()
        //click on active users
        cy.xpath(menu.ACTIVEUSERS, { timeout: 12000 }).click()
        //active users must be visible
        cy.xpath(menu.ACTIVEUSERLIST, { timeout: 12000 }).should('be.visible')
    }

    verifyModuleSelectionFromAdminDrpdwn(module) {
        //click on admin dropdown
        cy.xpath(menu.ADMIN, { timeout: 12000 }).click()
        //click on active users
        cy.xpath(menu.MODULE_SELECTION, { timeout: 12000 }).click()
        //select module
        cy.xpath(menu.MODULENAMEFROMADMIN, { timeout: 12000 }).click()
        //cy.xpath(menu.MODULENAMEFROMADMIN, { timeout: 12000 }).clear().type(module)
        cy.xpath(menu.MODULESELECTFROMADMIN, { timeout: 12000 }).each(($el, index) => {
            cy.xpath(menu.MODULESELECTFROMADMIN, { timeout: 12000 }).click()
            cy.wait(3000)
            var modName = new String();
            modName = $el.text()
            expect(modName).to.contain(module)
        })
        //verify if same module is selected in module selection dropdown inside navbar
        cy.xpath(menu.UPDATEDMODULE, { timeout: 12000 }).should('be.visible')
    }

    verifyLogout() {
        cy.xpath(menu.ACCOUNT, { timeout: 12000 }).click()
        cy.xpath(menu.LOGOUT, { timeout: 12000 }).click()
        cy.log('Logged out')
    }

}

export default new MapUtilities();