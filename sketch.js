let width = 600;
let height = 600;

function setup() {
    createCanvas(width, height);
}

function draw() {
    background(0);
    
    translate(width/2,height/2);
    fill(255);

    beginShape();
    vertex(0, 0);
    vertex(-50,-120);
    vertex(-120,-120);
    vertex(-120,0);
    vertex(-300,0);
    vertex(-100,-300);
    vertex(170,-300);
    endShape();

    rotate(radians(180));
    beginShape();
    vertex(0, 0);
    vertex(-50,-120);
    vertex(-120,-120);
    vertex(-120,0);
    vertex(-300,0);
    vertex(-100,-300);
    vertex(170,-300);
    endShape();
    

  
}
