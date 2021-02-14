// ============================  ______  ____  _____  ____   ____ ________==========================================================================
// ============================ |       ||    ||     |    | ||       ||   ========================================================================== 
// ============================ |------ ||--- ||     |====  ||---    ||   ==========================================================================    
// ============================  _____| |____ |_____ |  -_  |____    ||   ==========================================================================

//=========  ____   ____              ____  _      ________         ____   ____          ______ ============================================================
//========= ||__|| ||  || ||      || ||    | |  ||    ||    ||  || |    | ||  || ||  || |       ============================================================
//========= | __ | ||  ||  ||    ||  ||--- |  | ||    ||    ||  || |====  ||  || ||  || |------ ============================================================
//========= ||  || |____|   ||__||   |____ |   |||    ||    |____| |  -_  |____| |____|  _____| ============================================================

//=========================  ____  ________ ________  ____   _____           ============================================================
//========================= ||__||    ||       ||    ||__|| ||     ||    |  ============================================================
//========================= | __ |    ||       ||    | __ | ||     ||---|    ============================================================
//========================= ||  ||    ||       ||    ||  || |_____ ||    |   ============================================================  

//===================================  ____   ____    __   __   ____  =================================================================
//=================================== ||     ||__||  |  | |  | ||     =================================================================
//=================================== || ___ | __ |  |   |   | ||---  =================================================================
//=================================== |___|  ||  ||  |       | |____  =================================================================

// -------------------------------------------Creating Variables--------------------------------------------------

//creating MenuState items -:

//creating BackGround of menuState
var MBackGroundimg;

//creating variable of play icon
var play, playimage;

//creating variable of Detail icon
var Detail, Detailimage;

//creating variable of level icon
var level, level_image;

/*
 * menu state items are finised
 * Now we are going to create Level state items :-
 */

 //creating variable of Level state BackGround
var Lbackground, Lbackground_image;


//creating variable of levels from 1 to 10 :-
var l1, l2, l3, l4;

//creating levels textures from 1 to 10 :-
var l1img, l2img, l3img, l4img;

var lock,lock2, lock3, lockimg;

//creating exit icon for all the state
var exit, exitimg;

//creating previous and next variable
var previous, next;

//creating an image for previous and next image this image is 2 in 1
var previous_next;

//creating variables for Select Player State:-

//creating background for select player state
var SBackGround, SBackGroundimage;

//creating background for profile pic and animation
var  Propicbackgroundimge;

var Propicbackground, Propicbackground2, Propicbackground3, Propicbackground4, Propicbackground5, Propicbackground6, Propicbackground7, Propicbackground8, Propicbackground9, Propicbackground10, Propicbackground11, Propicbackground12, Propicbackground13, Propicbackground14, Propicbackground15, Propicbackground16, Propicbackground17, Propicbackground18, Propicbackground19, Propicbackground20, Propicbackground21, Propicbackground22, Propicbackground23, Propicbackground24, Propicbackground25, Propicbackground26; 

//creating profile variable
var BlueShirtBoyProfile, GreenShirtBoyProfile, RedHoodieBoyProfile, TheifShirtBoyProfile, YellowShirtBoyProfile;

//creating Profile animation variable
var BlueShirtBoyProfileAnimation, GreenShirtBoyProfileAnimation, RedHoodieBoyProfileAnimation, TheifShirtBoyProfileAnimation, YellowShirtBoyProfileAnimation;

//creating variables for level playing State:-
var Level1_bg, Level1_bg_img;
var Level2_bg;

var escalator, escalatorimg;

var Agent1, Agent1_running, Agent1_running2;

var runnerright, runnerrightimg;
var runnerleft, runnerleftimg;

var Standing_agent1_facing_right, Standing_agent1_facing_right_img;

//creating variables for Setting State:-

var  toggleSwitchgun,toggleSwitchgunimg;
var toggleSwitchback, toggleSwitchbackimg;

var fire, fire_animation;
var fireGhost, fireGhostpic;

var stone;
var stone2;

var Gun1, Gun2, Gun3, Gun4;

var obstacleGroup;
var GunGroup;

//Creating boy and Boy image=:
var boy, boyimg;

var opponentplaneimg;

// var starimg;
// var noStarimg;

// //variables for level 1 star;
// var noStar1, noStar2, noStar3;

// var star1,star2,star3;

// //variable for level 2 star
// var noStar4, noStar5, noStar6;

// var star7, star8, star9;
// var noStar7, noStar8, noStar9;

// var star10, star11, star12;
// var noStar10, noStar11, noStar12;

// var star13, star14, star15;
// var noStar13, noStar14, noStar15;

// var star16, star17, star18;
// var noStar16, noStar17, noStar18;

// var star19, star20, star21;
// var noStar19, noStar20, noStar21;

// var star22, star23, star24;
// var noStar22, noStar23, noStar24;

// var star25, star26, star27;
// var noStar25, noStar26, noStar27;

// var star28, star29, star30;
// var noStar28, noStar29, noStar30;

var Level2bg;
var level2_bg_ground, level2_bg_ground_sp;

var car1, car2, car3, car4, car5;
var policecar, policecarimage;
var playercar, playercarimg;

var carGroup, car2Group;

var start;

var level3_bgimge, level3_bg;
var spaceShip, spaceShipimage;

var star, asteroidimg, alien, meteor;
var starGroup, asteroidGroup, alienGroup, meteorGroup;

var up, down, spaceship2in1controller;

var man_on_mars, man_on_mars_pic;

var level4_bgimage, level4_bg;

var bulletimg;

var opponentplaneGroup;
var plane, planeimg;

var controlPanel, controlPanel2;
var controlPanelimge, controlPanel2image;

var bulletGroup;

var bombTrigger, bombTriggerimg;

var blast;

var bombGroup;

var Gameover, GameOverimg;

var restartsprite, restartimage;

var homesprite, homeImage;

var levelup, levelupimg;

var nextfinal, nextfinalimg;

//creating variable of GameStates=:
var MenuState = 1;
var levelState = 5;
var Level1State = 11;
var Level2State = 12;
var Level3State = 14;
var Level4State = 15;
var playState1 = 2;
var playStatefinal = 3;
var PlayerSelectState = 4;
var levelPlayingState = 10;
var SettingState = 6;
var GameState = MenuState;


var score = 0;

var tittle_track;

var gameoverSound;

