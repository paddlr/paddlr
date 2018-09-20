# paddlr <img src="https://res.cloudinary.com/dani-devs-and-designs/image/upload/v1537203697/Screen_Shot_2018-09-17_at_14.14.03_e8e0ew.png" alt="paddlr logo" width="180"> 


## Project Overview:
As this was our final project at Maker's Academy, we decided to pay tribute to its table-tennis culture by creating an application dedicated to the art. The application will link to user's slack accounts, where games can be arranged, players can be ranked and tournaments can be generated.

## Day 1: Wireframe using Adobe XD
![](https://res.cloudinary.com/dani-devs-and-designs/image/upload/v1537202882/paddlr-mockup_quiz5s.png)

## Contributors:
* [Angela Wolff](https://github.com/Whatapalaver)
* [Danielle Booysen](https://github.com/dani-boo)
* [Edward Thomas](https://github.com/edthomas93)
* [Stephanie Fashagba](https://github.com/stephfash)
* [Tim Blanchard](https://github.com/tblanchard01)

## Demo
(To be added)

## Quickstart
#### How to install the code:
1. Clone this project ```git clone https://github.com/paddlr/paddlr.git```
2. Change into the directory ```cd paddlr```
3. Use the correct node version (update later)

## Work Flow - Tickets
[Trello](https://trello.com/b/yJJBQTt1/team-paddlr)

## Project MockUp
(To be added)

## Development Process
#### MVP
* Build a single page app in React where user's can have their points counted for a single game of table-tennis.
* Points for each plater are counted by clicking a score button underneath the player's profile picture until a winner has been determined.
* Have an API that's fully-documented and validated that has game and user roots

(To be added)

### Testing and Code Quality Backend
- Eslint. Run `npm lint` to run through the model and view components.  

## Objectives
In a meeting before we had settled on the details we discussed what we wanted to get out of the project:
* Build a web app that could leave a legacy at Maker's
* Consolidate our learning from the previous 10 weeks
* Follow a TDD approach
* Write clean, readable code and ensure knowledge sharing
* Agile ceremonies: 9.30am stand-ups, check-ins and retros
* Pair programming and 2 day sprints
* XP values, especially communication, simplicity and respect

##  Completed User Stories:

## Future User Stories:
```
As a referee,
So I can easily keep track of the score,
I would like to click on the player that won the point to award it
```
```
As a referee,
So I know who's serve is next,
I would like to be told which player's serve is next
```
```
As a referee,
So I know who has won the game,
I would like to be notified once a winner has been determined
```
```
As a referee,
In case I make a mistake,
I would like to undo my previous move
```
```
As a paddlr user,
So I know my ranking in my group,
I would like to see where I feature in my group's league table
```
```
As a paddlr user,
So my competitors will be notified,
I would like to organise games via Slack
```
```
As a paddlr user,
So I can notify competitors that I want to play,
I would like to organise games via Slack
```
```
As a paddlr user,
So I can find tournaments to play in,
I would like to select or create tournaments via Slack
```
```
As a paddlr user,
So I don't have to organise games for tournaments,
I would like fixtures to be automatically generated
```
```
As a paddlr user,
So I can easily find players to play,
I can mark myself as available for a game
```
```
As a paddlr user,
So I don't have to always bring my 'A' game,
I would like to choose if a match is friendly or competitve
```

## Project Diary:

### Week One

#### Day 1
Our group had been drawn together based on our mutual interest of developing an application based on games. Having been keen table tennis players during our time at Maker's and occassionaly having disputes about who's serve is who's or what the score was we decided to build an application which could enhance our experience positively. We could see a lot of room for added complexity beyond the fairly basic MVP, so were keen to create a full stack web app. Once we had decided on our MVP, we split up to do the inital administration such as the README, Trello etc., build the wireframe for the MVP using Adobe XD and research which database would be best to use with react.

### Day 2
Back-End thoughts: Having decided it would be cool to build our app using a commonly featured stack of MongoDB, Node and Express (with React for the Front-End), we quickly began to question our choice of a noSQL database.  Managing relationships is proving weird and ever so slightly unsatisfactory but we are not quitters! Despite having some concerns about scalability and the ability to handle a growing store of ping pong related stats we are pushing on, devouring Udemy video after Youtube video attempting to grasp the non-relational behaviour.

Front-End thoughts: Further research was done on React, wireframe replica was built in an html file, logic for table tennis game was built in javascript.

### Day 3
Front-End thoughts: We translated the html document into react, broke it down into components, and applied logic so that a single game could be played and a winner determiend.

Back-end: The morning was spent twisting our heads around the complexity of db structures and embedding documents. We had a breakthrough at midday where we simplified our design and were able to push forward and get a Users and Games api hosted by the afternoon. We had heroku hosting issues to resolve in the evening - having combined backend and frontend solutions into one repo, which had multiple paskage.json files and had to experiment to find the "correct" implementation. In the end we felt it best to have a root package.json file (as well as one in the b and f folders) which provided the relevant instruction to heroku for starting the server and loading all dependancies.
