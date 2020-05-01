const { I } = inject();

module.exports = {

  locators: {
    titul: "//div/span[./text()='Arikawa, Hiro: Kočka na cestách']"
  },

  findTitul() {
    I.seeInTitle('iLiteratura');
    I.click(this.locators.titul);
    I.seeInTitle('Hiro');
  }



  // insert your locators and methods here
}
