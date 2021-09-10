img="";
status1="";
objects=[];
function setup()
{
    canvas=createCanvas(380,380);
canvas.center();
video=createCapture(VIDEO);
video.size(380,380);
video.hide();
objectDetector=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="status:dectecting objects";
}

function modelLoaded()
{
 console.log("modelLoaded");
 status1=true;
 
}






function draw()
{
image(video,0,0,380,380);
if(status1!="")
{
    r=random(255);
    g=random(255);
    b=random(256);

 objectDetector.detect(video,gotResult);
for(i=0;i<objects.length;i++)
{
 document.getElementById("status1").innerHTML="staus object detected";
 document.getElementById("no.of_objects").innerHTML="no.of_objects detected are"+objects.length;
 fill(r,g,b);
 percent=floor(objects[i].confidence*100);
 text(objects[i].label+""+percent+"%",objects[i].x,objects[i].y)
 noFill();
 rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
}
}


function preload()
{
 img=loadImage("dog_cat.jpg");

}

function gotResult(error,results)
{
 if(error)
 {
     console.log(error);
 }
 console.log(results)
 objects=results;
}