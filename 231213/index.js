//index.js
let cookies = 0;
let clicker = 0;
let clickPowerSauce = 0;
let cursorCounter = 0;
let clickPowerCounter = 0
let cursorPowerCost = 10;
let clickPowerCost = 10;

function get(){
    if(clickPowerSauce == 0){          
        cookies = cookies + 1;
        document.getElementById("cookie").innerHTML = "クッキーの数:" + parseInt(cookies);
    }

    if(clickPowerSauce == 1){
        cookies = cookies + 1 + clicker;
        document.getElementById("cookie").innerHTML = "クッキーの数:" + cookies;
    }
}

function upgrade(){
    if(cookies >= cursorPowerCost) {
        cookies -= cursorPowerCost;

        cursorCounter += 1;
        document.getElementById("cursorCounter").innerHTML = cursorCounter;

        document.getElementById("cookie").innerHTML = "クッキーの数:" + cookies;
        setInterval(get,1000) //毎秒増える

        cursorPowerCost *= 2;
        document.getElementById("cursor").innerHTML = "カーソル<br>コスト:" + cursorPowerCost;
    }else{
        alert("クッキーが足りません!")
    }
}

function clickPower(){
    if(cookies >= clickPowerCost) {
        cookies -= clickPowerCost;

        clickPowerCounter += 1;
        document.getElementById("clickPowerCounter").innerHTML = clickPowerCounter;

        document.getElementById("cookie").innerHTML = "クッキーの数:" + cookies;
        clicker += 1; //クリック強化

        clickPowerCost *= 2;
        document.getElementById("clickPower").innerHTML = "クリック強化<br>コスト:" + clickPowerCost;
    }else{
        alert("クッキーが足りません!")
    }
}