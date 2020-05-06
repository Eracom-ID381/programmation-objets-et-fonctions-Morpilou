// UTILISEZ SHIFT-CMD-7 POUR DÉCOMMENTER PLUSIEUR LIGNES SÉLÉCTIONÉES //

// ------------------------- EXEMPLE OBJETS ------------------------------------//


// let x = 50;
// let y = 50;
// let diametre = 50

// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   background(0);
//   ellipse(x, y, diametre, diametre)
// }

// ------------------------- EXEMPLE FONCTION ------------------------------------//

// let cercle = {
//   x: 50,
//   y: 50,
//   diametre: 100,
//   vitesseX: 10,
//   vitesseY: 4
// };

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   noStroke();
//   colorMode(HSB);
// }

// function draw() {
//   background(0);
//   ellipse(cercle.x, cercle.y, cercle.diametre, cercle.diametre);

//   if (cercle.x > width - cercle.diametre / 2 || cercle.x  < cercle.diametre / 2) {
//     cercle.vitesseX = -cercle.vitesseX;
//   } else if (cercle.y > height - cercle.diametre / 2 || cercle.y < cercle.diametre / 2) {
//     cercle.vitesseY = -cercle.vitesseY;
//   }

//   cercle.x = cercle.x + cercle.vitesseX;
//   cercle.y = cercle.y + cercle.vitesseY;
// }

// ------------------------- EXERCICE ------------------------------------//


// EXERCICE TECHNIQUE: RÉORGANISEZ CES VARIABLES AVEC DES OBJETS
// ET RÉORGANISEZ LE FLUX DE VOTRE PROGRAMME AVEC VOS PROPRES FONCTION

let distance = 0;
let hue;
let ellipses = {
  x1: 0,
  x2: 0,
  y1: 0,
  y2: 0,
  speedX1: 10,
  speedX2: 5,
  speedY1: 4,
  speedY2: 10,
  size1: 50,
  size2: 50
};


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  colorMode(HSB);
}

function draw() {

  let xDelta = Math.pow(ellipses.x2 - ellipses.x1, 2);
  let yDelta = Math.pow(ellipses.y2 - ellipses.y1, 2);
  let distance = sqrt(xDelta + yDelta);
  hue = map(distance, 0, width, 0, 255);
  background(hue, 255, 255);

  // DESSINER LES ELLIPSES
  ellipse_draw();
  // FAIRE BOUGER LES ELLIPSES
  ellipse_move();
  // FAIRE REBONDIR LES ELLIPSES ET CHANGER DE BACKGROUND QUAND C'EST LE CAS
  ellipse_bounce();
  // DESSINER LA LIGNE ENTRE LES ELLIPSES
  line_draw();
  // DESSINER LE RECTANGLES
  rect_draw(distance);
  // DESSINER LE TEXTE
  text_draw(distance);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function ellipse_draw() {
  fill(0);
  stroke(0);
  ellipse(ellipses.x1, ellipses.y1, ellipses.size1, ellipses.size1);
  ellipse(ellipses.x2, ellipses.y2, ellipses.size2, ellipses.size2);

}

function ellipse_move() {
  ellipses.x1 = ellipses.x1 + ellipses.speedX1;
  ellipses.x2 = ellipses.x2 + ellipses.speedX2;
  ellipses.y1 = ellipses.y1 + ellipses.speedY1;
  ellipses.y2 = ellipses.y2 + ellipses.speedY2;
}

function ellipse_bounce() {
  if (ellipses.x1 > width || ellipses.x1 < 0) {
    ellipses.speedX1 = -ellipses.speedX1;

  } else if (ellipses.y1 > height - ellipses.size1 / 2 || ellipses.y1 < 0) {
    ellipses.speedY1 = -ellipses.speedY1;
  }

  if (ellipses.x2 > width || ellipses.x2 < 0) {
    ellipses.speedX2 = -ellipses.speedX2;

  } else if (ellipses.y2 > height - ellipses.size2 / 2 || ellipses.y2 < 0) {
    ellipses.speedY2 = -ellipses.speedY2;
  }
}


function line_draw() {
  strokeWeight(3);
  line(ellipses.x1, ellipses.y1, ellipses.x2, ellipses.y2);
}

function rect_draw(distance) {
  rectMode(CENTER);
  noFill();
  stroke(0);
  rect(width / 2, height / 2, distance, distance);
}

function text_draw(distance) {
  textSize(83);
  fill(0);
  textAlign(CENTER, CENTER);
  text(int(distance), width / 2, height / 2);
}