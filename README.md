## 1: Title:

>Belay-On

http://belayon.surge.sh/

<br>

## MVP

- _I plan on creating a Full-Stack application using Ruby (on Rails) for my server side language and React for my client side. Belay-on will encompass both my passions of rock climbing & software development. First allowing the user to Sign-In or Register and then allowing the user to record all of the respective climbs they have done(sorted by state). They will have the option of performing CRUD on their reviews as well and scrolling through the reviews of other users._ 

<br>

### Goals
- _Utilize Ruby & Ruby on Rails for Server side rendering & React for client._
- _Authorization to allow the user to Login._
- _Allow the User to track and record all of their accents._ 
- _CRUD functionality on a Users own reviews of a specific Climb._  
- _Allow the user to add more than one picture of their climb._

<br>

### Libraries and Dependencies

> 

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Use of Virtual Dom to render data._ |
|   React Router   | _Connect and keep UI in sync with URL._ |
|   Axios            | _Help us make requests to external resources_ |
|     Rails      | _Server-side framework using MVC ._ |
|   Rails Bundler  | _Allows us to install all required dependencies required of Ruby._ |
|      JWT       | _Secure method of transmitting information between parties as JSON objects._ |
|  bcrypt  | _Allows for password hashing to keep passwords secure._ |
|   CORS              | _Allows browsers access to resources from a server of a different origin._ |


<br>

### Client (Front End)

#### Wireframes

https://xd.adobe.com/view/1fc940eb-3fa7-4318-bdc0-fe425720f0bf-4a9a/ 


#### Component Tree

https://whimsical.com/TfewxkZvmBvUJt3VNuxQCu

#### Component Hierarchy


``` structure

src
|__ assets/
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
      |__ Extended Header.jsx
      |__ Extended Footer.jsx
      |__ Main.jsx
      |__ Main.css
      |__ Home.jsx
      |__ Login.jsx
      |__ States.jsx
      |__ Climbs.jsx
      |__ Reviews.jsx
      |__ Photos.jsx
|__ services/
      |__ api-helper.jsx
      |__ auth.js
      |__ images.js
      |__ reviews.js
|__ App.js/
|__ App.css/
|__ index.js/
|__ index.css/

```

#### Component Breakdown



|  Component   |    Type    | State | Props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | class |   y   |   n   |   contain link to sign-in                   |
|     Footer   |   functional    |   n   |   n   |   provide links to Github and LinkedIn |                        |
|   Main  |    class   |   y   |   y   |   Will contain the main API call and pass props down |
|   Home  | functional |   n   |   y   |   Main landing page of the Website              |
|   Login  |    functional   |   n   |   p   |  Will render the form for user to Login/Sign-up        |
|   States    | functional |   n   |   y   |   shows each state which the user can click on                   |
|    Climbs    | functional |   n   |   y   |   shows each climb as associated to that state.                                 |
|   Reviews    | functional |   n   |   y   |   render each review from a user associated to that climb                |
|    Photos    | state |   y   |   n   | will allow the user to add multiple photos       |

#### Time Estimates



| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Psuedocode| M | 2hrs|  |  
| Create Parent component| H | 2hrs  | |
| Create Child components | H | 4.5hrs|  |  
| Pull Data from API | H | 2hrs|  | 
| CSS - Basic | M | 3hrs|  | 
| FlexBox| H | 4hrs|  |  
| CSS - Advanced - Tailwind | H | 3 hrs |  |   
| Rail MVC setup | H | 5.5hrs| |  
| Proper Routing via Rails| H | 3.5hrs|  | 
| Authentication - Rails | H | 3hrs|  | 
| Authentication - React| H | 3hrs|  |  
| --- | --- |  --- | --- | --- |
| Total |  |35.5|  |  



<br>

<br>

### Server (Back End)

#### ERD Model

https://www.draw.io/#G1LNQcKzPDWgZxlEnPlLkEK0RZG7XVZir5


<br>

***

## Post-MVP

- _Password confirmation at Sign-up_
- _Allow the user to delete their account_
- _Dropdown menu for user to choose their state_
- _Show data from website without signing up but cannot modify without creating username/password_

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