//----------------------------------------------------------------------------------------------
function preload(){
  //loading images and animations --------------============-----=-=--=-=-=-=-

  //loading images and animations of menuState:-
  
  //loading Image of MenuState BackGround
  MBackGroundimg = loadImage("Images/BackGround/BackGround for menuState.jpeg");

  //loading image of the play icon
  playimage = loadImage("Icons/Start Icon.png");

  //loading image of Detail icon
  Detailimage = loadImage("Icons/detail icon.png");

  //loading image of level icon
  level_image = loadImage("Icons/level.png");

  //loading backGround of level box
 level_box_backGround = loadImage("Images/BackGround/backGround of player selector.jpg");

 /* menu state images and animations are loaded
 * Now, we are going to load Level state items :-
 * Let's go
 */

 //loading background image for level state 
 Lbackground_image = loadImage("Images/BackGround/Level seleting BackGround 2.jpeg");


//loading images for levels
 l1img = loadImage("Level textures/1.png");
 l2img = loadImage("Level textures/2.png");
 l3img = loadImage("Level textures/3.png");
 l4img = loadImage("Level textures/4.png");

 runnerrightimg = loadImage("Icons/right going man button.png");
 runnerleftimg = loadImage("Icons/left going man button.png");

 lockimg = loadImage("Icons/lock for the game.png");
 //loading image for exit icon
 exitimg = loadImage("Icons/Hopstarter-Button-Button-Close.ico");

 //loading image for previous and next ivcon which is 2 in 1
 previous_next = loadImage("Icons/next.png");

 escalatorimg = loadImage("Icons/escalator image.png");

 //loading images and animation for select player state

 //loading image for background
SBackGroundimage = loadImage("Images/BackGround/BackGround for Player select state.jpg");

//loading image for profile animation
Propicbackgroundimge = loadImage("Images/BackGround/Profile pic image.png");

//loading Animations for Profile pic

//loading Animation of Blue shirt boy
BlueShirtBoyProfileAnimation = loadAnimation("Profile icons/all the character profile animation/Blue shirt boy profile animation/Blue shirt boy profile animation 1.png","Profile icons/all the character profile animation/Blue shirt boy profile animation/Blue shirt boy profile animation 2.png", "Profile icons/all the character profile animation/Blue shirt boy profile animation/Blue shirt boy profile animation 3.png", "Profile icons/all the character profile animation/Blue shirt boy profile animation/Blue shirt boy profile animation 4.png");

//loading Animation of Green shirt boy
GreenShirtBoyProfileAnimation = loadAnimation("Profile icons/all the character profile animation/Green shirt boy profile animation/Green shirt boy profile animation 1.png", "Profile icons/all the character profile animation/Green shirt boy profile animation/Green shirt boy profile animation 2.png", "Profile icons/all the character profile animation/Green shirt boy profile animation/Green shirt boy profile animation 3.png", "Profile icons/all the character profile animation/Green shirt boy profile animation/Green shirt boy profile animation 4.png");

//loading Animation of Red  Hoodie Boy
RedHoodieBoyProfileAnimation = loadAnimation("Profile icons/all the character profile animation/Red hoodie boy profile animation/Red hoodie boy profile animation 1.png", "Profile icons/all the character profile animation/Red hoodie boy profile animation/Red hoodie boy profile animation 2.png", "Profile icons/all the character profile animation/Red hoodie boy profile animation/Red hoodie boy profile animation 3.png", "Profile icons/all the character profile animation/Red hoodie boy profile animation/Red hoodie boy profile animation 4.png");

//loading Animation of Theif boy
TheifShirtBoyProfileAnimation = loadAnimation("Profile icons/all the character profile animation/theif boy profile animation/Theif boy profile animation 1.png", "Profile icons/all the character profile animation/theif boy profile animation/Theif boy profile animation 2.png", "Profile icons/all the character profile animation/theif boy profile animation/Theif boy profile animation 3.png", "Profile icons/all the character profile animation/theif boy profile animation/Theif boy profile animation 4.png");

//loading Animation of Yellow shirt boy
YellowShirtBoyProfileAnimation = loadAnimation("Profile icons/all the character profile animation/Yellow shirt boy profile animation/Yellow shirt boy profile animation 1.png", "Profile icons/all the character profile animation/Yellow shirt boy profile animation/Yellow shirt boy profile animation 2.png", "Profile icons/all the character profile animation/Yellow shirt boy profile animation/Yellow shirt boy profile animation 3.png", "Profile icons/all the character profile animation/Yellow shirt boy profile animation/Yellow shirt boy profile animation 4.png");

//loading images for level playing state
Level1_bg_img = loadImage("Level background/Level 1 backGround.jpg");

Agent1_running = loadAnimation("Animation of the player of the game/Agent 1/Agent 1- 1.png", "Animation of the player of the game/Agent 1/Agent 1- 2.png", "Animation of the player of the game/Agent 1/Agent 1- 3.png", "Animation of the player of the game/Agent 1/Agent 1- 4.png", "Animation of the player of the game/Agent 1/Agent 1- 5.png", "Animation of the player of the game/Agent 1/Agent 1- 6.png");

fire_animation = loadAnimation("level 1/fire 1.png", "level 1/fire 2.png", "level 1/fire 3.png", "level 1/fire 4.png", "level 1/fire 5.png", "level 1/fire 6.png");

fireGhostpic = loadImage("level 1/fire Ghost image.png");

stone = loadImage("Obstacles/Snake.png");
stone2 = loadImage("Obstacles/Stone 2.png");

Gun1 = loadImage("Gun as coin/Gun 3.png");
Gun2 = loadImage("Gun as coin/Gun 4.png");
Gun3 = loadImage("Gun as coin/Gun1.png");
Gun4 = loadImage("Gun as coin/Gun2.png");

Level2_bg = loadImage("Level background/level 2 image.jpg");

level2_bg_ground = loadImage("level 2/desert ground.png");

car1 = loadImage("level 2/bolero.png");
car2 = loadImage("level 2/Car 1.png");
car3 = loadImage("level 2/car 2.png");
car4 = loadImage("level 2/car 3.png");
car5 = loadImage("level 2/car 4.png");

playercarimg = loadImage("level 2/red car.png");
policecarimage = loadImage("level 2/police car bad car.png");

noStarimg = loadImage("extra item/star didn't get on the level.png");

starimg = loadImage("extra item/star fore level.png");

start = loadImage("Icons/Jumping button.png");

level3_bgimge = loadImage("level 4/Black COLOR backGround.jpg");

spaceShipimage = loadImage("level 4/rocket man.png");

star = loadImage("level 4/stars.png");

alien = loadImage("level 4/alien.jpeg");

asteroidimg = loadImage("level 4/asteroid.png");

spaceship2in1controller = loadImage("level 4/controler image 2 in 1.png");

meteor = loadImage("level 4/Meteors.png");

level4_bgimage = loadImage("level4/level 5 backGround.jpg");

planeimg = loadImage("level4/fighter plane.png");

opponentplaneimg = loadImage("level4/terroroi's plane.png");

controlPanelimge = loadImage("level4/left button.png");
controlPanel2image = loadImage("level4/right button.png");

bulletimg = loadImage("level4/bullet.png");

bombTriggerimg = loadImage("level4/bomb buton.png");

blast = loadImage("level4/blast 1.png");

GameOverimg = loadImage("extra item/Game Over screen.jpeg");

homeImage = loadImage("Icons/Home Icon.png");

restartimage = loadImage("Icons/Restart icon.png");

levelupimg = loadImage("extra item/Level up screen.png");

nextfinalimg = loadImage("Icons/Super Speed.png");

runnerrightimg = loadImage("Icons/right going man button.png");
runnerleftimg = loadImage("Icons/left going man button.png");

man_on_mars_pic = loadImage("level 4/man in the mars.png")

tittle_track = loadSound("Secret adventurous attack (tittle-track).wav");

gameoverSound = loadSound("gameover.mp3");

//----------------------------------------------------------------------------------------------
}

