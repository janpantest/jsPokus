const { I } = inject();

module.exports = {

  locators: {
    searchField: "//input[@name='q']",
    visibleOption: "(//div[@class='sbtc'])[1]",
    submitButton: "(//div[@class='sbtc'])[1]",
  },

  enterString(string) {
    I.seeElement(this.locators.searchField);
    I.fillField(this.locators.searchField, string);
    I.click(this.locators.visibleOption);

  },
}
