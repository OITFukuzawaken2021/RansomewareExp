function pushmail1(){
    document.getElementById("mail1").style.display="block";
}

function Closemail1(){
    document.getElementById("mail1").style.display="none";
}

function pushmail2(){
    document.getElementById("mail2").style.display="block";
}
function Closemail2(){
    document.getElementById("mail2").style.display="none";
}
function pushmail3(){
    document.getElementById("mail3").style.display="block";
}
function Closemail3(){
    document.getElementById("mail3").style.display="none";
}
function pushmail4(){
    document.getElementById("mail4").style.display="block";
}
function Closemail4(){
    document.getElementById("mail4").style.display="none";
}
function pushmail5(){
    document.getElementById("mail5").style.display="block";
}
function Closemail5(){
    document.getElementById("mail5").style.display="none";
}
function pushmail6(){
    document.getElementById("mail6").style.display="block";
}
function Closemail6(){
    document.getElementById("mail6").style.display="none";
}
function pushmail7(){
    document.getElementById("mail7").style.display="block";
}
function Closemail7(){
    document.getElementById("mail7").style.display="none";
}
function pushmail8(){
    document.getElementById("mail8").style.display="block";
}
function Closemail8(){
    document.getElementById("mail8").style.display="none";
}
function pushmail9(){
    document.getElementById("mail9").style.display="block";
}
function Closemail9(){
    document.getElementById("mail9").style.display="none";
}


function pushbutton(){
    document.getElementById("botan").style.display="block";
}
function Closebutton(){
    document.getElementById("botan").style.display="none";
}

let clickedt;
let clickedp;

function Runmailtop(){
    if (clickedt !== true) {
        top.RunRansamT();
    }
    clickedt = true;
}

function Runmailparent(){
    if (clickedp !== true) {
        parent.RunRansamP();
    }
    clickedp = true;
}