//----------------------------------------------------------------------------------------------
function setup(){
//conveting variables to sprites

//creating canvas of height = 700, width = 1000
  createCanvas(1000, 650);

  ///creating items of menuState:-

 //creating sprite of the play icon of the game and assign image to it
 play = createSprite(250, 550);
 play.addImage(playimage);
 play.scale = 0.5;

 //creating sprite of details icon and assign image to it
 Detail = createSprite(750, 550);
 Detail.addImage(Detailimage);
 Detail.scale = 0.1;

 //creating Sprite of level box
level_box = createSprite(925,550);
level_box.addImage(level_box_backGround);
level_box.scale = 0.15;


 //creating sprite of player select icon and assign image to it
 level = createSprite(910, 550);
 level.addImage(level_image);
 level.scale = 0.2;

 /* menustate Sprites are created 
  *Now we are going to create level state sprites:-
  */
 //creating sprite of level state background
  Lbackground = createSprite(width/2, height/2);
  Lbackground.addImage(Lbackground_image);
  Lbackground.scale = 0.9;
  Lbackground.visible = false;

  //creating sprites of level and assign image to it:-

  //level 1
  l1 = createSprite(300,290);
  l1.addImage(l1img);
  l1.scale = 0.4;

  //level 2
  l2 = createSprite(500,230);
  l2.addImage(l2img);
  l2.scale = 0.4;

  //level 4
  l3 = createSprite(703,155);
  l3.addImage(l3img);
  l3.scale = 0.4;

   //level 5
  l4 = createSprite(910, 80);
  l4.addImage(l4img);
  l4.scale = 0.4;


   star1 = createSprite(160,230);
   star1.addImage(starimg);
   star1.scale = 0.03;

   star2 = createSprite(200,230);
   star2.addImage(starimg);
   star2.scale = 0.03;

   star3 = createSprite(240,230);
   star3.addImage(starimg);
   star3.scale = 0.03;

   star1.visible = false;
   star2.visible = false;
   star3.visible = false;

   noStar1 = createSprite(160,230);
   noStar1.addImage(noStarimg);
   noStar1.scale = 0.06;

   noStar2 = createSprite(200,230);
   noStar2.addImage(noStarimg);
   noStar2.scale = 0.06;

   noStar3 = createSprite(240,230);
   noStar3.addImage(noStarimg);
   noStar3.scale = 0.06;

   noStar1.visible = false;
   noStar2.visible = false;
   noStar3.visible = false;

   //make all the level invisible
   l1.visible = false;
   l2.visible = false;
   l3.visible = false;
   l4.visible = false;

   Level1_bg = createSprite(650, height/2);
   Level1_bg.addImage(Level1_bg_img);
   Level1_bg.visible = false;

   lock = createSprite(550, 280);
   lock.addImage(lockimg);
   lock.visile = true;

   lock2 = createSprite(755, 205);
   lock2.addImage(lockimg);
   lock2.visible = true;
   
   lock3 = createSprite(960, 130);
   lock3.addImage(lockimg);
   lock3.visible = true;

   //creating sprite of next icon
   next = createSprite(900, 350);
   next.addImage(previous_next);
   next.scale = 1;
   next.visible = false;

//creating sprite of previous icon
  previous = createSprite(100, 200);
  previous.addImage(previous_next);
  previous.scale = -1;
  previous.visible = false;
  
  //creating sprites Select player state and adding image and animation to it:-

  //creating sprite of select player state background and adding image to it
  SBackGround = createSprite(500,330);
  SBackGround.addImage(SBackGroundimage);
  SBackGround.scale = 2.7;
  SBackGround.visible = false;

  //creating sprite of select player state profile pic and adding image to it
  Propicbackground = createSprite(100, 200);
  Propicbackground.addImage(Propicbackgroundimge);
  Propicbackground.scale = 0.5;

  Propicbackground2 = createSprite(350, 200);
  Propicbackground2.addImage(Propicbackgroundimge);
  Propicbackground2.scale = 0.5;

  Propicbackground3 = createSprite(600, 200);
  Propicbackground3.addImage(Propicbackgroundimge);
  Propicbackground3.scale = 0.5;

  Propicbackground4 = createSprite(850, 200);
  Propicbackground4.addImage(Propicbackgroundimge);
  Propicbackground4.scale = 0.5;

  Propicbackground5 = createSprite(100, 400);
  Propicbackground5.addImage(Propicbackgroundimge);
  Propicbackground5.scale = 0.5;

  Propicbackground6 = createSprite(350, 400);
  Propicbackground6.addImage(Propicbackgroundimge);
  Propicbackground6.scale = 0.5;

  Propicbackground7 = createSprite(600, 400);
  Propicbackground7.addImage(Propicbackgroundimge);
  Propicbackground7.scale = 0.5;

  Propicbackground8 = createSprite(850, 400);
  Propicbackground8.addImage(Propicbackgroundimge);
  Propicbackground8.scale = 0.5;

  //creating sprites of profile pic and adding image and animation to it 

  //creating sprite of blue shirt boy and adding animation to it
  BlueShirtBoyProfile = createSprite(100, 200);
  BlueShirtBoyProfile.addAnimation("Blue shirt boy pro",BlueShirtBoyProfileAnimation);

  //creating sprite of green shirt boy and adding image to it
  GreenShirtBoyProfile = createSprite(350, 180);
  GreenShirtBoyProfile.addAnimation("Green shirt boy pro", GreenShirtBoyProfileAnimation);
  GreenShirtBoyProfile.scale = 0.5;

  //creating sprite of Red hoodie boy and adding image to it
  RedHoodieBoyProfile = createSprite(600, 190);
  RedHoodieBoyProfile.addAnimation("Red Hoodie boy pro", RedHoodieBoyProfileAnimation);
  RedHoodieBoyProfile.scale = 0.5;

  //creating sprite of Theif boy and adding image to it
  TheifShirtBoyProfile = createSprite(850, 200);
  TheifShirtBoyProfile.addAnimation("Theif boy pro", TheifShirtBoyProfileAnimation);
  TheifShirtBoyProfile.scale = 1;

  //creating sprite of Yellow boy and adding image to it
  YellowShirtBoyProfile = createSprite(100, 410);
  YellowShirtBoyProfile.addAnimation("Yellow shirt boy pro", YellowShirtBoyProfileAnimation);
  YellowShirtBoyProfile.scale = 0.5;

  //making everything invisible of Select player state
  Propicbackground.visible = false;
  Propicbackground2.visible = false;
  Propicbackground3.visible = false;
  Propicbackground4.visible = false;
  Propicbackground5.visible = false;
  Propicbackground6.visible = false;
  Propicbackground7.visible = false;
  Propicbackground8.visible = false;
  BlueShirtBoyProfile.visible = false;
  GreenShirtBoyProfile.visible = false;
  RedHoodieBoyProfile.visible = false;
  TheifShirtBoyProfile.visible = false;
  YellowShirtBoyProfile.visible = false;


  Agent1 = createSprite(400, 100);
  Agent1.addAnimation("Agent 1 of level 1", Agent1_running); 
  Agent1.visible = false;

  escalator = createSprite(900, 600);
  escalator.addImage(escalatorimg);
  escalator.scale = 0.07;
  escalator.visible = false; 

  fire = createSprite(150, 200);
  fire.addAnimation("Bad man 1", fire_animation);
  fire.scale = 1;
  fire.visible = false;

 Level2bg = createSprite(width/2, -4500);
 Level2bg.addImage(Level2_bg);
 Level2bg.scale = 1.32;

 playercar = createSprite(700,300);
 playercar.addImage(playercarimg);
 playercar.scale = 0.08;
 playercar.rotation = -90;

 policecar = createSprite(700, 500);
 policecar.addImage(policecarimage);
 policecar.scale = 0.4;
 policecar.rotation = -90;

 playercar.visible = false;
 policecar.visible = false;
 Level2bg.visible = false;
 
  //creating sprite for exit icon and loading image to it
  exit = createSprite(100, 50);
  exit.addImage(exitimg);
  exit.scale = 0.2;
  exit.visible = false;

  runnerleft = createSprite(100, 555);
  runnerleft.addImage(runnerleftimg);
  runnerleft.scale = 0.3;
  runnerleft.visible = false;

  runnerright = createSprite(900, 555);
  runnerright.addImage(runnerrightimg);
  runnerright.scale = 0.3;
  runnerright.visible = false;

  level3_bg = createSprite(600, height/2);
  level3_bg.addImage(level3_bgimge);
  level3_bg.scale = 2;
  level3_bg.visible = false;

  up = createSprite(100, 100);
  up.addImage(spaceship2in1controller);
  up.scale = 0.2;
  up.visible = false;
 
  down = createSprite(100, 600);
  down.addImage(spaceship2in1controller);
  down.scale = 0.2;
  down.rotation = 180;
  down.visible = false;

  spaceShip = createSprite(300, 200);
  spaceShip.addImage(spaceShipimage);
  spaceShip.scale = 0.5;
  spaceShip.rotation = 20;
  spaceShip.visible = false;

  man_on_mars = createSprite(800, height/2);
  man_on_mars.addImage(man_on_mars_pic);
  man_on_mars.scale = 0.7;
  man_on_mars.rotation = -90;
  man_on_mars.visible = false;

  level4_bg = createSprite(width/2, -5900);
  level4_bg.addImage(level4_bgimage);
  level4_bg.scale = 5.8;
  level4_bg.visible = false;

  plane = createSprite(width/2, 515);
  plane.addImage(planeimg);
  plane.scale = 1;
  plane.visible = false;

  opponentplaneGroup = new Group();

  controlPanel2 = createSprite(900, 580);
  controlPanel2.addImage(controlPanel2image);
  controlPanel2.scale = 0.2;
  controlPanel2.visible = false;

  controlPanel = createSprite(100, 580);
  controlPanel.addImage(controlPanelimge);
  controlPanel.scale = 0.2;
  controlPanel.visible = false;

  bulletGroup = new Group();

  bombTrigger = createSprite(width/2, 100);
  bombTrigger.addImage(bombTriggerimg);
  bombTrigger.scale = 0.2;
  bombTrigger.visible = false;

  bombGroup = new Group();

  Gameover = createSprite(width/2, height/2);
  Gameover.addImage(GameOverimg);
  Gameover.scale = 0.5;
  Gameover.visible = false;

  levelup = createSprite(width/2, height/2);
  levelup.addImage(levelupimg);
  levelup.scale = 1;
  levelup.visible = false;

  nextfinal = createSprite(490, 465);
  nextfinal.addImage(nextfinalimg);
  nextfinal.scale = 0.3;
  nextfinal.visible = false;

  restartsprite = createSprite(320, 455);
  restartsprite.addImage(restartimage);
  restartsprite.scale = 0.3;
  restartsprite.visible = false;

  homesprite = createSprite(680, 455);
  homesprite.addImage(homeImage);
  homesprite.scale = 0.1;
  homesprite.visible = false;

 player = new Player();
 obstacleGroup = new Group();
 GunGroup = new Group();
 carGroup = new Group();
 car2Group = new Group();
 asteroidGroup = new Group();
 starGroup = new Group();
 alienGroup = new Group();
 meteorGroup = new Group();

 //----------------------------------------------------------------------------------------------
}

