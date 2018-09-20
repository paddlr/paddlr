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
