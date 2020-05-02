const { I } = inject();

module.exports = {

  locators: {
    clickRecenze: "//a[./text()='Recenze']",
    clickKzvalmez: "//h3[./text()='kz valmez']",
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
