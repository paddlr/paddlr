
describe('API User routes', function(){

  before(function(done){
    request.post('/api/users')
       .send({
        "name": "user 1",
        "slack_id": "banana"
    })
    .expect(200)
    .end(function(err, res) {
      done(err);
    });
  });

  describe('GET api/users', function(){
    it('returns a list of users', function(done) {
      request.get('/api/users')
      .expect(200)
      .end(function(err, res) {
        done(err);
      });
    })

    it('cannot get a User that does not exist', function(done) {
      request.get('/api/user/icecream')
          .expect(422)
          .end(function(err, res) {
              done(err);
          });
    });


    it('gets a user by its id', function(){
      request.get('/api/users')
        .expect(200)
        .then(function(users){
          var singlePlayerId = users.body[0]._id;
          console.log("this is the id: ", singleUserId)
          return singleUserId;
        })
        .catch(function(err){
          console.log(err);
        })
        .then(function(singleUser){
          request.get('/api/' + singleUser)
            .expect(200);
            console.log("This user has an id of " + singleGame);
        })
        .catch(function(err){
          console.log(err);
        });
    });
  });


  describe('POST api/users', function(){
    it('saves a new user', function(done) {
      request.post('/api/users')
         .send({
          "name": "user 2",
          "slack_id": "cherry"
      })
      .expect(200)
      .end(function(err, res) {
        done(err);
      });
    });

    it('does not save an invalid user with no name', function(done) {
      request.post('/api/users')
         .send({
          "slack_id": "goan_curry"
      })
      .expect(422)
      .end(function(err, res) {
        done(err);
      });
     });


     it('does not save a user without slack_id', function(done) {
       request.post('/api/users')
          .send({
           "name": "chinatown"
       })
       .expect(422)
       .end(function(err, res) {
         done(err);
       });
    });

    it('removes a user', function(){
      request.get('/api/users')
        .expect(200)
        .then(function(users){
          var singleUserId = users.body[0]._id;
          return singleUserId;
        })
        .catch(function(err){
          console.log(err);
        })
        .then(function(singleUser){
          request.delete('/api/' + singleUser)
            .expect(200);

        })
        .catch(function(err){
        });
    });

    it('cannot removes a user that does not exist', function(){
      request.delete('/api/users/icecreamtruck')
        .expect(401);
    })
  })
});
