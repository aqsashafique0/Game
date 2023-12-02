var dice1;
dice1=Math.random()*6;
dice1=Math.floor(dice1);
dice1=dice1+1;
var dice2;
dice2=Math.random()*6;
dice2=Math.floor(dice2);
dice2=dice2+1;
if(dice1>dice2)
{
    document.querySelector("h1").innerHTML="player1 wins🎌";
}
if(dice1<dice2)
{
    document.querySelector("h1").innerHTML="player2 wins🎌";

}
if(dice1==dice2){
    document.querySelector("h1").innerHTML="match draw";
}
if(dice1==1)
{
    var image=document.getElementById("img1");
    image.src="dice1.png";
}
if(dice1==2)
{
    var image=document.getElementById("img1");
    image.src="dice2.png";
}
if(dice1==3)
{
    var image=document.getElementById("img1");
    image.src="dice3.png";
}
if(dice1==4)
{
    var image=document.getElementById("img1");
    image.src="dice4.png";
}
if(dice1==5)
{
    var image=document.getElementById("img1");
    image.src="dice5.png";
}
if(dice1==6)
{
var image=document.getElementById("img1");
image.src="dice6.png";

}
if(dice2==1)
{
    var image=document.getElementById("img2");
    image.src="dice1.png";
}
if(dice2==2)
{
    var image=document.getElementById("img2");
    image.src="dice2.png";
}
if(dice2==3)
{
    var image=document.getElementById("img2");
    image.src="dice3.png";
}
if(dice2==4)
{
    var image=document.getElementById("img2");
    image.src="dice4.png";
}
if(dice2==5)
{
    var image=document.getElementById("img2");
    image.src="dice5.png";
}
if(dice2==6)
{
var image=getElementById("img2");
image.src="dice6.png";
}

