let count = 0;
let total = 0;
let price =  0;

function buyone(){
    count += 1;
    price += 800;

    document.getElementById("count").innerText = count;
    document.getElementById("total").innerText = price;
}

function buytwo(){
    count += 1;
    price += 1300;

    document.getElementById("count").innerText = count;
    document.getElementById("total").innerText = price;
}

function buytree(){
    count += 1;
    price += 2500;

    document.getElementById("count").innerText = count;
    document.getElementById("total").innerText = price;
}

function buyfour(){
    count += 1;
    price += 1300;

    document.getElementById("count").innerText = count;
    document.getElementById("total").innerText = price;
}

function buyfive(){
    count += 1;
    price += 1800;

    document.getElementById("count").innerText = count;
    document.getElementById("total").innerText = price;
}

function buysix(){
    count += 1;
    price += 500;

    document.getElementById("count").innerText = count;
    document.getElementById("total").innerText = price;
}