//-----------------------------------------------------------------------------------------------
function draw(){
  //assign function here

  background(MBackGroundimg);

  drawSprites();

  if(GameState == MenuState){

    Detail.visible = true;
    level_box.visible = true;
    play.visible = true;
    level.visible = true;
    Lbackground.visible = false;
     l1.visible = false;
     l2.visible = false;
     l3.visible = false;
     l4.visible = false;
     next.visible = false;
     previous.visible = false;
     exit.visible = false;
     
     lock.visible = false;
     lock2.visible = false;
     lock3.visible = false;

     noStar1.visible = false;
     noStar2.visible = false;
     noStar3.visible = false;

     runnerright.visible = false;
     runnerleft.visible = false;

     tittle_track.loop();

     if(mousePressedOver(Detail)){

      window.open("https://drive.google.com/file/d/1EqsnK4Y_ioe6XRaTfaKm-4o-uGVK4loI/view?usp=sharing");

     }

    if(mousePressedOver(level_box || level)){

      GameState = levelState;
      cursor(ARROW);

    }

    if(mousePressedOver(play)){

    GameState = levelState;

    }

   

  if(mouseIsOver(level_box || level)){

    level.scale = 0.3;
    level_box.scale = 0.17;
    cursor("pointer");

  }else
  {

    level.scale = 0.2;
    level_box.scale = 0.15;  
    cursor(ARROW);

  }

  if(mouseIsOver(Detail)){

    Detail.scale = 0.15;
    cursor("pointer");

  }else
  {

    Detail.scale = 0.1; 

  }

  if(mouseIsOver(play)){

    play.scale = 0.6;
    cursor("pointer")

  }else{

    play.scale = 0.5;

  }

}

if(GameState == levelState){

  Detail.visible = false;
  play.visible = false;
  level.visible = false;
  Lbackground.visible = true;
   l1.visible = true;
   l2.visible = true;
   l3.visible = true;
   l4.visible = true;
   exit.visible = true;

   Level1_bg.visible = false;
   Level2bg.visible =  false;
   playercar.visible = false;
   policecar.visible = false;

    lock.visible = false;
    lock2.visible = false;
    lock3.visible = false;

   noStar1.visible = true;
   noStar2.visible = true;
   noStar3.visible = true;

   if(mousePressedOver(l1)){

    GameState = Level1State;

   }

   if(mousePressedOver(l2) && lock.visible == false){

    GameState = Level2State;
    Level2bg.velocityY = 9;

   }


   if(mousePressedOver(l3) && lock2.visible == false){

   GameState = Level3State;

   }

   if(mousePressedOver(l4) && lock3.visible == false){

    GameState = Level4State;

   }

   if(mouseIsOver(exit)){

    exit.scale = 0.3;
    cursor("pointer");

   }else{

    exit.scale = 0.2;
    cursor(ARROW);

   }
   
   if(mouseIsOver(l1)){

    cursor("pointer");

   }
  
   if(mouseIsOver(l2)){

    cursor("pointer");

   }

   if(mouseIsOver(l3)){

    cursor("pointer");

   }

   if(mouseIsOver(l4)){

    cursor("pointer");

   }

   if(mousePressedOver(exit)){

    GameState = MenuState;

   }

}

if(GameState == PlayerSelectState){

  SBackGround.visible = true;
  
  Propicbackground.visible = true;
  Propicbackground2.visible = true;
  Propicbackground3.visible = true;
  Propicbackground4.visible = true;
  Propicbackground5.visible = true;
  Propicbackground6.visible = true;
  Propicbackground7.visible = true;
  Propicbackground8.visible = true;
  BlueShirtBoyProfile.visible = true;
  GreenShirtBoyProfile.visible = true;
  RedHoodieBoyProfile.visible = true;
  TheifShirtBoyProfile.visible = true;
  YellowShirtBoyProfile.visible = true;

  Detail.visible = false;
  play.visible = false;
  level.visible = false;
  Lbackground.visible = false;
   l1.visible = false;
   l2.visible = false;
   l3.visible = false;
   l4.visible = false;
   next.visible = false;
   previous.visible = false;
   
   exit.visible = true;

}

if(GameState == Level1State){


  SBackGround.visible = false;
  Detail.visible = false;
  level_box.visible = false;
  Propicbackground.visible = false;
  Propicbackground2.visible = false;
  Propicbackground3.visible = false;
  Propicbackground4.visible = false;
  Propicbackground5.visible = false;
  Propicbackground6.visible = false;
  Propicbackground7.visible = false;
  Propicbackground8.visible = false;
  BlueShirtBoyProfile.visible = false;
  GreenShirtBoyProfile.visible = false;
  RedHoodieBoyProfile.visible = false;
  TheifShirtBoyProfile.visible = false;
  YellowShirtBoyProfile.visible = false;

  Detail.visible = false;
  play.visible = false;
  level.visible = false;
  Lbackground.visible = false;
   l1.visible = false;
   l2.visible = false;
   l3.visible = false;
   l4.visible = false;
   next.visible = false;
   previous.visible = false;
   
   exit.visible = false;

   lock.scale = 0.002;
   lock2.scale = 0.002;
   lock3.scale = 0.002;

   stroke("white");
   textSize(20);
   text("Score: " + score, 800, 100);

   //fire.setCollider("rectangle", 0, 0, 200, 250);

   Agent1.visible = true;
   fire.visible = true;

    Agent1.velocityY = 8;
    fire.velocityY = 8;

    if(restartsprite.visible == false && homesprite.visible == false){

    Level1_bg.velocityX = -6;

    }

   if(Level1_bg.x < 350){

     Level1_bg.x = Level1_bg.x = 650;

   }

   if(keyDown("space") && Agent1.y > 350){

    Agent1.velocityY = Agent1.velocityY-20;

   }else{

    Agent1.velocityY = 6;

   }

Level1_bg.visible = true;

   if(obstacleGroup.isTouching(Agent1)){

    Agent1.velocityX = 7;
    Agent1.velocityY = -50;

    Agent1.rotationSpeed = 30;

    Gameover.visible = true;
    restartsprite.visible = true;
    homesprite.visible = true;

    Level1_bg.velocityX = 0;

    obstacleGroup.setVelocityEach(0,0);

    gameoverSound.play();

   }

   if(Agent1.isTouching(GunGroup)){

    score = score + 1;
    GunGroup.destroyEach();

   }

   if(fire.isTouching(obstacleGroup)){

    obstacleGroup.destroyEach();

   }

   var coll = createSprite(1000, height/2, 10, 1000);
   coll.visible = false;
   Agent1.collide(coll);

   exit.visible = true;

   if(mousePressedOver(exit)){

    GameState = levelState;

   }
   
   if(score == 10){

    levelup.visible = true;

    Level1_bg.velocityX = 0;
    Agent1.visible = false;

    restartsprite.visible = true;
    homesprite.visible = true;
    nextfinal.visible = true;

    lock.visible = false;

    if(mousePressedOver(restartsprite)){

      restart1();

    }

    if(mousePressedOver(nextfinal)){

      GameState = Level2State;

    }

   }

   if(Gameover.visible == false && restartsprite.visible == false && homesprite.visible == false){

   obstaclecreator();
   Guncaller();

   }
   if(mouseIsOver(restartsprite) && restartsprite.visible == true){

    cursor('pointer');
    restartsprite.scale = 0.4;

   }else{

    cursor(ARROW);
    restartsprite.scale = 0.3;

   }

   if(mouseIsOver(homesprite) && homesprite.visible == true){

    cursor('pointer');
    homesprite.scale = 0.15;

   }else{

    //cursor(ARROW);
    homesprite.scale = 0.1;

   }

   if(mousePressedOver(restartsprite) && restartsprite.visible == true){

    restart1();

   }

   if(mousePressedOver(homesprite) && homesprite.visible == true){

    home1();

   }

}





if(GameState == Level2State){

  Agent1.visible = false;
  fire.visible = false;

  SBackGround.visible = false;
  Detail.visible = false;
  level_box.visible = false;
  Propicbackground.visible = false;
  Propicbackground2.visible = false;
  Propicbackground3.visible = false;
  Propicbackground4.visible = false;
  Propicbackground5.visible = false;
  Propicbackground6.visible = false;
  Propicbackground7.visible = false;
  Propicbackground8.visible = false;
  BlueShirtBoyProfile.visible = false;
  GreenShirtBoyProfile.visible = false;
  RedHoodieBoyProfile.visible = false;
  TheifShirtBoyProfile.visible = false;
  YellowShirtBoyProfile.visible = false;

  Detail.visible = false;
  play.visible = false;
  level.visible = false;
  Lbackground.visible = false;
   l1.visible = false;
   l2.visible = false;
   l3.visible = false;
   l4.visible = false;
   next.visible = false;
   previous.visible = false;
   
   exit.visible = false;

   playercar.visible = true;
   policecar.visible = true;
   Level2bg.visible = true;

   if(Level2bg.y >= 5000 && playercar.x < 840 && playercar.x > 150 && playercar.y > 0 && playercar.y < 388){

    Level2bg.velocityY = 0;

   }

   if(Level2bg.velocityY == 0 && Level2bg.y >= 5000 && playercar.x < 840 && playercar.x > 150 && playercar.y > 0 && playercar.y < 388){

    playercar.velocityY = -9;
    car2Group.destroyEach();
    carGroup.destroyEach();

   }


   if(playercar.y < 0 && Level2bg.y >= 5000){

    levelup.visible = true;
    restartsprite.visible = true;
    nextfinal.visible = true;
    homesprite.visible = true;
    lock2.visible = false;


    if(mousePressedOver(restartsprite)){

      restart2();

    }

    if(mousePressedOver(homesprite)){

      GameState = MenuState;

      Level2bg.visible = false;
      playercar.visible = false;
      policecar.visible = false;
      car2Group.destroyEach();
      carGroup.destroyEach();
      levelup.visible = false;
      restartsprite.visible = false;
      homesprite.visible = false;
      nextfinal.visible = false;

      runnerright.visible = false;
      runnerleft.visible = false;

    }

    if(mousePressedOver(nextfinal)){

      GameState = Level3State;

      Gameover.visible = false;
      levelup.visible = false;
      restartsprite.visible = false;
      homesprite.visible = false;
      nextfinal.visible = false;


    }

   }

   runnerleft.visible = true;
   runnerright.visible = true;

   if(mousePressedOver(runnerright)){

    playercar.velocityX = 6;

   }
   else{

    playercar.velocityX = 0;

   }

   if(mousePressedOver(runnerleft)){

    playercar.velocityX = -6;

   }

   if(carGroup.isTouching(playercar)){

  playercar.velocityX = 10;
  playercar.velocityY = -10;
  playercar.rotationSpeed = 30;

  gameoverSound.play();

  Gameover.visible = true;
  restartsprite.visible = true;
  homesprite.visible = true;

   }

   if(Gameover.visible == true && restartsprite.visible == true && homesprite.visible == true){

    if(mousePressedOver(restartsprite)){

      restart2();

    }

    if(mousePressedOver(homesprite)){

      GameState = MenuState;

      Level2bg.visible = false;
      Gameover.visible = false;
      playercar.visible = false;
      policecar.visible = false;
      car2Group.destroyEach();
      carGroup.destroyEach();
      levelup.visible = false;
      restartsprite.visible = false;
      homesprite.visible = false;
      nextfinal.visible = false;

      runnerright.visible = false;
      runnerleft.visible = false;

    }


   }


   if(car2Group.isTouching(playercar)){

    playercar.velocityX = 10;
    playercar.velocityY = -10;
    playercar.rotationSpeed = 30;

    Gameover.visible = true;
    restartsprite.visible = true;
    homesprite.visible = true;

    gameoverSound.play();
  
     }

     carcaller();
     carcaller2();

}

if(GameState == Level3State){

  level3_bg.visible = true;
  if(Gameover.visible == false){
  spaceShip.visible = true;
  }
  up.visible = true;
  down.visible =  true;

  if(spaceShip.visible == true){
  asteroid();
  starcreater();
  meteorcreater();
  }

  if(mousePressedOver(up) && restartsprite.visible == false){

    spaceShip.velocityY = -7;

  }else{

    spaceShip.velocityY = 0;

  }

  if(mousePressedOver(down)){

    spaceShip.velocityY = 7;

  }

  if(asteroidGroup.isTouching(spaceShip) && homesprite.visible == false && restartsprite.visible == false){

    spaceShip.visible = false;
    down.visible = false;
    up.visible = false;

    gameoverSound.play();

  }

  if(meteorGroup.isTouching(spaceShip) && homesprite.visible == false && restartsprite.visible == false){

    spaceShip.visible = false;
    down.visible = false;
    up.visible = false;

    gameoverSound.play();

  }

  if(frameCount % 2000 == 0){

    man_on_mars.visible = true;
    starGroup.setVelocityEach(0,0);
    meteorGroup.destroyEach();
    asteroidGroup.destroyEach();
    spaceShip.velocityX = 5;

  }

  if(spaceShip.isTouching(man_on_mars)){

    levelup.visible = true;
    spaceShip.velocityX = 0;
    nextfinal.visible = true;
    restartsprite.visible = true;
    homesprite.visible = true;

    lock3.visible = false;

    if(mousePressedOver(nextfinal)){

      GameState = Level4State;

      levelup.visible = false;
      restartsprite.visible = false;
      homesprite.visible = false;
      nextfinal.visible =  false;
      Gameover.visible = false;
      spaceShip.visible = false;
      starGroup.destroyEach();
      meteorGroup.destroyEach();
      asteroidGroup.destroyEach()


    }

  }

  if(spaceShip.visible == false || spaceShip.isTouching(man_on_mars)){

    Gameover.visible = true;
    restartsprite.visible = true;
    homesprite.visible = true;
    
    asteroidGroup.setVelocityEach(0,0);
    meteorGroup.setVelocityEach(0,0);
    starGroup.setVelocityEach(0,0);

    if(mousePressedOver(restartsprite)){

      restart3();

    }

    if(mousePressedOver(homesprite)){

      GameState = MenuState;

      Gameover.visible = false;
      restartsprite.visible = false;
      homesprite.visible = false;
      spaceShip.visible = false;
      starGroup.destroyEach();
      meteorGroup.destroyEach();
      asteroidGroup.destroyEach();
      level3_bg.visible = false;
      up.visible = false;
      down.visible = false;
      levelup.visible = false;
      nextfinal.visible = false;

      man_on_mars.visible = false;


    }

  }else{

    Gameover.visible = false;
    restartsprite.visible = false;
    homesprite.visible = false;

  }

}

if(GameState == Level4State){

   level4_bg.velocityY = 9;

   
  textSize(25);
  fill('white');
  noStroke();
  text("Score :  " + score,800, 100);

   levelup.visible = false;
   restartsprite.visible = false;
   homesprite.visible = false;
   nextfinal.visible =  false;
   Gameover.visible = false;
   spaceShip.visible = false; 

  level4_bg.visible = true;
  plane.visible = true;
  controlPanel2.visible = true;
  controlPanel.visible = true;
  bombTrigger.visible = true;

   if(level4_bg.y  > 6500){

    level4_bg.velocityY = 0;

    plane.velocityX = 0;

    if(plane.scale > 0.4099999999999995){

    plane.scale = plane.scale - 0.001;

    }

    if(plane.scale <= 0.4099999999999995){

    plane.scale = 0.4099999999999995;

    }

   }


   if(opponentplaneGroup.isTouching(plane)){

     level4_bg.velocityY = 0;
     opponentplaneGroup.setVelocityEach(0,0);

     Gameover.visible = true;
     restartsprite.visible = true;
     homesprite.visible = true;

     gameoverSound.play();

   }

   if(mousePressedOver(restartsprite) && restartsprite.visible == true){

    restart4();

   }

   if(mousePressedOver(homesprite) && homesprite.visible == true){

  GameState = MenuState;
  plane.visible=  false;
  Gameover.visible = false;
  restartsprite.visible = false;
  homesprite.visible = false;
  levelup.visible = false;
  nextfinal.visible = false;
  opponentplaneGroup.destroyEach();
  level4_bg.visible = false;
  controlPanel.visible = false;
  controlPanel2.visible = false;
  bombTrigger.visible = false;

   }

   if(mousePressedOver(controlPanel) && level4_bg.y  < 6500){

    plane.velocityX = -3;

   }
   else{

    plane.velocityX = 0;

   }
   
   if(mousePressedOver(controlPanel2) && level4_bg.y  < 6500){

    plane.velocityX = 3;

   }

if(plane.y > 150 && level4_bg.velocityY == 0 && level4_bg.y  > 6500){
  
  plane.velocityY = -0.5;

  levelup.visible = true;
  restartsprite.visible = true;
  homesprite.visible = true;

  if(mousePressedOver(homesprite)){
 
    GameState = MenuState;
  plane.visible=  false;
  Gameover.visible = false;
  restartsprite.visible = false;
  homesprite.visible = false;
  levelup.visible = false;
  nextfinal.visible = false;
  opponentplaneGroup.destroyEach();
  level4_bg.visible = false;
  controlPanel.visible = false;
  controlPanel2.visible = false;
  bombTrigger.visible = false;
   
  }

  if(mousePressedOver(restartsprite)){
  
    restart4();

  }

  if(plane.x <= 375 && controlPanelimge.velocityX >= 385){

      plane.velocityX = 0;

  }

  if(plane.x > 390){

    plane.velocityX = -0.4

  }

  if(plane.x < 345){

    plane.velocityX = 0.4;

  }

}else{

plane.velocityY = 0;

  }

  if(level4_bg.y  < 6500){

    planecaller();

  }

  if(bulletGroup.isTouching(opponentplaneGroup)){

    bulletGroup.destroyEach();
    opponentplaneGroup.destroyEach();
    score = score + 1;

  }

  if(keyDown("space") && level4_bg.y  < 6500 && Gameover.visible == false && levelup.visible == false){

   var temp_bullet = createBullet();
   temp_bullet.x = plane.x;

  }

  if(mousePressedOver(bombTrigger) && level4_bg.y  < 6500){

    var tmp_bomb = createBomb();
    tmp_bomb.x = plane.x;
    score + 1;

  }


}

if(lock.visible == false && mousePressedOver(l2)){

  restart2();

}

if(lock2.visible == false && mousePressedOver(l3)){

  restart3();

}

if(lock3.visible == false && mousePressedOver(l4)){

  restart4();

}

var invisible_Ground = createSprite(width/ 2, 600, width, 20);
invisible_Ground.visible = false;

Agent1.setCollider("rectangle", 0, 0, 150, 200);

Agent1.collide(invisible_Ground);

//fire.debug = true;

fire.collide(invisible_Ground);

console.log(plane.y);

console.log("mouse X position :  " + mouseX + "mouse Y position :  " + mouseY);


  play.setCollider("circle",0,0,50);
  l1.setCollider("rectangle",0,0,250, 250);
  l2.setCollider("rectangle",0,0,250, 250);
  l3.setCollider("rectangle",0,0,250, 250);
  l4.setCollider("rectangle",0,0,250, 250);

       
 
}

