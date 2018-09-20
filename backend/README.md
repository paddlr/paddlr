PADDLR Back-End API Documentation
======

## API docs

Each of these API endpoints are illustrated by a curl command that you can paste into your terminal to play around with.

If you ever need more information, pass the `-v` flag to curl in addition to the stated arguments. This will put it into verbose mode, and will show you the HTTP response code and other useful debugging information.

### Users

#### POST `/users`

Creates a new user.

```bash
curl "https://paddlr.herokuapp.com/api/users" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"username": "whatapalaver", "passcode": "mypassword"}'
```

On success, the above command returns JSON structured like this:

```json
{
  user_created_at: "2018-09-19T13:41:05.923Z",
  _id: "5ba252c1e09ceedc107ca761",
  username: "whatapalaver",
  passcode: "123456",
  __v: 0
}
```

#### GET `/users`
Returns a list of all registered users.

```
curl "https://paddlr.herokuapp.com/api/users"
```

On success, the above command returns JSON structured like this:

```json
{
  user_created_at: "2018-09-19T13:41:05.923Z",
  _id: "5ba252c1e09ceedc107ca761",
  username: "whatapalaver",
  passcode: "123456",
  __v: 0
}
```

#### DELETE `/users/:_id`
Deletes the specified user.

```bash
curl "ttps://paddlr.herokuapp.com/api/users/:_id" \
  -X DELETE \
```

The above command returns a `204: No Content` response on success.

### Games

#### POST `/games`

Creates a new game with score and players.

```bash
curl "https://paddlr.herokuapp.com/api/games" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"game_type": (optional), "players": [
    {"player_id": "5ba237ce0a8e09198d51f1d4", "player_score": 12},
    {"player_id": "5ba237ce0a8e09198d51f1d3", "player_score": 21}
  ]}'
```

On success, the above command returns JSON structured like this:

```json
{
    "game_type": "friendly",
    "game_created_at": "2018-09-19T13:41:05.932Z",
    "_id": "5ba251f5e09ceedc107ca75c",
    "players": [
        {
            "_id": "5ba251f5e09ceedc107ca75e",
            "player_id": "5ba237ce0a8e09198d51f1d4",
            "player_score": 12
        },
        {
            "_id": "5ba251f5e09ceedc107ca75d",
            "player_id": "5ba237ce0a8e09198d51f1d3",
            "player_score": 21
        }
    ],
    "__v": 0
}
```

#### GET `/games`
Returns a list of all games.



#### DELETE `/games/:_id`
Deletes the specified game.


