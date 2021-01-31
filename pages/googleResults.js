const { I } = inject();

module.exports = {

  locators: {
    clickRecenze: "//a[./text()='Recenze']",
    // clickKzvalmez: "//h3[./text()='Kulturní zařízení Valašského Meziříčí']",
    clickKzvalmez: "//h3/span[contains(text(), 'Kulturní zařízení Valašského Meziříčí') or contains(text(),'kz valmez')]",
  },

  clickRecenze() {
    I.seeInTitle('Hledat Googlem');
    I.click(this.locators.clickRecenze);
  },

  clickKzvalmez() {
    I.seeInTitle('Hledat Googlem');
    I.click(this.locators.clickKzvalmez);
  }

}
