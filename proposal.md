# PROJECT 4 PROPOSALS

**Intro**
Unfortunately, there is not much to show in this presentation. I was not able to secure any concrete ideas this time. The window was too short.
I will only list some absurd concepts I have thought off.

#Proposal 1) ArtFingah
Using Canvas, the user would be able to create a painting with only their fingers and the trackpad. The user will be able to
select various colors to paint a picture, then by registering/or logging in a username and a password, you can save the artwork into a public gallery collection. By logging in, you can also view a private collection of all work you saved (which you can also delete).

Includes the following views:
- NavBar with links that switches the views
 - Main Page
  - Drawing Canvas component
  - Color select Component
  - Sign In/Login (?)
 - About Page
 - Gallery Page
 - User Page (after Auth)
  - Private Gallery with delete functionality
- Footer
 - Links to social media

## Technologies/Techniques Used
- React Rails
- Canvas/equivalent component that allows pixel based DOM manipulation
- Component that will allow selection of colors
- Authorization & Authentication of a user
- Probably some local storage to save the artwork
- database to save user info

## MVP - required functionality
- User can draw on the Canvas
- User can change colors
- User can register a username and password
- User can be authenticate (?)

#Proposal 2) GameEmulator
~~Create an App that is pretty much a glorified instruction manual for a DOM based game. The main view is a basic little game you can play, and you can save your highscore, which can be saved in a highscore page. You can also view an about page and an instruction page that tells you how to play

Includes the following views:
- NavBar with links that switches the views
 - Main Page
  - Game/GameEmulator component
  - Sign In/Login (?)
 - About Page
 - Manual Page
 - User component (after Auth)
- Footer
 - Links to social media

## Technologies/Techniques Used
- React
- a component that allows you to play a GameEmulator/Game
- Authentication of players to save high highscore
- database that saves user info
- Small user profile component that shows your high score
- views that host instruction guide, and high score

# MVP - required functionality
- Game works
- You can place game as Component
- You can switch views
- You can save highscores~~


#Proposal 3) Super Post Fighter
Create a social App for the Fighting Game Community. Have a collection of tiny hub communities about different games, where users can comment, rate and post events about the game.

Includes the following views:
- NavBar
 - Game selection function
 - link to user page
 - Welcome page
  - Sign In/Login (?)
 - Game Community Page
  - Ratings
  - Comments
  - Events
 - Event Page
  - Comments
 - User Page (after Auth)
- Footer
 - Links to social media

## Technologies/Techniques Used
- React Rails or Rails
- Authentication and Authorization
- Routes to get and post Comments & Events
- component that allows to rate a game
- component that allows for selecting the game

# MVP - required functionality
- You can choose a game hub
- You can sign in or register
- You can create Comments
- you can get all comments
