describe('GET api/games', function(){
  it('returns a list of games', function(done) {
    request.get('/api/slack')
        .expect(200)
        .end(function(err, res) {
            done(err);
        });
  });
});
