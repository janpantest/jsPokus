const { I } = inject();

module.exports = {

  locators: {
    foundLink: "//a[./text()='Recenze']"
  },

  clickFoundLink() {
    I.seeInTitle('Hledat Googlem')
    I.click(this.locators.foundLink)
  },

}
