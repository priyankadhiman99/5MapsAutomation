var menu = require("../../support/locators/FiveMapsLocators").LOCATORS;

class Layers{

     //function to verify if students dataset is selected
     verifyStudentdataSet() {
        //select student datasets
        cy.xpath(menu.DATASET_DROPDOWN, { timeout: 12000 }).click()
        cy.xpath(menu.STUDENTS_DATASET, { timeout: 12000 }).click()
        //verify datasets
        cy.xpath(menu.STUDENT_DATASET_CHECKBOX_ICON, { timeout: 12000 }).first().should('be.visible')
        cy.wait(5000)
        cy.xpath(menu.STUDENT_DATASET_CHECKBOX, { timeout: 12000 }).invoke('attr', 'aria-checked').should('eq', 'false')
        cy.xpath(menu.STUDENT_DATASET_CHECKBOX_ICON, { timeout: 12000 }).first().click()
        cy.wait(5000)
        cy.xpath(menu.STUDENT_DATASET_CHECKBOX, { timeout: 12000 }).invoke('attr', 'aria-checked').should('eq', 'true')
        cy.wait(2000)
    }
    
    //enable clustering for Students dataset
    studentDatasetEnableClustering(){
        cy.xpath(menu.STUDENTS_DATASET_THREEDOTICON, { timeout: 12000 }).click()
        cy.xpath(menu.STUDENTS_DATASET_ENABLECLUSTERING, { timeout: 12000 }).click()
        cy.wait(5000)
        cy.xpath(menu.STUDENTS_DATASET_ENABLECLUSTERING_VERIFY, { timeout: 12000 }).should('be.visible')

    }

    //verify enable clustering for student dataset
    verifyStudentDatasetEnableClustering(){
        cy.xpath(menu.STUDENTS_DATASET_ENABLECLUSTERING_VERIFY, { timeout: 12000 }).should('be.visible')
    }

    //disable clustering for students dataset
    verifyStudentDatasetDisableClustering(){
        cy.xpath(menu.STUDENTS_DATASET_THREEDOTICON, { timeout: 12000 }).click()
        cy.xpath(menu.STUDENTS_DATASET_DISABLECLUSTERING, { timeout: 12000 }).click()
    }

    //function to verify if elementary building overlays selected
    verifySelectedElementaryBuildingOverLays() {
        //select elementary building overlays
        cy.xpath(menu.OVERLAYS_DROPDOWN, { timeout: 12000 }).click()
        //cy.xpath(menu.ELEMBUILD_OVERLAYS,{timeout:12000}).type('{enter}')
        cy.xpath(menu.ELEMBUILD_OVERLAYS, { timeout: 12000 }).click({ force: true })
        //verify elementary buildings overlays checkbox visible
        cy.xpath(menu.ELEMBUILD_OVERLAYS_CHECKBOX_ICON, { timeout: 12000 }).first().should('be.visible')
        cy.wait(3000)
    }

    //function to verify if elementary building overlays' checked
    verifyCheckedElementaryBuildingOverLays() {
        //check elementary buildings checkbox
        cy.xpath(menu.ELEMBUILD_OVERLAYS_CHECKBOX, { timeout: 12000 }).invoke('attr', 'aria-checked').should('eq', 'false')
        cy.xpath(menu.ELEMBUILD_OVERLAYS_CHECKBOX_ICON, { timeout: 12000 }).first().click()
        cy.wait(5000)
        cy.xpath(menu.ELEMBUILD_OVERLAYS_CHECKBOX, { timeout: 12000 }).invoke('attr', 'aria-checked').should('eq', 'true')
    }

    //function to verify if high building overlays selected
    verifySelectedHighBuildingOverlays() {
        //select high buildings overlays
        cy.xpath(menu.OVERLAYS_DROPDOWN, { timeout: 12000 }).click()
        cy.xpath(menu.HIGHBUILD_OVERLAYS, { timeout: 12000 }).click({ force: true })
        //verify high buildings overlays
        cy.xpath(menu.HIGHBUILD_OVERLAYS_CHECKBOX_ICON, { timeout: 12000 }).first().should('be.visible')
        cy.wait(3000)
    }

    //function to verify if high building overlays' checked
    verifyCheckedHighBuildingOverLays() {
        //check high buildings checkbox
        cy.xpath(menu.HIGHBUILD_OVERLAYS_CHECKBOX, { timeout: 12000 }).invoke('attr', 'aria-checked').should('eq', 'false')
        cy.xpath(menu.HIGHBUILD_OVERLAYS_CHECKBOX_ICON, { timeout: 12000 }).first().click()
        cy.wait(3000)
        cy.xpath(menu.HIGHBUILD_OVERLAYS_CHECKBOX, { timeout: 12000 }).invoke('attr', 'aria-checked').should('eq', 'true')
    }

    //function to verify if middle building overlays selected
    verifySelectedMiddleBuildingOverlays() {
        //select middle buildings overlays
        cy.xpath(menu.OVERLAYS_DROPDOWN).click()
        cy.xpath(menu.MIDBUILD_OVERLAYS, { timeout: 12000 }).click({ force: true })
        //verify middle buildings overlays
        cy.xpath(menu.MIDBUILD_OVERLAYS_CHECKBOX_ICON, { timeout: 12000 }).first().should('be.visible')
        cy.wait(2000)
    }

