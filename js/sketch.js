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

// let x1 = 0;
// let y1 = 0;
// let speedX1 = 10;
// let speedY1 = 4;
// let size1 = 50;

// let x2 = 0;
// let y2 = 0;
// let speedX2 = 5;
// let speedY2 = 10;
// let size2 = 50;

// let distance = 0;
// let hue;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   noStroke();
//   colorMode(HSB);
// }

// function draw() {
//   background(hue, 255, 255);

//   // DESSINER LES ELLIPSES
//   fill(0);
//   stroke(0);
//   ellipse(x1, y1, size1, size1);
//   ellipse(x2, y2, size2, size2);

//   // FAIRE BOUGER LES ELLIPSES
//   x1 = x1 + speedX1;
//   x2 = x2 + speedX2;
//   y1 = y1 + speedY1;
//   y2 = y2 + speedY2;

//   // FAIRE REBONDIR LES ELLIPSES ET CHANGER DE BACKGROUND QUAND C'EST LE CAS
//   if (x1 > width || x1 < 0) {
//     speedX1 = -speedX1;

//   } else if (y1 > height - size1 / 2 || y1 < 0) { 
//     speedY1 = -speedY1;
//   }

//   if (x2 > width || x2 < 0) {
//     speedX2 = -speedX2;

//   } else if (y2 > height - size2 /2 || y2 < 0) {
//     speedY2 = -speedY2;
//   }

//   // CALCULER LA DISTANCE ENTRE LES DEUX ELLIPSES
//   let xDelta = (x2 - x1) * (x2 - x1);
//   let yDelta = (y2 - y1) * (y2 - y1);
//   let distance = sqrt(xDelta + yDelta);

//   // DESSINER LA LIGNE ENTRE LES ELLIPSES
//   strokeWeight(3);
//   line(x1, y1, x2, y2);

//   // DESSINER LE RECTANGLES 
//   hue = map(distance, 0, width, 0, 255);
//   rectMode(CENTER);
//   noFill();
//   stroke(0);
//   rect(width / 2, height / 2, distance, distance);  

//   // DESSINER LE TEXTE
//   textSize(83);
//   fill(0);
//   textAlign(CENTER, CENTER);
//   text(int(distance), width / 2, height / 2);
// }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }