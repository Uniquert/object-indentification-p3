function setup() {
    canvas = createCanvas(325, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

img = "";
Status = "";
objects = [];


function preload() {
    img = loadImage('paper.png');
}

function modelLoaded() {
    console.log("modelLoaded");
    Status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
    console.error(error);
    }
    console.log(results);
}

function draw() 
{
    image(img, 0, 0, 325, 420);

    if(Status != " ") 
    {
        for(i = 0; i < objects.length;  i++) 
        {
            document.getElementById("status").innerHTML = "Status: Object Detected";
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill()
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

        }
    }

}