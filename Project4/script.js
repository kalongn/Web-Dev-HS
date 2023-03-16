var tilef = null;
var tiles = null;
var images = ['image/1.png', 'image/2.png', 'image/3.png', 'image/4.png', 'image/5.png', 'image/6.png', 'image/7.png', 'image/8.png', 'image/9.png', 'image/10.png', 'image/11.png', 'image/12.png', 'image/13.png', 'image/14.png', 'image/15.png', 'image/16.png'];
const IMAGES = ['image/1.png', 'image/2.png', 'image/3.png', 'image/4.png', 'image/5.png', 'image/6.png', 'image/7.png', 'image/8.png', 'image/9.png', 'image/10.png', 'image/11.png', 'image/12.png', 'image/13.png', 'image/14.png', 'image/15.png', 'image/16.png'];
var test = null;

function startWeb() {
  var buildIndex = 0;
  bscore = document.getElementById("score");
  score = 0;
  clicks = document.getElementById("click");
  click = 0;
  divpage = document.getElementById("table");
  restartuh = document.getElementById("restartthing");
  restartuh.style.display = "none";
  playuh = document.getElementById("play");
  playuh.style.display = "block";
  for (let c = 1; c < 5; c++) {
    for (let r = 1; r < 5; r++) {
      var temp = buildIndex + 1;
      var currentTile = "c" + r + c;
      var imagelink = "image/" + temp + ".png";
      buildIndex++;
      //console.log(currentTile, temp);
      document.getElementById(currentTile).src = imagelink;
    }
  }
}

function clickt(c, r) {
  //console.log("c"+c+r);
  if (tilef == null) {
    tilef = "c" + c + r;
    click++;
    display();
    //console.log(tilef);
  }
  else if (tiles == null) {
    tiles = "c" + c + r;
    click++;
    display();
    //console.log(tiles);
    swap(tilef, tiles);
    tilef = null;
    tiles = null;
    check();
  }
}

function restart() {
  table = test;
  divpage.innerHTML = table;
  playuh.style.display = "block";
  restartuh.style.display = "none";
  score = 0;
  click = 0;
  display();
  //startWeb();
}

function shuffle() {
  for (let i = 0; i < 100; i++) {
    randomR1 = Math.floor(Math.random() * 4 + 1);
    randomC1 = Math.floor(Math.random() * 4 + 1);
    randomR2 = Math.floor(Math.random() * 4 + 1);
    randomC2 = Math.floor(Math.random() * 4 + 1);
    temp1 = "c" + randomC1 + randomR2;
    temp2 = "c" + randomC2 + randomR1;
    swap(temp1, temp2);
  }
  score = 0;
  click = 0;
  display();
  /*for(let i = 0; i < 16; i++)
  {
    console.log(images[i]);
  }*/
}

function check() {
  score = 0;
  for (let i = 0; i < IMAGES.length; i++) {
    if (images[i] == IMAGES[i]) {
      score++;
      //console.log("" + images[i] + score);
    }
  }
  display();
  if (score == 16) {
    restartuh.style.display = "block";
    playuh.style.display = "none";
    test = divpage.innerHTML;
    table = "<img class=\"overlay\" src=\"victoryScreen.png\">"

    divpage.innerHTML = table;
    //console.log("you won, happy?")
  }
}

/*swap the cell of input c1 and c2*/
function swap(c1, c2) {
  var temp = document.getElementById(c1).src;
  //console.log(temp);
  //swapping the back end
  var position = temp.search("image");
  //console.log(position);
  var index1 = images.indexOf(temp.substring(position));
  //console.log(position);
  //console.log(index1);
  var temp2 = document.getElementById(c2).src;
  position = temp.search("image");
  var index2 = images.indexOf(document.getElementById(c2).src.substring(position))
  var arrtemp = images[index1];
  images[index1] = images[index2]
  images[index2] = arrtemp;
  //console.log(images[index1] + images[index2]);
  //swapping the front end
  document.getElementById(c1).src = document.getElementById(c2).src;
  document.getElementById(c2).src = temp;
  //console.log(document.getElementById(c1).src +  " with " + document.getElementById(c2).src);
}

function display() {
  bscore.innerHTML = score;
  clicks.innerHTML = click;
}