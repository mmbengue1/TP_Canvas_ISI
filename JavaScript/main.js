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
    this.dessiner = function (ctx) {
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

        this.positionY += 10;
        if (this.positionX > wC)
            this.positionX = -this.width;

        if (this.positionY > hC) {
            this.positionY = -this.width;
            this.couleur = randColorSquare[Math.floor(Math.random() * randColorSquare.length)];
            this.text = randColorTitle[Math.floor(Math.random() * randColorTitle.length)];

            // on met  les textes des carres dans le dans les divs prevus pour les contenir dans le html

            var textMatch1 = document.getElementById("rand-color1");
            textMatch1.innerHTML = tabCarreCanvas1.text;
            var textMatch2 = document.getElementById("rand-color2");
            textMatch2.innerHTML = carre2.text;

        };
        this.dessiner(ctx);

    };
    this.isTouch= function(mouseX,mouseY){

            if (mouseY > this.positionY && mouseY < this.positionY + this.width && mouseX > this.positionX && mouseX < this.positionX + this.width) {
               return true;
            } else {
                return false;
            }
    }


}

//
var tabCarreCanvas1 =[];
var tabCarreCanvas2 =[];

//creation des objets

var couleur1 = randColorSquare[Math.floor(Math.random() * randColorSquare.length)];
var couleur2 = randColorSquare[Math.floor(Math.random() * randColorSquare.length)];
var texte = randColorTitle[Math.floor(Math.random() * randColorTitle.length)];

carre1 = new Carre(175, 0, 80, couleur1, texte);
carre2 = new Carre(175, 0, 80, couleur2, texte);
tabCarreCanvas1.push(carre1);
tabCarreCanvas2.push(carre2);
//variable pour stocker l'intervalle
var timer = 500;
function startCarre() {

    game = setInterval(function () {

        carre1.bouger(ctx);
        carre1.isTouch(canvas1);
        carre2.bouger(ctx2);

        //click sur le canavas 1
        canvas1.onclick = function (e) {
            var mouseX = e.layerX,
                mouseY = e.layerY;

            for(var i =0 ;i < tabCarreCanvas1.length;i++){
                if(tabCarreCanvas1[i].isTouch(mouseX,mouseY)){
                    var textScore = document.getElementById("score").innerHTML =score;
                    if (tabCarreCanvas1[i].couleur == tabCarreCanvas1[i].text) {
                        score += 10;
                    }
                    if (tabCarreCanvas1[i].couleur != tabCarreCanvas1[i].text) {
                        score -= 80;
                    }console.log(score)
                }
                else{

                }
            }
        }

        //click sur le canavas 2
        canvas2.onclick = function (e) {
            var mouseX = e.layerX,
                mouseY = e.layerY;

            for(var i =0 ;i < tabCarreCanvas2.length;i++){
                if(tabCarreCanvas1[i].isTouch(mouseX,mouseY)){
                    var textScore = document.getElementById("score").innerHTML =score;
                    if (tabCarreCanvas2[i].couleur == tabCarreCanvas2[i].text) {
                        score += 10;
                    }
                    if (tabCarreCanvas2[i].couleur != tabCarreCanvas2[i].text) {
                        score -= 80;
                    }console.log(score)
                }
            }
        }

    },timer);
    var easy = document.getElementById("level1");
    easy.onclick = function (e) {

    }
}

startCarre();

