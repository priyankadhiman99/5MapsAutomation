var menu = require("../../support/locators/FiveMapsLocators").LOCATORS;

class ModuleManagementPage {

    verifyAddNewModuleButton(){

    }

    verifySearchModuleTxtBx(module){
        //enter module name in searchbox
        cy.xpath(menu.MODULESEARCHBOX, { timeout: 12000 }).type(module)
        

    }

    sortByName(){

    }

    sortByStatus(){

    }

    sortByStatus(){

    }

    sortByClients(){
        
    }

}

export default new ModuleManagementPage();