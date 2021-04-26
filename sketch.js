var fixedrec , movingrec;

function setup() 
{
  createCanvas(1200,800);
  movingrec=createSprite(400, 200, 50, 50);
  movingrec.shapeColor="green";


  fixedrec=createSprite(600,450,80,80);
  fixedrec.shapeColor="green";
}

function draw()
 {
  
 background("yellow");  

  movingrec.x=World.mouseX;
  movingrec.y=World.mouseY;

  console.log(movingrec.x);
//  console.log(fixedrec.x);
  if(movingrec.x-fixedrec.x<fixedrec.width/2+movingrec.width/2 && 
    fixedrec.x-movingrec.x<fixedrec.width/2+movingrec.width/2&&
    movingrec.y-fixedrec.y<fixedrec.height/2+movingrec.height/2 && 
    fixedrec.y-movingrec.y<fixedrec.height/2+movingrec.height/2)

 {
  movingrec.shapeColor="orange";
  fixedrec.shapeColor = "orange";
 } 
 else{
   fixedrec.shapeColor="green";
   movingrec.shapeColor="green";
 }
  

  drawSprites();
}