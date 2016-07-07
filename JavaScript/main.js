var canvas1 = document.getElementById("canvas1");
var ctx = canvas1.getContext("2d");
var wC = canvas1.width, hC = canvas1.height;
var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext("2d");


//Les titres des couleures
var randColorTitle = ["blue", "red", "green", "yellow", "orange", "purple", "pink", "black", "brown", "beige"];

//Les couleures des carres
var randColorSquare = ["blue", "red", "green", "yellow", "orange", "purple", "pink", "black", "brown", "beige"];
function Carre(x,y,w)  {
  this.positionX =x;
  this.positionY =y;
  this.width =w;
  this.dessiner= function (ctx) {
    ctx.clearRect(0, 0, wC, hC);
    ctx.fillRect(this.positionX, this.positionY, this.width, this.width);
    ctx.fillStyle = randColorSquare[Math.floor(Math.random() * randColorSquare.length)];
  };
  this.bouger =  function (ctx) {

    this.positionY += 1;  //Vitesse ICI
    if (this.positionX > wC)
      this.positionX = -this.width;

    if (this.positionY > hC)
      this.positionY = -this.width;
    this.dessiner(ctx);
  }

};

  carre1 = new Carre(175,0,40);
carre2 = new Carre(175,0,40);
setInterval(function () {

  carre1.bouger(ctx);
  carre2.bouger(ctx2);


});