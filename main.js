function preload() {
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    stroke("red");
    rect(50, 50, 530, 400);
    fill("cyan");
    stroke("red");
    circle(50, 50, 50);
    fill("cyan");
    stroke("red");
    circle(600, 50, 50);
    fill("cyan");
    stroke("red");
    circle(50, 430, 50);
    fill("cyan");
    stroke("red");
    circle(600, 430, 50);
    image(video, 160,  100, 300, 300);
    tint(tint_color);
}


function take_snapshot(){
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}