poses = [];
function preload() {

}
  
function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(280,280);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Model Loaded!")
}

function draw() {
    image(video, 0, 0, 280, 280);

    for (i = 0; i < poses.length; i++) {
        pose = poses[i];
    }
}

function gotPoses(results) {
    poses = results;
    if (poses.length > 0) {
      noseX = poses[0].pose.nose.x;
      noseY = poses[0].pose.nose.y;
      console.log("Nose coordinates - X: " + noseX + ", Y: " + noseY);
    }

}
function save_image() {

}