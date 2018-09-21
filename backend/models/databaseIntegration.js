const Users = require('../models/users');
function Database(){
}

Database.prototype.integration = function(data){
  var jsonLength = Object.keys(data).length;
  var i;

  for (i = 0; i <= jsonLength; i++) {
    if (Users.find({slack_id: data.members[i].id}) != 'undefined'){
      console.log("This user already exists");
    }
    else{
      Users.create({
        name: data.members[i].real_name,
        slack_id: data.members[i].id,
        slack_image: data.members[i].profile.image_192
      })
      console.log("All people created");
    }
  }
}


module.exports = Database;
