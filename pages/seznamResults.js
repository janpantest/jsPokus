const { I } = inject();

module.exports = {

  // insert your locators and methods here
  locators: {
    recenze: "//span[./text()='Recenze']",
    kzvalmez: "//span[./text()='Domů | Kulturní zařízení Valašského Meziříčí']",
  },

  clickRecenze() {
    I.waitForElement(this.locators.recenze);
    I.click(this.locators.recenze);
  },

  clickKz() {
    I.waitForElement(this.locators.kzvalmez);
    I.click(this.locators.kzvalmez);
  }
}
