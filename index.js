function dice()
{
    var randomnumber=Math.random();
    randomnumber=randomnumber * 6;
    randomnumber=Math.floor(randomnumber) + 1;
    return randomnumber;
}

var randomnumber1=dice();
var randomnumber2=dice();

document.querySelector(".img1").setAttribute("src","./images/dice"+randomnumber1+".png");
document.querySelector(".img2").setAttribute("src","./images/dice"+randomnumber2+".png");

if(randomnumber1 > randomnumber2)
{
    document.querySelector("h1").innerHTML="🚩Player 1 wins!";
}
else if(randomnumber2 > randomnumber1)
{
    document.querySelector("h1").innerHTML="Player 2 wins!🚩";
}
else
{
    document.querySelector("h1").innerHTML="Draw!🏳️";
}