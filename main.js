difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#969A97');
    
    document.getElementById("font_size").innerHTML = "font size of the text will be = " + difference +"px";
    textSize(difference);
    fill('#FFE787');
    text('Samuel', 50, 400);
}

function modelLoaded() {
    console.log('Posenet Is Initiliazed!');
}

function gotPoses(results) 
{
    if(results.length > 0)
    {
        console.log(results);
         
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = "+ rightWristX + " difference = " + difference);
    }
}






