const { I } = inject();

module.exports = {

  // insert your locators and methods here
  locators: {
    menu: "//a[@score-id='kraje']",
    linkBrno: "(//a[@href='https://www.idnes.cz/brno'])[1]",
  },

  brnoRegion() {
    I.seeInTitle('iDNES.cz')
    I.moveCursorTo(this.locators.menu);
    I.waitForClickable(this.locators.linkBrno);
    I.click(this.locators.linkBrno);
  }
}
