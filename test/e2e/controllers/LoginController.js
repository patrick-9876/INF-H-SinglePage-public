escribe('E2E: Test the login page and login function.', function () {

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

        //Should get the h1 Change passcode
        var h1 = element(by.tagName('h1'));
        var h1Text = h1.getText();
        expect(h1Text).toBe("Change passcode");
    });
});