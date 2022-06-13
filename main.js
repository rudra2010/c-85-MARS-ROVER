canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

nasa_array=["nasa-1.jpg","nasa-2.jfif","nasa-3.jfif","nasa-4.jfif"];
random_number = Math.floor(Math.random() * 4);
rover_width= 101;
rover_height=92;

background_image=nasa_array[random_number];
console.log("background_image="+background_image);
rover_image="rover.png";
 rover_x=10;
 rover_y=10;
 function add(){
     background_image_tag=new Image();
     background_image_tag.onload=uploadbackground ;
     background_image_tag.src= background_image;

     rover_image_tag=new Image();
     rover_image_tag.onload=uploadrover ;
     rover_image_tag.src= rover_image;
 }
 function uploadbackground(){
     ctx.drawImage(background_image_tag,0,0,canvas.width,canvas.height);

 }
 function uploadrover(){
    ctx.drawImage(rover_image_tag,rover_x,rover_y,rover_width,rover_height);
    
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=="38"){
        up();
        console.log("up");

    }
    if(keypressed=="40"){
        down();
        console.log("down");
    }
    if(keypressed=="37"){
         left();
         console.log("left");
     }
     if(keypressed=="39"){
     right();
        console.log("right");
    }
     


}
function up()
{
 if(rover_y >=0) {
rover_y = rover_y - 10;
 console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
 uploadbackground(); 
 uploadrover();
 }
 }

 function down()
{
 if(rover_y <=500) {
rover_y = rover_y + 10;
 console.log("When down arrow is pressed, x = " + rover_x + " | y = " +rover_y);
 uploadbackground(); 
 uploadrover();
 }
 }

 function left()
{
 if(rover_x >=0) {
rover_x = rover_x - 10;
 console.log("When left arrow is pressed, x = " + rover_x + " | y = " +rover_y);
 uploadbackground(); 
 uploadrover();
 }
 }

 function right()
{
 if(rover_x <=700) {
rover_x = rover_x + 10;
 console.log("When right arrow is pressed, x = " + rover_x + " | y = " +rover_y);
 uploadbackground(); 
 uploadrover();
 }
 }