function obstaclecreator(){
  if(frameCount % 100 == 0){
  var obstacle = createSprite(1500,550);
  obstacle.velocityX = -7;
  //obstacle.collide(invisibleGround);
    
  var rand = Math.round(random(1,2));
  switch(rand){

      case 1: obstacle.addImage(stone);
       obstacle.scale = 0.2;

              break;
      case 2: obstacle.addImage(stone2);
       obstacle.scale = 0.3;
  
              break;
      default: break;

    }
    
    obstacle.lifetime = 3000;
    
    obstacleGroup.add(obstacle);
      
  }
  
 }

 function Guncaller(){
  if(frameCount % 100 == 0){
    var Gun = createSprite(1500,280);
    Gun.velocityX = -7;
      
    var rand = Math.round(random(1,4));
    switch(rand){
  
        case 1: Gun.addImage(Gun1);
         Gun.scale = 0.5;
  
                break;
        case 2: Gun.addImage(Gun2);
         Gun.scale = 0.1;
    
                break;

        case 3: Gun.addImage(Gun3);
        Gun.scale = 0.4;
  
               break;

       case 4: Gun.addImage(Gun4);
        Gun.scale = 0.3;
    
               break;
        default: break;
  
      }
      
      Gun.lifetime = 3000;
      
      GunGroup.add(Gun);
        
    }
  
 }

 function carcaller(){
  if(frameCount % 80 == 0){

    var car = createSprite(random(180, 485),0);
    car.velocityY = 20;
    //car.collide(invisibleGround);
      
    var call = Math.round(random(1,5));
    switch(call){
  
        case 1: car.addImage(car1);
         car.scale = 0.5;
         car.rotation = -90;
  
                break;
        case 2: car.addImage(car2);
         car.scale = 0.3;
         car.rotation = 90
    
                break;

        case 3: car.addImage(car3);
        car.scale = 0.3;
        car.rotation = 180;
  
               break;

       case 4: car.addImage(car4);
        car.scale = 0.6;
        car.rotation = 90;
    
               break;

       case 5: car.addImage(car5);
        car.scale = 0.3;
        car.rotation = 180;
    
               break;
        default: break;
  
      }
      
      //car.lifetime = 3000;
      
      carGroup.add(car);
        
    }
  
 }

 
 function carcaller2(){
  if(frameCount % 80 == 0){

    var car2row = createSprite(random(500, 845),700);
    car2row.velocityY = -20;
    //car.collide(invisibleGround);
      
    var call = Math.round(random(1,5));
    switch(call){
  
        case 1: car2row.addImage(car1);
         car2row.scale = 0.5;
         car2row.rotation = 90;
  
                break;
        case 2: car2row.addImage(car2);
         car2row.scale = 0.3;
         car2row.rotation = -90
    
                break;

        case 3: car2row.addImage(car3);
        car2row.scale = 0.3;
        car2row.rotation = 0;
  
               break;

       case 4: car2row.addImage(car4);
        car2row.scale = 0.6;
        car2row.rotation = -90;
    
               break;

       case 5: car2row.addImage(car5);
        car2row.scale = 0.3;
        car2row.rotation = 0;
    
               break;
        default: break;
  
      }
      
      car2row.lifetime = 3000;
      
      car2Group.add(car2row);
        
    }
  
 }

 function planecaller(){

  if(frameCount % 200 == 0){
    var opponentplane = createSprite(random(0, 900),-100);
    opponentplane.addImage(opponentplaneimg);
    opponentplane.rotation = 90;
    opponentplane.scale = 0.5;
    opponentplane.velocityY = 10;
    
    opponentplane.lifetime = 1000;

    opponentplane.depth = bombTrigger.depth;
    bombTrigger.depth = bombTrigger.depth + 1;
    
    opponentplaneGroup.add(opponentplane);
  }

 }

 
 
 function createBomb() 
 {
  var bomb = createSprite(480, 515);
  bomb.addImage(blast);
  bomb.velocityY = 10;
  bomb.scale = 0.7;
  bombGroup.add(bomb);

  bomb.depth = plane.depth;
  plane.depth = plane.depth + 1;

  return bomb;
}

