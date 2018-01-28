var spot={
  x:0,
  y:0
} ;

var spot2={x:800,y:800};
var spot3={x:0,y:800};
var spot4={x:800,y:0};
var spot5={x:400,y:400};


var col= {
  r:255,
  g:255,
  b:255,
};
var a=50;

 var img;
function preload() {
  img = loadImage("assets/photo_grid.jpg");
}
function setup() {
	createCanvas(img.width, img.height);
  background(255);
   imageMode(CENTER);
  img.loadPixels();
}
  var t=0;
    var i=3;
    var j=2;
    var k=1;
    var l=4;
    var m=4;
//    var l=0;
function draw() {
  //spot.x=random(0,600);
  //spot.y=random(0,400);
  //col.r=map(spot.y,0,600,0,255);
  //col.b=map(spot.y,0,600,0,100);

  noStroke();
  fill(col.r,col.g,col.b,a);
  var x = floor(random(img.width));
  var y = floor(random(img.height));

  var pix = img.get(spot.x, spot.y);
  fill(pix, 128);
  ellipse(spot.x,spot.y,20,20);

  var pix = img.get(spot2.x, spot2.y);
  fill(pix, 128);
  ellipse(spot2.x,spot2.y,20,20);

   //console.log(spot2.x,",",spot2.y);

  var pix = img.get(spot3.x, spot3.y);
  fill(pix, 128);
  ellipse(spot3.x,spot3.y,20,20);

  var pix = img.get(spot4.x, spot4.y);
  fill(pix, 128);
  ellipse(spot4.x,spot4.y,20,20);
  
  var pix = img.get(spot5.x, spot5.y);
  fill(pix, 128);
  ellipse(spot5.x,spot5.y,20,20);
 /* t++;
  var up=random(100,10000);
  if(t>up){
  i=parseInt(random(0,5));
  // s=random(-0.5,0.5);
   t=0;
  }
  */
 // debug.log(i);
 i=parseInt(random(0,5));
  if(i==1)
  {if(spot.x<img.width) spot.x+=20;}
  else   if(i==2)
  {if(spot.x>0) spot.x-=20;}
    else   if(i==3)
  {if(spot.y<img.height) spot.y+=20;}
    else   if(i==4)
  {if(spot.y>0) spot.y-=20;}
  
  j=parseInt(random(0,5));
  if(j==1)
  {if(spot2.x<img.width) spot2.x+=20;}
  else   if(j==2)
  {if(spot2.x>0) spot2.x-=20;}
    else   if(j==3)
  {if(spot2.y<img.height) spot2.y+=20;}
    else   if(j==4)
  {if(spot2.y>0) spot2.y-=20;}
   
   k=parseInt(random(0,5));
  if(k==1)
  {if(spot3.x<img.width) spot3.x+=20;}
  else   if(k==2)
  {if(spot3.x>0) spot3.x-=20;}
    else   if(k==3)
  {if(spot3.y<img.height) spot3.y+=20;}
    else   if(k==4)
  {if(spot3.y>0) spot3.y-=20;}
   
   l=parseInt(random(0,5));
  if(l==1)
  {if(spot4.x<img.width) spot4.x+=20;}
  else   if(l==2)
  {if(spot4.x>0) spot4.x-=20;}
    else   if(l==3)
  {if(spot4.y<img.height) spot4.y+=20;}
    else   if(l==4)
  {if(spot4.y>0) spot4.y-=20;}

  m=parseInt(random(0,5));
  if(m==1)
  {if(spot5.x<img.width) spot5.x+=20;}
  else   if(m==2)
  {if(spot5.x>0) spot5.x-=20;}
    else   if(m==3)
  {if(spot5.y<img.height) spot5.y+=20;}
    else   if(m==4)
  {if(spot5.y>0) spot5.y-=20;}

   //if(movin==false)
  // move(i);
}

function move(i)
{  s=random(-0.5,0.5);
   if(spot.x<0 && spot.x>img.width && spot.y<0 && spot.y>img.height)
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

