Feature('findBook');

Scenario('GOOGLE - iliteratura', (I, googleHomePage, googleResultsPage, iliteraturaPage) => {
    I.amOnPage('https://google.cz');
    googleHomePage.enterString('iliteratura');
    googleResultsPage.clickRecenze();
    iliteraturaPage.findTitul();
    
});

Scenario('SEZNAM - iliteratura', (I, homeSeznamPage, seznamResultsPage, iliteraturaPage) => {
    I.amOnPage('https://seznam.cz');
    homeSeznamPage.enterPage('iliteratura');
    seznamResultsPage.clickRecenze();
    iliteraturaPage.findTitul();

});

Scenario('iDnes - hover', async(I, idnesHomePage) => {
    var assert = require('assert');
    I.amOnPage('https://idnes.cz');
    idnesHomePage.brnoRegion();
    let region = await I.grabTextFrom({xpath: "(//h3/a)[1]"})
    assert.equal(region, 'Brno')
    I.seeInSource('Jihomorav')

})

Scenario('KZvalmez - hover', (I, kzvalmezPage) => {
    I.amOnPage('https://kzvalmez.cz')
    kzvalmezPage.clickMklubLink();
    I.seeInTitle('M-Klub');
})

Scenario('GOOGLE - kzvalmez', (I, googleHomePage, googleResultsPage, kzvalmezPage) => {
    I.amOnPage('https://google.cz');
    googleHomePage.enterString('kzvalmez')
    googleResultsPage.clickKzvalmez();
    kzvalmezPage.clickMklubLink();
    I.seeInTitle('Klub')
})

Scenario('SEZNAM - kzvalmez', (I, homeSeznamPage, seznamResultsPage, kzvalmezPage) => {
    I.amOnPage('https://seznam.cz');
    homeSeznamPage.enterPage('kzvalmez');
    seznamResultsPage.clickKz();
    kzvalmezPage.clickMklubLink();
    I.seeInTitle('Klub');
})