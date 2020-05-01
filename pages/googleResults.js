const { I } = inject();

module.exports = {

  locators: {
    foundLink: "//a[./text()='Recenze']"
  },

  clickFoundLink() {
    I.click(this.locators.foundLink)
  },

  // insert your locators and methods here
}
