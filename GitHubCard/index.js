/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

import axios from 'axios'
const entryPoint = document.querySelector('.cards')
const grabUrl = 'https://api.github.com/users/sleepylazarus'

axios.get(grabUrl)
  .then(data =>{
    console.log(data.data)
    const generatedCard = cardCreator(data.data)
    entryPoint.appendChild(generatedCard)
  })

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['GoldenPedro', 'kubes2020', 'joshwhitwell', 'robertmasters'];

followersArray.forEach(userName =>{
  let userToGrab = userName
  let tempUrl = 'https://api.github.com/users/'
  axios.get(tempUrl + userToGrab)
  .then(data => {
    console.log(data.data)
    const generatedCardFollowers = cardCreator(data.data)
    entryPoint.appendChild(generatedCardFollowers)
  })

})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function cardCreator(object){

  //Creating elements needed for the card.
  const card = document.createElement('div')
  const profilePicture = document.createElement('img')
  const cardInfo = document.createElement('div')
  const usersName = document.createElement('h3')
  const userNameP = document.createElement('p')
  const userLocation = document.createElement('p')
  const profilePara = document.createElement('p')
  const profileLink = document.createElement('a')
  const userFollowers = document.createElement('p')
  const userFollowing = document.createElement('p')
  const userBio = document.createElement('p')

  //Structuring the elements for the card

  card.append(profilePicture)
  card.append(cardInfo)
  cardInfo.append(usersName)
  cardInfo.append(userNameP)
  cardInfo.append(userLocation)
  cardInfo.append(profilePara)
  cardInfo.append(profileLink)
  cardInfo.append(userFollowers)
  cardInfo.append(userFollowing)
  cardInfo.append(userBio)

  //adding classes to cards
  card.classList.add('card')
  cardInfo.classList.add('card-info')
  usersName.classList.add('name')
  userNameP.classList.add('username')

  //Setting the content of the elements
  profilePicture.src = object.avatar_url
  usersName.textContent = object.name
  userNameP.textContent = object.login
  userLocation.textContent = object.location
  profilePara.textContent = 'Profile:'
  profileLink.textContent = object.html_url
  userFollowers.textContent = 'Followers: ' + object.followers
  userFollowing.textContent = 'Following: ' + object.following
  userBio.textContent = object.bio

  //Give us back the card
  return card;
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
