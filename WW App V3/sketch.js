var canvas,database;
var welcomeScreen,signUpScreen,sorryScreen,loginScreen,congratulationsScreen,donateScreen,thankYouScreen,contactScreen,dateScreen,profileScreen;
var user;
var allUsers;
var userValidation;
var login=false;
var donationItems="";
var ditems;
var logo;

function preload(){
  logo=loadImage("images/Worthy Work Logo.png");
}

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  welcomeScreen=new Welcome();
  welcomeScreen.display();
  ditems=new DonateItems();
}


function draw(){
  background("cyan");
  image(logo,500,30,500,175);
  imageMode(CENTRE);
  
}
