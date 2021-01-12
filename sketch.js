var canvas;
var var1, var2, var3, var4, boxcarrr;
var music;

function preload(){
    
    music = loadSound("music.mp3");
}

function setup(){

    canvas = createCanvas(800,600);

    var1 = createSprite(107.5, 300, 175, 20);
    var1.shapeColor = "red";
    var2 = createSprite(var1.x+195, var1.y, 175, 20);
    var2.shapeColor = "blue";
    var3 = createSprite(var2.x+195, var1.y, 175, 20);
    var3.shapeColor = "yellow";
    var4 = createSprite(var3.x+195, var1.y, 175, 20);
    var4.shapeColor = "green";

    boxcarrr = createSprite(Math.round(random(25,775)), 100, 50, 50);
    boxcarrr.velocityX = 3;
    boxcarrr.velocityY = 4;

}

function draw() {

    background(rgb(0,0,0));
   
    if((var1.y-boxcarrr.y) < (boxcarrr.height+var1.height)/2 && boxcarrr.x < 205) {

        boxcarrr.shapeColor = "green";
    } else if((var1.y-boxcarrr.y) < (boxcarrr.height+var1.height)/2 && boxcarrr.x < 400) {

        boxcarrr.shapeColor = "yellow";
    } else if((var1.y-boxcarrr.y) < (boxcarrr.height+var1.height)/2 && boxcarrr.x < 595) {

        boxcarrr.shapeColor = var2.shapeColor;
        music.stop();
    } else if((var1.y-boxcarrr.y) < (boxcarrr.height+var1.height)/2 && boxcarrr.x > 595) {

        boxcarrr.shapeColor = var1.shapeColor;
    } else {
        boxcarrr.shapeColor = boxcarrr.shapeColor
    }

    if (boxcarrr.x < 25 || boxcarrr.x > 775) {

        boxcarrr.velocityX = -boxcarrr.velocityX;
        boxcarrr.velocityY = boxcarrr.velocityY;
    }

    if (boxcarrr.y < 25 || boxcarrr.y > (var1.y-35)) {

        boxcarrr.velocityX = boxcarrr.velocityX;
        boxcarrr.velocityY = -boxcarrr.velocityY;
    }

    drawSprites()
}