describe('API Games routes', function(){

  before(function(done){
    request.post('/api/games')
       .send({
        "game_type": "friendly",
        "players": [
            {
                "player_id": "12",
                "player_score": 9
            },
            {
                "player_id": "1",
                "player_score": 2
            }
        ]
    })
       .expect(200)
       .end(function(err, res) {
           done(err);
       });
  });


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


  describe('POST api/games', function(){
    it('saves a new game', function(done) {
      request.post('/api/games')
         .send({
          "game_type": "friendly",
          "players": [
              {
                "player_id": "12",
                "player_score": 21
              },
              {
                "player_id": "2",
                "player_score": 2
              }
          ]
      })
         .expect(200)
         .end(function(err, res) {
             done(err);
         });
     });

     it('does not save an invalid game', function(done) {
       request.post('/api/games')
          .send({
           "game_type": "friendly",
           "players": [
               {
                "player_id": "3",
                "player_score": "banana milk"
               },
               {
                "player_id": "2",
                "player_score": 20
               }
           ]
       })
       .expect(422)
       .end(function(err, res) {
         done(err);
          });
      });
  });


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
