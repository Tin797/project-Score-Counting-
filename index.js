document.getElementById("h-plus01").addEventListener("click",add);
document.getElementById("h-plus02").addEventListener("click",add02);
document.getElementById("h-plus03").addEventListener("click",add03);
document.getElementById("g-plus01").addEventListener("click",guestAdd01);
document.getElementById("g-plus02").addEventListener("click",guestAdd02);
document.getElementById("g-plus03").addEventListener("click",guestAdd03);
document.getElementById("resetToZero").addEventListener("click", setZero);
let setToZero = 0;
let homeResult = 0;
let guesResult = 0;

function setZero(){
    document.getElementById("home-points").innerHTML = setToZero;
    document.getElementById("guest-points").innerHTML = setToZero;
}
function add() {
    homeResult +=1;
    document.getElementById("home-points").innerHTML= homeResult
}

function add02() {
    homeResult +=2;
    document.getElementById("home-points").innerHTML= homeResult
}

function add03() {
    homeResult +=3;
    document.getElementById("home-points").innerHTML= homeResult
}

function guestAdd01(){
    guesResult +=1
    document.getElementById("guest-points").innerHTML = guesResult
}

function guestAdd02(){
    guesResult +=2
    document.getElementById("guest-points").innerHTML = guesResult
}

function guestAdd03(){
    guesResult +=3
    document.getElementById("guest-points").innerHTML = guesResult
}