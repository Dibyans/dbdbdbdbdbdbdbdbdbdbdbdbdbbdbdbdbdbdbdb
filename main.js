img = "";
status = "";

function preload(){
    img = loadImage("bedrooom.jpg");
}

function setup(){
canvas = createCanvas(640,420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelloaded);
document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelloaded(){
    console.log("modelloaded");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
}

function draw(){
    image(img,0,0,640,420);
    fill("#eb4034");
    text("B E D",100,75);
    noFill();
    stroke("#eb4034");
    rect(85,60,450,350);
}