var spot={
  x:0,
  y:0
} ;

var spot2={x:800,y:800};
var spot3={x:0,y:800};
var spot4={x:800,y:0};
var spot5={x:400,y:400};
var spot6={y:[0,20,40,60,80,100,120,140,160,180,200,220,240,260,280,300,320,340,360,380,400,420,440,460,480,500,520,540,560,580,600,620,640,660,680,700,720,740,760,780,800],x:0};

var ev=0;

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
  if(ev==0){
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
   }

  if(ev==1)
  {
    var pix = img.get(spot6.x, spot6.y[0]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[0],20,20);
       spot6.x+=20;
       //console.log(spot6.x,",",spot6.y[0]);
       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[1]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[1],20,20);
       spot6.x+=20;

       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[2]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[2],20,20);
       spot6.x+=20;

       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[3]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[3],20,20);
       spot6.x+=20;

       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[4]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[4],20,20);
       spot6.x+=20;

       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[5]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[5],20,20);
       spot6.x+=20;

       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[6]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[6],20,20);
       spot6.x+=20;

       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[7]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[7],20,20);
       spot6.x+=20;

       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[8]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[8],20,20);
       spot6.x+=20;
       
       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[9]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[9],20,20);
       spot6.x+=20;
       
       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[10]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[10],20,20);
       spot6.x+=20;
       
       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[11]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[11],20,20);
       spot6.x+=20;
       
       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[12]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[12],20,20);
       spot6.x+=20;
       
       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[13]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[13],20,20);
       spot6.x+=20;
       
       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[14]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[14],20,20);
       spot6.x+=20;
       
       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[15]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[15],20,20);
       spot6.x+=20;
       
       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[16]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[16],20,20);
       spot6.x+=20;
       
       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[17]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[17],20,20);
       spot6.x+=20;
       
       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[18]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[18],20,20);
       spot6.x+=20;
       
       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[19]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[19],20,20);
       spot6.x+=20;
       
       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[20]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[20],20,20);
       spot6.x+=20;
       
       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[21]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[21],20,20);
       spot6.x+=20;

       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[22]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[22],20,20);
       spot6.x+=20;
       
       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[23]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[23],20,20);
       spot6.x+=20;
       
       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[24]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[24],20,20);
       spot6.x+=20;
       
       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[25]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[25],20,20);
       spot6.x+=20;
       
       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[26]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[26],20,20);
       spot6.x+=20;
       
       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[27]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[27],20,20);
       spot6.x+=20;
       
       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[28]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[28],20,20);
       spot6.x+=20;
       
       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[29]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[29],20,20);
       spot6.x+=20;
       
       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[30]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[30],20,20);
       spot6.x+=20;
       
       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[31]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[31],20,20);
       spot6.x+=20;
       
       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[32]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[32],20,20);
       spot6.x+=20;
       
       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[33]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[33],20,20);
       spot6.x+=20;
       
       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[34]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[34],20,20);
       spot6.x+=20;
       
       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[35]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[35],20,20);
       spot6.x+=20;
       
       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[36]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[36],20,20);
       spot6.x+=20;
       
       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[37]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[37],20,20);
       spot6.x+=20;
       
       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[38]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[38],20,20);
       spot6.x+=20;
       
       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[39]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[39],20,20);
       spot6.x+=20;
       
       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[40]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[40],20,20);
       spot6.x+=20;
       
       if(spot6.x>800)spot6.x=0;
       var pix = img.get(spot6.x, spot6.y[41]);
       fill(pix, 128);
       ellipse(spot6.x,spot6.y[41],20,20);
       spot6.x+=20;
      // if(spot6.x>800){spot6.x=0;}
  }

   //if(movin==false)
  // move(i);
}

function mousePressed(){
  console.log("clicked!");
      if(ev==0) ev=1;
      else ev=0;
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

