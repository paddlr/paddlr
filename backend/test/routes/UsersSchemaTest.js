var expect = require('chai').expect;
var Users = require('../../models/users.js');

describe('meme', function() {
  var user = new Users();
    it('should be invalid if name is empty', function(done) {
        user.validate(function(err) {
            expect(err.errors.name).to.exist;
            done();
        });
    });

    it('should be invalid if slack_id is empty', function(done) {
        user.validate(function(err) {
            expect(err.errors.slack_id).to.exist;
            done();
        });
    });
});
