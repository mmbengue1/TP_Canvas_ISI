var canvas1 = document.getElementById("canvas1");
var ctx = canvas1.getContext("2d");
var wC = canvas1.width, hC = canvas1.height;
var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext("2d");

//
var  score = 0;

//Les titres des couleures
var randColorTitle = ["blue", "red", "green", "yellow", "orange", "purple", "pink", "black", "brown", "beige"];

//Les couleures des carres
var randColorSquare = ["blue", "red", "green", "yellow", "orange", "purple", "pink", "black", "brown", "beige"];
//creation de l'objet


function Carre(x, y, w, couleur, text) {
    this.positionX = x;
    this.positionY = y;
    this.width = w;

    this.couleur = couleur;
    this.text = text;
    this.dessiner = function (ctx, couleurText) {
        ctx.clearRect(0, 0, wC, hC);
        ctx.fillRect(this.positionX, this.positionY, this.width, this.width);
        ctx.fillStyle = this.couleur;
        ctx.shadowColor = 'black';
        ctx.shadowBlur = 25;
        ctx.shadowOffsetX = 10;
        ctx.shadowOffsetY = 10;


    };
    this.bouger = function (ctx) {
        //Vitesse ICI

        this.positionY += 1;
        if (this.positionX > wC)
            this.positionX = -this.width;

        if (this.positionY > hC) {
            this.positionY = -this.width;
            this.couleur = randColorSquare[Math.floor(Math.random() * randColorSquare.length)];
            this.text = randColorTitle[Math.floor(Math.random() * randColorTitle.length)];

            // on met  les textes des carres dans le dans les divs prevus pour les contenir dans le html

            var textMatch1 = document.getElementById("rand-color1");
            textMatch1.innerHTML = carre1.text;
            var textMatch2 = document.getElementById("rand-color2");
            textMatch2.innerHTML = carre2.text;

        };
        this.dessiner(ctx);

    };
    this.isTouch= function(canvas){

        var py = this.positionY;
        var px = this.positionX;
        var wx = this.width;
        var tT = this.couleur;
        var tC = this.text;
        canvas.onclick = function (e) {
            var  elemLeft = canvas.offsetLeft;
            var  elemTop = canvas.offsetTop;
            var mouseX = e.layerX-elemLeft,
                mouseY = e.layerY-elemTop;
            var textScore = document.getElementById("score").innerHTML =score;
            if (mouseY > py && mouseY < py+ wx && mouseX > px && mouseX < px + wx) {
                if (tT == tC) {
                    score += 10;
                }
                if (tT != tC) {
                    score -= 10;
                }
            } else {
                alert('carre manque');
            }

        };
    }


}

//creation des objets

var couleur1 = randColorSquare[Math.floor(Math.random() * randColorSquare.length)];
var couleur2 = randColorSquare[Math.floor(Math.random() * randColorSquare.length)];
var texte = randColorTitle[Math.floor(Math.random() * randColorTitle.length)];

carre1 = new Carre(175, 0, 80, couleur1, texte);
carre2 = new Carre(175, 0, 80, couleur2, texte);
//variable pour stocker l'intervalle
var timer = -40000;
function startCarre() {
    game = setInterval(function () {

        carre1.bouger(ctx);
        carre1.isTouch(canvas1);
        carre2.bouger(ctx2);

        //click sur le canavas 1


        //click sur le canavas 2
        canvas2.onclick = function (e) {
            var mouseX = e.layerX,
                mouseY = e.layerY;
            if (mouseY > carre1.positionY && mouseY < carre1.positionY + carre1.width && mouseX > carre1.positionX && mouseX < carre1.positionX + carre1.width) {

                alert('Carre touche');
            } else {
                alert('carre manque');
            }

        }

    }, timer);
    var easy = document.getElementById("level1");
    easy.onclick = function (e) {

    }
}

startCarre();

