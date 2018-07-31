'use strict';

const {defineSupportCode} = require('cucumber');

const CareerPage = require('../../pageObjects/careerPage');
const careerPage = new CareerPage();

defineSupportCode(({Given, When, Then, setDefaultTimeout}) => {
    setDefaultTimeout(GLOBAL_TIMEOUT);

    Given(/the career page is opened/, () => {
        return careerPage.load();
    });

    When(/(.+), (.+) is selected in the location filter box/, (city, country) => {
        return careerPage.selectCityInCountry(country, city);
    });

    Then(/the logo should be visible/, () => {
        return expect(careerPage.logo.isDisplayed()).to.eventually.be.true;
    });
});
