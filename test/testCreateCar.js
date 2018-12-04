import assert from "assert";
import Browser from "zombie";


// We're going to make requests to http://example.com/signup
// Which will be routed to our test server localhost:3000
Browser.localhost('localhost', 5656);

describe('User visits api car page', function() {

    const browser = new Browser();

    before(function() {
        return browser.visit('/api/car');
    });

    it('should be successful', function() {
        browser.assert.success();
    });


});