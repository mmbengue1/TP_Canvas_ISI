/**
 * Created by Abdallah Mbengue on 7/6/2016.
 */
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var w = canvas.width, h = canvas.height;

var carre = {
    x: 0,
    y: 0,
    w: 50,
    dessiner: function () {
        ctx.clearRect(0, 0, w, h);
        ctx.fillRect(this.x, this.y, this.w, this.w);
    },
    bouger: function () {

        this.y += 1;
        if (this.x > w)
            this.x = -this.w;

        if (this.y > h)
            this.y = -this.w;
        this.dessiner();


    }

}


setInterval(function () {
    carre.bouger();
})