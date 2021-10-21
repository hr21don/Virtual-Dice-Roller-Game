/**************** player1 ***************/
//generate a random number between 1 -6
var randomnumber1 = Math.floor(Math.random() * 6) + 1;

// cycle through each image
var randomdiceimage = "dice" + randomnumber1 + ".png";

//images/dice1.png - images/dice6.png
var randomdiceimagesrc= "images/" + randomdiceimage;

document.querySelectorAll("img")[0].setAttribute("src",randomdiceimagesrc);

/**************** player2 ***************/
//generate a random number between 1 -6
var randomnumber2 = Math.floor(Math.random() * 6) + 1;

// cycle through each image
var randomdiceimage2 = "dice" + randomnumber2 + ".png";

//images/dice1.png - images/dice6.png
var randomdiceimagesrc2= "images/" + randomdiceimage2;

document.querySelectorAll("img")[1].setAttribute("src", randomdiceimagesrc2);

/**************** player3 ***************/
//generate a random number between 1 -6
var randomnumber3 = Math.floor(Math.random() * 6) + 1;

// cycle through each image
var randomdiceimage3 = "dice" + randomnumber3 + ".png";

//images/dice1.png - images/dice6.png
var randomdiceimagesrc3= "images/" + randomdiceimage3;

document.querySelectorAll("img")[2].setAttribute("src", randomdiceimagesrc3);

/**************** player4 ***************/
//generate a random number between 1 -6
var randomnumber4 = Math.floor(Math.random() * 6) + 1;

// cycle through each image
var randomdiceimage4 = "dice" + randomnumber4 + ".png";

//images/dice1.png - images/dice6.png
var randomdiceimagesrc4= "images/" + randomdiceimage4;

document.querySelectorAll("img")[3].setAttribute("src", randomdiceimagesrc4);

/**************** player5 ***************/
//generate a random number between 1 -6
var randomnumber5 = Math.floor(Math.random() * 6) + 1;

// cycle through each image
var randomdiceimage5 = "dice" + randomnumber5 + ".png";

//images/dice1.png - images/dice6.png
var randomdiceimagesrc5= "images/" + randomdiceimage5;

document.querySelectorAll("img")[4].setAttribute("src", randomdiceimagesrc5);


// conditions for player 1
if (randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML = "🏆 Player 1 Wins!";
}
// conditions for player 2
else if (randomnumber2 > randomnumber1) {
  document.querySelector("h1").innerHTML = " Player 2 Wins! 🏆";
}
// conditions for player 3
else if (randomnumber3 > randomnumber2){
  document.querySelector("h1").innerHTML = "🏆 Player 3 Wins!";
}
// conditions for player 4
else if (randomnumber4 > randomnumber3){
  document.querySelector("h1").innerHTML = " Player 4 Wins! 🏆";
}
// conditions for player 5
else if (randomnumber5 > randomnumber4){
  document.querySelector("h1").innerHTML = "🏆 Player 5 Wins! ";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
