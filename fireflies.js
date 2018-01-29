var spot={
  x:100,
  y:100
} ;
var spot2={
  x:400,
  y:400
} ;
var col= {
  r:255,
  g:255,
  b:255,
};

var pathTime=0;
var glowTimer=0;
var direction=3;
var angle=0;
var z=0;
var expandContract=0;
 var direction2=3;
 var pathTime2=0;
function setup() {
	createCanvas(windowWidth, windowHeight);
	dim = 15;
        ellipseMode(RADIUS);
        frameRate(100);
}

function draw() {
   background(0);
  noStroke();
  drawGradient(spot.x, spot.y);
  drawGradient(spot2.x, spot2.y);
  pathTime++;
  pathTime2++;

  glowTimer++;
  if(parseInt(glowTimer)%2==0){
    if(expandContract==0){dim-=0.5;z++;if(z==3) expandContract=1;}
   else if(expandContract==1){dim+=0.5;z--; if(z==0) expandContract=0;}
   }

  var up=random(100,10000);
  if(pathTime>up){
  direction=parseInt(random(0,5));
  pathTime=0;
  }
  move(direction);

  var up2=random(100,10000);
  if(pathTime2>up2){
  direction2=parseInt(random(0,5));
  pathTime2=0;
  }

  move(direction);

  move2(direction2);
}

function drawGradient(x, y) {
 var radius = dim/2;
 from = color(255, 255, 0, 0.2 * 255);
  to = color(0, 255, 255, 0.2 * 255);
  col=lerpColor(from, to, .33);
  for (var r = radius; r > 0; r-=1) {
    fill(col, 90, 90);
    ellipse(x,y, r, r);//console.log(r);
     }

}

function move(i)
{  angle=random(-0.5,0.5);
   if(spot.x<0 && spot.x>windowWidth && spot.y<0 && spot.y>windowHeight)
     pathTime=100000;
     else{
  if(i==1)
    {spot.x+=0.5;
    spot.y+=angle;
    }
  else  if(i==2)
 {spot.x-=0.5;
 spot.y+=angle;
 }
  else if(i==3)
  {spot.y+=0.5;
  spot.x+=angle;
  }

  else  if(i==4)
     {spot.y-=0.5;
     spot.x+=angle;
     }
  }
}

function move2(i)
{  angle=random(-0.5,0.5);
   if(spot2.x<0 && spot2.x>windowWidth && spot2.y<0 && spot2.y>windowHeight)
     pathTime2=100000;
     else{
  if(i==1)
    {spot2.x+=0.5;
    spot2.y+=angle;
    }
  else  if(i==2)
 {spot2.x-=0.5;
 spot2.y+=angle;
 }
  else if(i==3)
  {spot2.y+=0.5;
  spot2.x+=angle;
  }

  else  if(i==4)
     {spot2.y-=0.5;
     spot2.x+=angle;
     }
  }
}

