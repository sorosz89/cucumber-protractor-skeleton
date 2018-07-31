'use strict';

class CareerPage {
    constructor() {
        this.logo = element(by.css('.header__logo'));
        this.searchForm = element(by.css('.job-search-form-ui'));
        
        /*        
        Examples:
        
        this.searchButton = this.searchForm.element(by.css('.career-apply-box-desktop button[type="Submit"].job-search-button'));
        this.getCountryOfLocation = country => this.locationFilterBox.element(by.cssContainingText('.option > strong', country));
        this.getCityOfLocation = city => this.locationFilterBox.element(by.cssContainingText('.option .option', city));
       
        this.getResultByPosition = name => this.searchResultItems.filter(item => {
            return this.nameOfPosition(item).getText().then(position => position.trim() === name);
        }).first();

        this.jobDescription = element(by.css('.recruiting-details-description-header'));
        
        **/
    }

    load() {
        browser.get('https://www.epam.com/careers');
        return browser.wait(() => this.logo.isDisplayed(), GLOBAL_TIMEOUT);
    }

}

module.exports = CareerPage;
