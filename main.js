leftWristX = 0;
rightWristX = 0;
difference = 0;




function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background("#28f6b9");
    fill("#e043af");
    textSize(difference / 3);
    textFont("Times New Roman");
    text("Priyanshu", 100, 205);
}

function modelLoaded() {
    console.log("Initialised Posenet");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}
