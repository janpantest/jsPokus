Feature('findBook');

Scenario('GOOGLE - iliteratura', (I, googleHomePage, googleResultsPage, iliteraturaPage) => {
    I.amOnPage('https://google.cz');
    googleHomePage.enterString('iliteratura');
    googleResultsPage.clickFoundLink();
    iliteraturaPage.findTitul();
    
});

Scenario('SEZNAM - iliteratura', (I, homeSeznamPage, seznamResultsPage, iliteraturaPage) => {
    homeSeznamPage.enterPage('iliteratura');
    seznamResultsPage.clickRecenze();
    iliteraturaPage.findTitul();

    // pause()
});
