module.exports = {
    'Demo test' : function (browser) {
      browser
        .url(browser.launchUrl)
        .click("button")
        .pause(10000)
        .end();
    }
  };