    //function to verify if middle building overlays' checked
    verifyCheckedMiddleBuildingOverLays() {
        //check middle buildings overlays checkbox
        cy.xpath(menu.MIDBUILD_OVERLAYS_CHECKBOX, { timeout: 12000 }).invoke('attr', 'aria-checked').should('eq', 'false')
        cy.xpath(menu.MIDBUILD_OVERLAYS_CHECKBOX_ICON, { timeout: 12000 }).first().click()
        cy.wait(3000)
        cy.xpath(menu.MIDBUILD_OVERLAYS_CHECKBOX, { timeout: 12000 }).invoke('attr', 'aria-checked').should('eq', 'true')
    }

    //function to verify if elementary school overlays selected
    verifySelectElementarySchoolOverlays() {
        //select elementary school overlays
        cy.xpath(menu.OVERLAYS_DROPDOWN, { timeout: 12000 }).click()
        cy.xpath(menu.ELEMSCHOOLS_OVERLAYS, { timeout: 12000 }).click()
        //verify elementary school overlays
        cy.xpath(menu.ELEMSCHOOLS_OVERLAYS_CHECKBOX_ICON, { timeout: 12000 }).first().should('be.visible')
        cy.wait(2000)
    }

    //function to verify if elementary school overlays checked
    verifyCheckedElementarySchoolOverlays() {
        //check elementary school overlays checkbox
        cy.xpath(menu.ELEMSCHOOLS_OVERLAYS_CHECKBOX, { timeout: 12000 }).invoke('attr', 'aria-checked').should('eq', 'false')
        cy.xpath(menu.ELEMSCHOOLS_OVERLAYS_CHECKBOX_ICON, { timeout: 12000 }).first().click()
        cy.wait(3000)
        cy.xpath(menu.ELEMSCHOOLS_OVERLAYS_CHECKBOX, { timeout: 12000 }).invoke('attr', 'aria-checked').should('eq', 'true')
    }

    //function to verify if high school overlays selected
    verifySelectHighSchoolOverlays() {
        //select high school overlays
        cy.xpath(menu.OVERLAYS_DROPDOWN, { timeout: 12000 }).click()
        cy.xpath(menu.HIGHSCHOOLS_OVERLAYS, { timeout: 12000 }).click()
        //verify high school overlays
        cy.xpath(menu.HIGHSCHOOLS_OVERLAYS_CHECKBOX_ICON, { timeout: 12000 }).first().should('be.visible')
        cy.wait(2000)
    }

    //function to verify if high school overlays checked
    verifyCheckedHighSchoolOverlays() {
        //check high school overlays checkbox
        cy.xpath(menu.HIGHSCHOOLS_OVERLAYS_CHECKBOX, { timeout: 12000 }).invoke('attr', 'aria-checked').should('eq', 'false')
        cy.xpath(menu.HIGHSCHOOLS_OVERLAYS_CHECKBOX_ICON, { timeout: 12000 }).first().click()
        cy.wait(3000)
        cy.xpath(menu.HIGHSCHOOLS_OVERLAYS_CHECKBOX, { timeout: 12000 }).invoke('attr', 'aria-checked').should('eq', 'true')
    }

    //function to verify if middle school overlays selected
    verifySelectMiddleSchoolOverlays() {
        //select middle school overlays
        cy.xpath(menu.OVERLAYS_DROPDOWN, { timeout: 12000 }).click()
        cy.xpath(menu.MIDDLESCHOOLS_OVERLAYS, { timeout: 12000 }).click()
        //verify middle school overlays
        cy.xpath(menu.MIDSCHOOLS_OVERLAYS_CHECKBOX_ICON, { timeout: 12000 }).first().should('be.visible')
        cy.wait(2000)
    }

    //function to verify if middle school overlays checked
    verifyCheckedMiddleSchoolOverlays() {
        //check middle school overlays checkbox
        cy.xpath(menu.MIDSCHOOLS_OVERLAYS_CHECKBOX, { timeout: 12000 }).invoke('attr', 'aria-checked').should('eq', 'false')
        cy.xpath(menu.MIDSCHOOLS_OVERLAYS_CHECKBOX_ICON, { timeout: 12000 }).first().click()
        cy.wait(3000)
        cy.xpath(menu.MIDSCHOOLS_OVERLAYS_CHECKBOX, { timeout: 12000 }).invoke('attr', 'aria-checked').should('eq', 'true')
    }

    //include spatial filters
    verifyIncludeSpatialFilters() {
        cy.xpath(menu.SPATIALFILTERICON, { timeout: 12000 }).click();
        cy.xpath(menu.INCLUDESPATIALFILTER, { timeout: 12000 }).click();
    }

    //exclude spatial filters
    verifyExcludeSpatialFilters() {
        cy.xpath(menu.SPATIALFILTERICON, { timeout: 12000 }).click();
        cy.xpath(menu.EXCLUDESPATIALFILTER, { timeout: 12000 }).click();
    }

    //off spatial filters
    verifyOffSpatialFilters() {
        cy.xpath(menu.SPATIALFILTERICON, { timeout: 12000 }).click();
        cy.xpath(menu.OFFSPATIALFILTER, { timeout: 12000 }).click();
    }

}

export default new Layers();