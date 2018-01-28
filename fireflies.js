var spot={
  x:100,
  y:100
} ;

var col= {
  r:255,
  g:255,
  b:255,
};
var a=50;


function setup() {
	createCanvas(600, 400);


}
  var t=0;
    var i=3;
    var s=0;
function draw() {
   background(0);
  //spot.x=random(0,600);
  //spot.y=random(0,400);
  //col.r=map(spot.y,0,600,0,255);
  //col.b=map(spot.y,0,600,0,100);

  noStroke();
  fill(col.r,col.g,col.b,a);
  ellipse(spot.x,spot.y,20,20);
   console.log(spot.x,",",spot.y);
  t++;
  var up=random(100,10000);
  if(t>up){
  i=parseInt(random(0,5));
  // s=random(-0.5,0.5);
   t=0;
  }


   move(i);
}

function move(i)
{  s=random(-0.5,0.5);
   if(spot.x<0 && spot.x>600 && spot.y<0 && spot.y>400)
     t=100000;
     else{
  if(i==1)
    {spot.x+=0.5;
    spot.y+=s;
    }

  else  if(i==2)
 {spot.x-=0.5;
 spot.y+=s;
 }

  else if(i==3)
  {spot.y+=0.5;
  spot.x+=s;
  }

  else  if(i==4)
     {spot.y-=0.5;
     spot.x+=s;
     }


  }
}