function asteroid() 
 {
   if(frameCount % 100 == 0){
  var asteroidSprite = createSprite(1000, random(0, 480));
  asteroidSprite.addImage(asteroidimg);
  asteroidSprite.velocityX = -15;
  asteroidSprite.velocityY = 5;
  asteroidSprite.scale = 0.1;
  asteroidGroup.add(asteroidSprite);

  // bomb.depth = plane.depth;
  // plane.depth = plane.depth + 1;



   }

}

function starcreater() 
 {
   if(frameCount % 2 == 0){
  var starSprite = createSprite(1000, random(0, 700));
  starSprite.addImage(star);
  starSprite.velocityX = -10;
  starSprite.scale = 0.1;
  starGroup.add(starSprite);

   starSprite.depth = spaceShip.depth;
   spaceShip.depth = spaceShip.depth + 1;

   }

}

function meteorcreater() 
 {
   if(frameCount % 150 == 0){
  var meteorprite = createSprite(1000, random(0, 480));
  meteorprite.addImage(meteor);
  meteorprite.velocityX = -15;
  meteorprite.velocityY = 5;
  meteorprite.scale = 0.7;
  meteorGroup.add(meteorprite);

  meteorprite.depth = spaceShip.depth;
   spaceShip.depth = spaceShip.depth + 1;

   }

}

