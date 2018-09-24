const fetchUsers = () =>
  fetch("https://paddlr-test.herokuapp.com/api/users").then(users =>
    users.json()
  );

fetchUsers().then(users => console.log(JSON.stringify(users, undefined, 2)));
