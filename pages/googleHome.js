const { I } = inject();

module.exports = {

  locators: {
    searchField: "//input[@name='q']",
    visibleOption: "(//div[@class='sbl1'])[1]",
    submitButton: "(//div[@class='sbl1'])[1]",
  },

  enterString(string) {
    I.seeInTitle('Google');
    I.seeElement(this.locators.searchField);
    I.fillField(this.locators.searchField, string);
    I.click(this.locators.visibleOption);

  },
}
