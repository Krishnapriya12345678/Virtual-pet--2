class Food{
    constructor(){

this.foodStock=0

this.image=loadImage("images/Milk(1).png")


    }







display(){
 var count= this.foodStock

for (var j=0;j<700;j=j+50){

    for(var i=0;i<450;i=i+50){
        if(count>0){
            this.image(this.image,50+i,250+j,50,50)
            count--}}}
        }

        updateFood(count){
            this.foodStock=count
        }
    }





    

















    



















































