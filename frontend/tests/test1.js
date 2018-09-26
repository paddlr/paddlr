
module.exports = {
    'Demo test Google' : function (browser) {
      browser
        .url('localhost:3000')
        .waitForElementVisible('body', 1000)
        
        .end();
    }
  };