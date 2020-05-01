const { I } = inject();

module.exports = {

  locators: {
    titul: "//div/span[./text()='Robb, Alice: Proč sníme?']",
    nexPage: "(//a[./text()='2'])[2]",
  },

  findTitul() {
    I.seeInTitle('iLiteratura');
    if (I.dontSeeElement(this.locators.titul)) {
      I.click(this.locators.nexPage)
    }
    I.click(this.locators.titul);
    I.seeInTitle('Alice');
  }



  // insert your locators and methods here
}
