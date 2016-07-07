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
function Carre(x,y,w,couleur,text) {
    this.positionX = x;
    this.positionY = y;
    this.width = w;
    this.couleur = couleur;
    this.text = text;
    this.dessiner = function (ctx,couleurText) {
        ctx.clearRect(0, 0, wC, hC);
        ctx.fillRect(this.positionX, this.positionY, this.width, this.width);
        ctx.fillStyle = this.couleur;



    };
    this.bouger = function (ctx,couleurText) {
        //Vitesse ICI
        this.positionY += 1;
        if (this.positionX > wC)
            this.positionX = -this.width;

        if (this.positionY > hC) {
            this.positionY = -this.width;
            this.couleur = randColorSquare[Math.floor(Math.random() * randColorSquare.length)];
            this.text = randColorTitle[Math.floor(Math.random() * randColorTitle.length)];

            // on met  les textes des carres dans le dans les divs prevus pour les contenir dans le html
            var  textMatch1 = document.getElementById("rand-color1");
            textMatch1.innerHTML = carre1.text;
            var  textMatch2 = document.getElementById("rand-color2");
            textMatch2.innerHTML = carre2.text;
        }
        this.dessiner(ctx,couleurText);

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



var couleur1 = randColorSquare[Math.floor(Math.random() * randColorSquare.length)];
var couleur2 = randColorSquare[Math.floor(Math.random() * randColorSquare.length)];
var texte = randColorTitle[Math.floor(Math.random() * randColorTitle.length)];

carre1 = new Carre(175,0,80,couleur1,texte);
carre2 = new Carre(175,0,80,couleur2,texte);
//variable pour stocker l'intervalle
var timer = 100;
function startCarre(couleurText) {
    game=setInterval(function () {

        carre1.bouger(ctx,couleurText);
        carre2.bouger(ctx2, couleurText);

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

    },timer);
    var easy = document.getElementById("level1");
    easy.onclick = function (e) {
        


    }
}

startCarre(couleur1);
