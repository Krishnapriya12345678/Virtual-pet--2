





 var dog,dogImage,happy,database,FoodStock,FoodS
 var fedTime,lastFed
  var foodObj
var FoodS=20
function preload()
{


}

function setup() {
  createCanvas(800, 800);

//=new foodObj()


  var button1=createButton("FEED CHESSECAKE")
   button1.position(400,100)
   button1.mousePressed(FeedDog)
 



   var button=createButton("ADD MILK")
   button.position(700,100)
   button.mousePressed(addFood)
 














  dog=createSprite(400,500,20,50)
  dog.scale=0.2
  dogImage=loadImage("images/dogImg.png")
  dogImage1=loadImage("images/dogImg1.png")
  dog.addImage("dog",dogImage)
 

  //dogHouseImage=loadImage("images/dogHouse.png")

  database= firebase.database()
  FoodStock=database.ref('Food')
  FoodStock.on("value",stock)


 

}


function draw() {  
background('black')

  drawSprites();

//oodObj.display()


  milk=createSprite(190,100,20,50)
  milk.scale=0.05

//if(keyWentDown(UP_ARROW)){
  
 // dog.addImage("dog",dogImage1)
  
  //if(FoodS<0){
   // FoodS=0
  //}else{
 //   FoodS=FoodS-1/
  //}
  //writeStock(FoodS)

  

  //}
    
  
  
  textSize(17)
  fill('blue')
textSize(20)
  fill('blue')
  text("MILK  :  "  +FoodS,200,100)

  FeedTime=database.ref('FeedTime')
  FeedTime.on("time",function(data){
    lastFed=data.val
  })

  
  if(lastFed>=12){
    text("Last feed :"+lastFed%12+"PM",350,30)
  }else if (lastFed==0){
    text("Last feed : 12AM",350,30 )
  }else {
    text("Last feed : "+lastFed,350,30)
  }
  
}
function writeTime(x){

  database.ref('/').update({
    Time:x
  })
}
function stock(data){

FoodS=data.val()
}
function writeStock(x){

  database.ref('/').update({
    Food:x
  })

  }
function addFood(){
  dog.addImage("dog",dogImage)
  FoodS++
  database.ref('/').update({
  Food:FoodS
  })
 
}

function FeedDog(){
  dog.addImage("dog",dogImage1)
  FoodS--
  database.ref('/').update({
Food:FoodS

  })
   database.ref('/').update({
    Time:lastFed
  })
  
}




























  