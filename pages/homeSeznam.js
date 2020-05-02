const { I } = inject();

module.exports = {

  // insert your locators and methods here
  locators: {
    searchField: "(//input[@name='q'])[2]",
    foundOption: "//button[@class='search-form__button button button--submit button--with-input']",
  },

  enterPage(string) {
    I.seeInTitle('Seznam');
    I.waitForElement(this.locators.searchField);
    I.fillField(this.locators.searchField, string);
    I.click(this.locators.foundOption);
  },
}
