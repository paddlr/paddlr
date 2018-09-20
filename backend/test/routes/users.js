
describe('API User routes', function(){

  before(function(done){
    request.post('/api/users')
       .send({
        "username": "user 1",
        "passcode": "banana"
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
          .expect(404)
          .end(function(err, res) {
              done(err);
          });
    });
  });


  describe('POST api/users', function(){
    it('saves a new user', function(done) {
      request.post('/api/users')
         .send({
          "username": "user 1",
          "passcode": "banana"
      })
      .expect(200)
      .end(function(err, res) {
        done(err);
      });
    });

    it('does not save an invalid user with no name', function(done) {
      request.post('/api/users')
         .send({
          "passcode": "banana"
      })
      .expect(422)
      .end(function(err, res) {
        done(err);
      });
     });


     it('does not save an invalid user with passcode', function(done) {
       request.post('/api/users')
          .send({
           "username": "chinatown"
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
