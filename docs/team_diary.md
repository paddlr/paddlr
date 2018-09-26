Team Paddlr
=========

## Project Diary:

### Week One

#### Day 1
Our group had been drawn together based on our mutual interest of developing an application based on games. Having been keen table tennis players during our time at Maker's and occassionaly having disputes about who's serve is who's or what the score was we decided to build an application which could enhance our experience positively. We could see a lot of room for added complexity beyond the fairly basic MVP, so were keen to create a full stack web app. Once we had decided on our MVP, we split up to do the inital administration such as the README, Trello etc., build the wireframe for the MVP using Adobe XD and research which database would be best to use with react.

### Day 2
Front-End thoughts: Further research was done on React, wireframe replica was built in an html file, logic for table tennis game was built in javascript.

Back-End thoughts: Having decided it would be cool to build our app using a commonly featured stack of MongoDB, Node and Express (with React for the Front-End), we quickly began to question our choice of a noSQL database.  Managing relationships is proving weird and ever so slightly unsatisfactory but we are not quitters! Despite having some concerns about scalability and the ability to handle a growing store of ping pong related stats we are pushing on, devouring Udemy video after Youtube video attempting to grasp the non-relational behaviour.

### Day 3
Front-End thoughts: We translated the html document into react, broke it down into components, and applied logic so that a single game could be played and a winner determiend.

Back-End: The morning was spent twisting our heads around the complexity of db structures and embedding documents. We had a breakthrough at midday where we simplified our design and were able to push forward and get a Users and Games api hosted by the afternoon. We had heroku hosting issues to resolve in the evening - having combined backend and frontend solutions into one repo, which had multiple paskage.json files and had to experiment to find the "correct" implementation. In the end we felt it best to have a root package.json file (as well as one in the b and f folders) which provided the relevant instruction to heroku for starting the server and loading all dependancies.

### Day 4
Back-End: It may be a tiny bit arse about face, but we have started writing our tests now and Steph is knocking them out like a crazed TDD'er. 
I am pondering on our Heroku deployment which is succesfully displaying our api but steadfastly refusing to show the beautiful designs created by our frontend team. It is slowly dawning on me that we will need two servers running if we want to host on the same domain.

### Day 5
Back-End: I carried on with last nights frustrations for literally hours. Hours and hours! Finally attaining some level of success by mid-afternoon when I finally got the React app rendering on Heroku while similataneously allowing access to our API. In the time it took me to do that tiny task, Steph and Ed had cracked the Slack API and imported all our potential players into the users DB...

### Day 6

Front-End: During the weekend, the frontend team had issues with managing states and the passing of information. After thorough research, Dani proposed the use of Redux as a solution to these woes. She successfully created a simple experimental mockup of the app that uses redux and proposed its use to the rest of team.

More work was covered over the weekend - this included the scoring logic, generating the leaderboard and switching the paddles to show the server. For the first half of Monday, tensions were really high as some members adamantly disapprove of the use of redux even after a team consensus to use the library to build the interface. This led to a fairly unproductive day for the frontend.

On the backend, however, things were working beautifully. During the weekend, Angela fixed the slack integration, API and adjusted the connection settings to work with dotenv.Stephanie didn't do much over the weekend because it was her birthday! However, on Monday, She wrote the scoring logic that figured out the winner of a match. The code also increased each player's points, games won and games lost for every player in a match. She then integrated this with the database and caused player statistics to automatically load with each game. It was a good day for the backend
