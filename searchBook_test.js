Feature('findBook');

Scenario('test something', (I, googleHomePage, googleResultsPage, iliteraturaPage) => {
    I.amOnPage('https://google.cz');
    googleHomePage.enterString('iliteratura');
    googleResultsPage.clickFoundLink();
    iliteraturaPage.findTitul();
    pause()
});
