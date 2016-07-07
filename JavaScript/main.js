var canvas1 = document.getElementById("canvas1");
var ctx = canvas1.getContext("2d");
var wC = canvas1.width, hC = canvas1.height;
var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext("2d");


//Les titres des couleures
var randColorTitle = ["blue", "red", "green", "yellow", "orange", "purple", "pink", "black", "brown", "beige"];

//Les couleures des carres
var randColorSquare = ["blue", "red", "green", "yellow", "orange", "purple", "pink", "black", "brown", "beige"];
//creation de l'objet
function Carre(x,y,w) {
    this.positionX = x;
    this.positionY = y;
    this.width = w;
    this.dessiner = function (ctx,couleurCarre,couleurText,text) {
        ctx.clearRect(0, 0, wC, hC);
        ctx.fillRect(this.positionX, this.positionY, this.width, this.width);
        ctx.fillStyle = couleurCarre;
        ctx.fillText(text,10,50);
        ctx.fillStyle = couleurText;
    };
    this.bouger = function (ctx,couleurCarre,couleurText,text) {
        //Vitesse ICI
        this.positionY += 1;
        if (this.positionX > wC)
            this.positionX = -this.width;

        if (this.positionY > hC)
            this.positionY = -this.width;
        this.dessiner(ctx,couleurCarre,couleurText,text);

    }
    /*this.manageClick = function (e, canvas) {
        var  elemLeft = canvas.offsetLeft;
        var   elemTop = canvas.offsetTop;
        var mouseX = e.layerX- elemLeft,
            mouseY = e.layerY- elemTop;
        if (mouseY > y && mouseY < y + w && mouseX > x && mouseX < x + w) {

            alert('Carre touche');
        } else {
            alert('carre manque');
        }

    };*/

}
//creation des objets

var jeu ={
    text:["blue", "red", "green", "yellow", "orange", "purple", "pink", "black", "brown", "beige"],
      color:  ["blue", "red", "green", "yellow", "orange", "purple", "pink", "black", "brown", "beige"]
};

  carre1 = new Carre(175,0,80);
carre2 = new Carre(175,0,80);

var couleur1 = randColorSquare[Math.floor(Math.random() * randColorSquare.length)];
var couleur2 = randColorSquare[Math.floor(Math.random() * randColorSquare.length)];
var texte = randColorTitle[Math.floor(Math.random() * randColorTitle.length)];
function startCarre(couleurCarre,couleurText,text) {
    setInterval(function () {

        carre1.bouger(ctx, couleurCarre,couleurText,text);
        carre2.bouger(ctx2, couleurCarre,couleurText,text);

        //click sur le canavas 1
        canvas1.onclick = function (e) {
            var mouseX = e.layerX,
                mouseY = e.layerY;
            if (mouseY > carre1.positionY && mouseY < carre1.positionY + carre1.width && mouseX > carre1.positionX && mouseX < carre1.positionX + carre1.width) {

                alert('Carre touche');
            } else {
                alert('carre manque');
            }

        };

        //click sur le canavas 1
        canvas2.onclick = function (e) {
            var mouseX = e.layerX,
                mouseY = e.layerY;
            if (mouseY > carre1.positionY && mouseY < carre1.positionY + carre1.width && mouseX > carre1.positionX && mouseX < carre1.positionX + carre1.width) {

                alert('Carre touche');
            } else {
                alert('carre manque');
            }

        }

    });
}

startCarre(couleur1,couleur2,texte);
