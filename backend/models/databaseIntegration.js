const Users = require('../models/users');
function Database(){

}

Database.prototype.integration = function(slack_data){
  var jsonLength = Object.keys(slack_data).length;
  console.log(Object.keys(slack_data));
  for (var i = 0; i <= jsonLength; i++) {
    Users.findOne({slack_id: slack_data.members[i].id})
      .then((user) => {
        if (user) {
          console.log(slack_data.members[i].id, ' already exists');
        } else {
            Users.create({
              name: slack_data.members[i].real_name,
              slack_id: slack_data.members[i].id,
              slack_image: slack_data.members[i].profile.image_192,
              slack_image_48: slack_data.members[i].profile.image_48,
              slack_image_512: slack_data.members[i].profile.image_512
            })
            console.log(slack_data.members[i].real_name, " created");
        }
      })
      .catch((err) => {
        console.log(err)
      });
    }
  }

module.exports = Database;
