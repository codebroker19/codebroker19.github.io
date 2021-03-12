var a=Math.floor(Math.random()*6)+1;
var b="dice"+a+".png";
var c="images/"+b;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",c);

var a1=Math.floor(Math.random()*6)+1;
var b1="dice"+a1+".png";
var c1="images/"+b1;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",c1);
if(a>a1)
document.querySelector("h1").innerHTML="🚩Player 1 wins!";
if(a<a1)
document.querySelector("h1").innerHTML="Player 2 wins!🚩!";
if(a===a1)
document.querySelector("h1").innerHTML="Draw";
