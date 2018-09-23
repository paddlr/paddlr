const Users = require('../models/users');
const _ = require('lodash');

function Database(){

}

Database.prototype.integration = async (slack_data) => {
  let newUsers = [];

  for (let i = 0; i < slack_data.members.length; i++) {
      const user = await Users.findOne({slack_id: slack_data.members[i].id});
      if (typeof user === 'undefined') {
          newUsers.push({
              name: slack_data.members[i].real_name,
              slack_id: slack_data.members[i].id,
              slack_image: slack_data.members[i].profile.image_192,
              slack_image_48: slack_data.members[i].profile.image_48,
              slack_image_512: slack_data.members[i].profile.image_512
          });
      };
  }

  const newSlackUsers = await Users.insertMany(newUsers);
  console.log('New users created ', newSlackUsers);

}


  module.exports = Database;
