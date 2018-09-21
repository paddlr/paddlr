PADDLR Back-End API Documentation
======

## API Documentation

## Overview

This section should contain an overview of the data provided and the API purpose.

## Getting Started

The current version of the API lives at https://paddlr.herokuapp.com/api/

| HTTP METHOD | Endpoint | What it does |
|-------------|----------|--------------|
| GET | /api/users | Returns an array of all Users based on query parameters |
| POST | /api/users | Returns an array of POSTED Users based on query parameters. User is then added to the current list of Users |
| GET | /api/users/{id}| Returns a USER based on selected id |
| DELETE | /api/users/{id} | Returns an array of deleted user based on unique identifier. User is then deleted from the list of users |
| GET | /api/games | Returns an array of all Games based on query parameters |
| POST | /api/games | Returns an array of POSTED game. Game is then added to the current list of games|
| GET | /api/games/{id}| Returns a GAME based on selected id |
| DELETE | /api/games/{id} | Returns an array of the deleted game based on unique identifier. Game is then deleted from the list of games |

## API calls

An example of an API Call to find 'all users' but containing one user
```
{
  "user_created_at": "2018-09-20T08:17:10.118Z",
  "_id": "5ba0e5e5ee1befec3afc7cce",
  "available": false,
  "name": "user 1",
  "rank": "10",
  "__v": 0
},

```
## API FIELDS

| Field name | Description | Data type |
|------------|-------------|-----------|
| game._id | Unique identifier for one game | Id |
| game_type | Type of game (Competitive, friendly, etc...) | String |
|  game_created_at | The time game was played  | Date  |
|  player_id | The Unique identifier for a Player| Id  |
|  player_score | The player's score | Number |
|  username | The username of a (Slack) user  | String |
| passcode | An individual user's passcode for playing a match| String |
|  user_created_at | When the user account was created | Date |
|  user._id | The Unique identifier for a User | Date |


Example API calls:
======

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
