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

Example JSON output of an API Call to find 'all users' but containing one user
```
[
  {
      "games_won": 12,
      "games_lost": 1,
      "total_score": 11,
      "_id": "5ba78209e751870015c3df94",
      "name": "whatapalaver",
      "slack_id": "UCW2QL1CJ",
      "slack_image": "https://secure.gravatar.com/avatar/b625f9e5e6ed89014a5b8575277850c3.jpg?s=192&d=https%3A%2F%2Fa.slack-edge.com%2F7fa9%2Fimg%2Favatars%2Fava_0000-192.png",
      "slack_image_48": "https://secure.gravatar.com/avatar/b625f9e5e6ed89014a5b8575277850c3.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2F66f9%2Fimg%2Favatars%2Fava_0000-48.png",
      "slack_image_512": "https://secure.gravatar.com/avatar/b625f9e5e6ed89014a5b8575277850c3.jpg?s=512&d=https%3A%2F%2Fa.slack-edge.com%2F7fa9%2Fimg%2Favatars%2Fava_0000-512.png",
      "__v": 0
      },
]
```
## API FIELDS

*User*
All Get or Delete actions as the User create is handled by the Slack integration

| Field name | Description | Data type | API type |
|------------|-------------|-----------|---------|
| user._id | The Unique identifier for a User | String | Get |
| user.slack_id | The id from the Slack API  | String | Get |
| user.name | The username of a (Slack) user  | String | Get |
| user.slack_image_48 | Small gravatar link from Slack | String | Get |
| user.slack_image_192 | Small gravatar link from Slack | String | Get |
| user.slack_image_512 | Small gravatar link from Slack | String | Get |
| user.games_won | Should be updated in backend | Number | Get |
| user.games_lost | Should be updated in backend | Number | Get |
| user.total_score | Should be updated in backend | Number | Get |

*Games*

| Field name | Description | Data type | API type |
|------------|-------------|-----------|---------|
| game._id | Unique identifier for one game | Id | Get |
| game.game_created_at | The time game was played  | Date  | Get |
| game.game_type | Type of game (Competitive, friendly, etc...) | String | Get + Post |
| game.players | Object of Players | Object| Get |
| --> game.players.player_id | This should be the User._id of player 1 | String  | Get + Post|
| --> game.players.player_score | This should be the Score of player 1 | Number  | Get + Post|
| --> game.players.player_id | This should be the User._id of player 2 | String  | Get + Post|
| --> game.players.player_score | This should be the Score of player 2 | Number  | Get + Post|



Example API calls:
======

#### GET `/users`
Returns a list of all registered users.

```
curl "https://paddlr.herokuapp.com/api/users"
```

On success, the above command returns JSON structured like this:

```json
[
  {
      "games_won": 12,
      "games_lost": 1,
      "total_score": 11,
      "_id": "5ba78209e751870015c3df94",
      "name": "whatapalaver",
      "slack_id": "UCW2QL1CJ",
      "slack_image": "https://secure.gravatar.com/avatar/b625f9e5e6ed89014a5b8575277850c3.jpg?s=192&d=https%3A%2F%2Fa.slack-edge.com%2F7fa9%2Fimg%2Favatars%2Fava_0000-192.png",
      "slack_image_48": "https://secure.gravatar.com/avatar/b625f9e5e6ed89014a5b8575277850c3.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2F66f9%2Fimg%2Favatars%2Fava_0000-48.png",
      "slack_image_512": "https://secure.gravatar.com/avatar/b625f9e5e6ed89014a5b8575277850c3.jpg?s=512&d=https%3A%2F%2Fa.slack-edge.com%2F7fa9%2Fimg%2Favatars%2Fava_0000-512.png",
      "__v": 0
      },
]
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
  -d '{
    "game_type": "leaderboard",
    "players": [
        {
	        "player_id": "5ba237ce0a8e09198d51f1d4",
	        "player_score": 12
        },
        {
            "player_id": "5ba237ce0a8e09198d51f1d3",
            "player_score": 21
        }
    ],
}'
```

On success, the above command returns JSON structured like this:

```json
[
    {
        "game_type": "friendly",
        "game_created_at": "2018-09-23T11:31:37.395Z",
        "_id": "5ba7799ce751870015c3df91",
        "players": [
            {
                "_id": "5ba7799ce751870015c3df93",
                "player_id": "5ba237ce0a8e09198d51f1d4",
                "player_score": 12
            },
            {
                "_id": "5ba7799ce751870015c3df92",
                "player_id": "5ba237ce0a8e09198d51f1d3",
                "player_score": 21
            }
        ],
        "__v": 0
    }
 ]
```

#### GET `/games`
Returns a list of all games.



#### DELETE `/games/:_id`
Deletes the specified game.
