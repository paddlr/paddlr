describe('API Games routes', function(){

  describe('GET api/games', function(){
    it('returns a list of games', function(done) {
      request.get('/api/games')
          .expect(200)
          .end(function(err, res) {
              done(err);
          });
    });

    it('cannot get a game that does not exist', function(done) {
      request.get('/api/games/icecream')
          .expect(422)
          .end(function(err, res) {
              done(err);
          });
    });
  })

describe('DELETE api/games', function(){
  it('removes a game', function(){
    request.get('/api/games')
      .expect(200)
      .then(function(games){
        var singlePlayerId = games.body[0]._id;
        console.log("this is the id: ", singlePlayerId)
        return singlePlayerId;
      })
      .catch(function(err){
        console.log(err);
      })
      .then(function(singlePlayer){
        request.delete('/api/' + singlePlayer)
          .expect(200);
          console.log(singlePlayer + "has been deleted")

      })
      .catch(function(err){
        console.log(err);
      });
  });


  it('cannot removes a game that does not exist', function(){
    request.delete('/api/games/icecreamtruck')
      .expect(401);
        })
  });
});
