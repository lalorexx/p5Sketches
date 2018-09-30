//var img;
function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);
//    img = loadImage('m2.jpg');
}

function draw(){
    
    if (keyIsDown(LEFT_ARROW)){
        loopOne();
    }
    
    else if (keyIsDown(RIGHT_ARROW)){
        loopTwo();
    }
    
    else if (keyIsDown(DOWN_ARROW)){
        loopThree();
    }
//    loopOne();
//    loopTwo();
//    loopThree();
    
//var button = document.getElementById("generate");
//
//button.onclick = function generate(){
//    
//    var randomNum = Math.floor(Math.random() * 3);
//    
//    var el = document.getElementById("numberHolder");
//    
//    el.innerHTML = randomNum;
//    
//    if(randomNum == 0){
//        loopOne();
//        
//       }else if(randomNum == 1){
//        loopTwo();
//           
//       }else{
//        loopThree();   
//       }
//}

}

//function loopOne(){
//     for(var x = 100; x <= windowWidth; x = x + 150){
//        for(var y = -100; y <= windowHeight; y = y + 10){
//        push();
//        fill(x*0.3, y%200, x%200);
//        noStroke();
//        translate(x, y);
//        ellipse(x, 100, 80, 80);
//        pop();
//    }
//  }   
//}

//function loopTwo(){   
//    background('#a7ffb5');
//    for(var y = 0; y <= height; y += 30){
//        for(var x = 0; x <= width; x += 40){
//            fill('#39ff14');
//            stroke('#ff5300');
//            strokeWeight(3);
//            ellipse(x, y, 50, 50);
//        }
//    } 
//}

function loopOne(){
    background('#81d8d0');
    for (var y = -400; y <= windowHeight + 20; y +=80){
        for (var x = -700; x <= windowWidth + 20; x +=40){
            ellipse(x, y, 8, 8);
            line(x, y, random(x), random(y));
            strokeWeight(random(2));
            stroke('#a7ffb5');
            fill('#c79fef');
        }
    }
}

function loopTwo(){
     background(200, 34, 55);
   var ang1 = sin(0.01*frameCount+10);
   var tx =  50 * tan(0.01*frameCount+40);
   var size1 = 200 * cos(0.01*frameCount+40);

   var ang2 = PI * noise(0.01*frameCount+30);
   var tx2 =  200 * noise(0.01*frameCount+70);
   var size2 = 30 * sin(0.01*frameCount+20);

       for(var i = 0; i<8; i++){
           noFill();
           stroke('#81d8d0');
           push();
           rotate(ang1 + TWO_PI * i+5 );
           triangle(30, 75, 58, 20, 86, 75);
           fill(14, 176, 34);
           triangle(80, 75, 58, 20, 86, 75);
           pop();

               for(var y = 0; y<3; y++){
                   push();
                   fill(179,239, 128);
                   noFill();
                   translate(2, 3);
                   rotate(ang2 * y+8);
                   triangle(30, 50, 58, 20, 86, 75);
                   for(var t = 0; t<10; t++){
                   push();
                   noFill(179,239, 128);
                   stroke(255,255, 255);
                   translate(1, 3);
                   rotate(ang1 * y/8);
                   triangle(30, 200/y, ang2+50, size1, 86, 75);
                   pop();
                       }
               }
           pop();
       }
}

function loopThree(){
    background(250);
    rotate(PI * 5.0);
    for(var x = 5; x <= windowWidth/2; x = x + 50){
        for(var y = 10; y < windowHeight/2; y = y + 10){
    normalMaterial(); 
//    texture(img);
    translate(sin(frameCount / 100 + x) * 30, cos(frameCount * 0.003 * y) * 100, x * 0.1);        
    push();
    rotateZ(frameCount * 0.002);
    rotateX(frameCount * 0.002);
    rotateY(frameCount * 0.005);
    torus(30, 30);
    pop();
}
}
}










