 let firefly1, firefly2, firefly3, firefly4, firefly5, firefly6, firefly7, firefly8, firefly9, firefly10;
 var pathTime=0;
 var glowTimer=0;
 var direction=3;
 var angle=0;
 var z=0;
 var expandContract=0;
  var direction2=3;
  var pathTime2=0;
  
  var col= {
  r:255,
  g:255,
  b:255,
};

 function setup() {
 	createCanvas(windowWidth, windowHeight);

 	dim = 15;
         ellipseMode(RADIUS);
         frameRate(100);
         firefly1=new firefly(random(0,windowWidth),random(0,windowHeight),1);
         firefly2=new firefly(random(0,windowWidth),random(0,windowHeight),2);
         firefly3=new firefly(random(0,windowWidth),random(0,windowHeight),3);
         firefly4=new firefly(random(0,windowWidth),random(0,windowHeight),4);
         firefly5=new firefly(random(0,windowWidth),random(0,windowHeight),1);
         firefly6=new firefly(random(0,windowWidth),random(0,windowHeight),2);
         firefly7=new firefly(random(0,windowWidth),random(0,windowHeight),4);
         firefly8=new firefly(random(0,windowWidth),random(0,windowHeight),2);
         firefly9=new firefly(random(0,windowWidth),random(0,windowHeight),3);
         firefly10=new firefly(random(0,windowWidth),random(0,windowHeight),2);
 }
function draw() {
   background(0);
   noStroke();

   drawGradient2(firefly1.x, firefly1.y);
   drawGradient2(firefly2.x, firefly2.y);
   drawGradient2(firefly3.x, firefly3.y);
   drawGradient2(firefly4.x, firefly4.y);
   drawGradient2(firefly5.x, firefly5.y);
   drawGradient2(firefly6.x, firefly6.y);
   drawGradient2(firefly7.x, firefly7.y);
   drawGradient2(firefly8.x, firefly8.y);
   drawGradient2(firefly9.x, firefly9.y);
   drawGradient2(firefly10.x, firefly10.y);

   glowTimer++;
   if(parseInt(glowTimer)%2==0){
     if(expandContract==0){dim-=0.5;z++;if(z==3) expandContract=1;}
    else if(expandContract==1){dim+=0.5;z--; if(z==0) expandContract=0;}
    }
   firefly1.changeDir();
   firefly2.changeDir();
   firefly3.changeDir();
   firefly4.changeDir();
   firefly5.changeDir();
   firefly6.changeDir();
   firefly7.changeDir();
   firefly8.changeDir();
   firefly9.changeDir();
   firefly10.changeDir();

   firefly1.Move(firefly1.dir);
   firefly2.Move(firefly2.dir);
   firefly3.Move(firefly3.dir);
   firefly4.Move(firefly4.dir);
   firefly5.Move(firefly5.dir);
   firefly6.Move(firefly6.dir);
   firefly7.Move(firefly7.dir);
   firefly8.Move(firefly8.dir);
   firefly9.Move(firefly9.dir);
   firefly10.Move(firefly10.dir);
}

class firefly
{

  constructor(X,Y,d){
    this.x=X;
    this.y=Y;
    this.dir=d;
    this.pathTime=0;
    this.up=random(100,1000);
  }
  changeDir()
  {
    this.pathTime++;

    if(this.pathTime>this.up)
    {
      this.dir=parseInt(random(0,5));
      this.up=random(100,1000);
      this.pathTime=0;
    }
  }

   Move(i)
   {  angle=random(-0.5,0.5);
   if(this.x<0 && this.x>windowWidth && this.y<0 && this.y>windowHeight)
     this.pathTime=10000;
     else{
  if(i==1)
    {this.x+=0.5;
    this.y+=angle;
    }
  else  if(i==2)
 {this.x-=0.5;
 this.y+=angle;
 }
  else if(i==3)
  {this.y+=0.5;
  this.x+=angle;
  }

  else  if(i==4)
     {this.y-=0.5;
     this.x+=angle;
     }
  }
}
}
function   drawGradient2(X, Y) {
   var radius = dim/2;
    var from = color(255, 255, 0, 0.2 * 255);
    var to = color(0, 255, 255, 0.2 * 255);
   col=lerpColor(from, to, .33);
    for (var r = radius; r > 0; r-=1) {
    fill(col, 90, 90);
    ellipse(X,Y, r, r);//console.log(r);
   }
  }
