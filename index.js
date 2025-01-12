// alert("It's JavaScript!");
var k=document.firstElementChild.lastElementChild.firstElementChild;
k.innerHTML = "Dice game";

var randomnumber1=Math.floor(Math.random()*6)+1;
var randomdiceimg1 ="dice"+randomnumber1+".png";
// var randomimgsource1="image/"+randomdiceimg1;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomdiceimg1);

var random_number2=Math.floor(Math.random()*6)+1;
var random_diceimg2 ="dice"+random_number2+".png";

document.querySelectorAll("img")[1].setAttribute("src",random_diceimg2);

if(randomnumber1>random_number2){
    document.querySelectorAll("h1")[0].innerHTML="Player 1 wins";
}
else if(randomnumber1==random_number2){
    document.querySelectorAll("h1")[0].innerHTML="Draw";
}
else{
    document.querySelectorAll("h1")[0].innerHTML="Player 2 wins";
}
