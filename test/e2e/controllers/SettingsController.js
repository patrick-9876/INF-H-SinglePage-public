escribe('E2E: Test the settings page and login function.', function () {

    beforeEach(function () {
        browser.get('http://localhost:8080/#/login');
    })

    it("Should find the label with id #passcode", function () {
        // login
        element(by.id('InputPassKey')).sendKeys('1234');
        element(by.id('btnLogin')).click();
        browser.sleep(1000);

        // Go to settings page
        browser.get('http://localhost:8080/#/settings');
        browser.sleep(1000);

        //Set the new passcode
        element(by.id('inputPassword')).sendKeys('5678');
        element(by.id('btnSavePassKey')).click();
        browser.sleep(1000);


        //Check the login with new passcode
        browser.get('http://localhost:8080/#/login');
        browser.sleep(1000);

        // login with new passcode
        element(by.id('InputPassKey')).sendKeys('5678');
        element(by.id('btnLogin')).click();
        browser.sleep(1000);

        // Go to settings page
        browser.get('http://localhost:8080/#/settings');
        browser.sleep(1000);

        //Should get the h1 Change passcode
        var h1 = element(by.tagName('h1'));
        var h1Text = h1.getText();
        expect(h1Text).toBe("Change passcode");
    });
});