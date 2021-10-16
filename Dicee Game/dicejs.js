var random1 = Math.floor((Math.random() * 6) + 1);
var random2 = Math.floor((Math.random() * 6) + 1);
var x = "images/dice" + random1 + ".png";
var y = "images/dice" + random2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src" , x);
document.querySelectorAll("img")[1].setAttribute("src" , y);
if(random1 > random2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!!";
}
else{
    if(random1 == random2){
        document.querySelector("h1").innerHTML = "Draw!!";
    }
    else{
        document.querySelector("h1").innerHTML = "Player 2 Wins!!";
    }
}