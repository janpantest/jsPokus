const { I } = inject();

module.exports = {

  // insert your locators and methods here
  locators: {
    recenze: "//span[./text()='Recenze']"
  },

  clickRecenze() {
    I.waitForElement(this.locators.recenze);
    I.click(this.locators.recenze);
  },
}
