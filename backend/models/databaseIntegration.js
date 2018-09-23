const Users = require('../models/users');
function Database(){
}

Database.prototype.integration = function(slack_data){
  var jsonLength = Object.keys(slack_data).length;
  var i;

  for (i = 0; i <= jsonLength; i++) {
    if (Users.find({slack_id: slack_data.members[i].id}) != 'undefined'){
      console.log(slack_data.members[i].id);
    }
    else{
      Users.create({
        name: slack_data.members[i].real_name,
        slack_id: slack_data.members[i].id,
        slack_image: slack_data.members[i].profile.image_192,
        slack_image_48: slack_data.members[i].profile.image_48,
        slack_image_512: slack_data.members[i].profile.image_512
      })
      console.log("All people created");
    }
  }
}

module.exports = Database;
