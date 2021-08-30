var canvas=new fabric.Canvas("myCanvas");
block_image_width=30;
block_image_height=30;
player_x=10;
player_y=10;
var player_object="";
function player_update()
{
    fabric.Image.fromURL("player.png", function(Img)
    {
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    })
}
function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img)
    {
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    })
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey==true && keyPressed == "80")
    {
        console.log("P key and shift key has been pressed together");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if (e.shiftKey==true && keyPressed == "77")
    {
        console.log("M key and shift key has been pressed together");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if (keyPressed=="38")
    {
        up();
        console.log("Up arrow key has been pressed");
    }
    if (keyPressed=="40")
    {
        down();
        console.log("Down arrow key has been pressed");
    }
    if (keyPressed=="37")
    {
        left();
        console.log("Left arrow key has been pressed");
    }
    if (keyPressed=="39")
    {
        right();
        console.log("Right arrow key has been pressed");
    }
    if (keyPressed=="87")
    {
        console.log("W key has been pressed");
        new_image("wall.jpg");
    }
    if (keyPressed=="71")
    {
        console.log("G key has been pressed");
        new_image("ground.png");
    }
    if (keyPressed=="76")
    {
        console.log("L key has been pressed");
        new_image("light_green.png");
    }
    if (keyPressed=="84")
    {
        console.log("T key has been pressed");
        new_image("trunk.jpg");
    }
    if (keyPressed=="82")
    {
        console.log("R key has been pressed");
        new_image("roof.jpg");
    }
    if (keyPressed=="89")
    {
        console.log("Y key has been pressed");
        new_image("yellow_wall.png");
    }
    if (keyPressed=="68")
    {
        console.log("D key has been pressed");
        new_image("dark_green.png");
    }
    if (keyPressed=="67")
    {
        console.log("C key has been pressed");
        new_image("cloud.jpg");
    }
    if (keyPressed=="85")
    {
        console.log("U key has been pressed");
        new_image("unique.png");
    }
}
function up()
{
if (player_y>=0)
{
    player_y=player_y-block_image_height;
    console.log("Block_Image_Height="+block_image_height);
    console.log("When up arrow key is pressed, x="+player_x+" y="+player_y);
    canvas.remove(player_object);
    player_update();    
}
}
function down()
{
    if (player_y<=500)
    {
        player_y=player_y+block_image_height;
        console.log("Block_Image_Height"+block_image_height);
        console.log("When down arrow key is pressed, x="+player_x+" y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left()
{
    if (player_x>=0)
    {
        player_x=player_x-block_image_width;
        console.log("Block_Image_Width"+block_image_width);
        console.log("When left arrow key is pressed, x="+player_x+" y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right()
{
    if (player_x<=900)
    {
        player_x=player_x+block_image_width;
        console.log("Block_Image_Width"+block_image_width);
        console.log("When right arrow key is pressed, x="+player_x+" y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}