function createBullet() 
 {
  var bullet = createSprite(480, 515);
  bullet.addImage(bulletimg);
  bullet.velocityY = -10;
  bullet.scale = 0.7;
  bulletGroup.add(bullet);

  return bullet;
}

function restart1(){
  
  Gameover.visible = false;
  restartsprite.visible = false;
  homesprite.visible = false;
  Agent1.rotationSpeed = 0;
  Agent1.x = 400;

  levelup.visible = false;
  nextfinal.visible = false;

  Agent1.setVelocity(0, 0);

  Agent1.rotation = 0;

  Level1_bg.velocityX = -6;
  
  obstacleGroup.destroyEach();
  GunGroup.destroyEach();
  
  score = 0;

}

function restart2(){
  
  Gameover.visible = false;
  restartsprite.visible = false;
  homesprite.visible = false;
  playercar.rotationSpeed = 0;
  playercar.y = 300; 

  levelup.visible = false;
  nextfinal.visible = false;

  playercar.setVelocity(0, 0);

  playercar.rotation = -90;

  Level2bg.velocityY = 9;

  Level2bg.y = -4500;
  
  car2Group.destroyEach();
  carGroup.destroyEach();

}


function restart3(){
  
 Gameover.visible = false;
 restartsprite.visible = false;
 homesprite.visible = false;

 asteroidGroup.destroyEach();
 meteorGroup.destroyEach();

 spaceShip.rotation = 20;
 spaceShip.velocityX = 0;
 spaceShip.rotationSpeed = 0;

 spaceShip.visible = true;

 spaceShip.x = 300;

 starGroup.destroyEach();

 down.visible = false;
    up.visible = false;

    man_on_mars.visible = false;
    levelup.visible = false;
    nextfinal.visible = false;

}

function restart4(){

  Gameover.visible = false;
  restartsprite.visible = false;
  homesprite.visible = false;

  opponentplaneGroup.destroyEach();
  level4_bg.velocityY = 9;

  level4_bg.y = -5900;
score = 0;

}

 function home1(){

  GameState = MenuState;

     Gameover.visible = false;
     restartsprite.visible = false;
     homesprite.visible = false; 
     Level1_bg.visible = false;
     Agent1.visible = false;
     fire.visible = false;
     obstacleGroup.destroyEach();
     GunGroup.destroyEach();
     exit.visible = false;

 }

