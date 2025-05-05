//var
let cardCont;
let imgs;
let vid;
let isFilled = false;
let isHearted = false;
let galery = [[], []]; 
let x;
let y;
let currPosOfX;
let currAnimal = 1;
let pastX;

//ref
// <reference path="animals.js"/>

//func

function rollFirstValue() {
    x = Math.floor(Math.random() * animals.animal.length);
    //console.log(x);

    let hasFoundSpace = false;
    for(let i = 0; i < galery.length && hasFoundSpace == false; i++) {
        if(galery[0][i] = null) {
            galery[0][i] = x;
            hasFoundSpace = true;
            currPosOfX = i;
        }
    }
}

function rollSecondValue() {
    y = Math.floor(Math.random() * 5);
    //console.log(y);

    //check if the second value has been used again for that animal alr
    //checkForSimiliarSecValue();

    let hasFoundSpace = false;
    for(let i = 0; i < galery.length && hasFoundSpace == false; i++) {
        if(galery[1][currPosOfX] = null) {
            galery[1][currPosOfX] = y;
            hasFoundSpace = true;
        }
    }
}

function checkForSimiliarSecValue() {
    let youPass = false;
    for(let i = 0; i < galery.length && youPass == false; i++) {
        if(galery[0][i] = x) {
            if(galery[1][currPosOfX] = y) {
                rollSecondValue();
            }
            else {
                youPass = true;
            }
        }
    }
}

function fetchAnimal() {
    console.log(animals.animal);

    //roll the first value this chooses the animal
    rollFirstValue();
    while(pastX == x) {
        rollFirstValue();
    }

    //now roll for a value between 0-4 to choose a picture from the animal
    rollSecondValue();

    //now if everything is correct the html values can be changed
    /*
    <div class="card-img" style="background-image: url(images/seal-lion.jpg);" id="card1"></div>  

                <div class="card_txt">
                    <h1 class="name, txt" >Sea Lion</h1>
                    <h3 class="txt" >Otariinae</h3>
                    <p class="txt" >Pacific ocean</p>
                    <p class="txt">family</p>
                    <a href="#" class="txt" >video</a><br>
                    <a href="#" class="txt" >article</a><br>
                </div>
    */
    console.log(animals.animal[x].imgs[y]);
    console.log(animals.animal[x].name);
    console.log(animals.animal[x].latin_name);
    console.log(animals.animal[x].location);
    console.log(animals.animal[x].family);
    console.log(animals.animal[x].video);
    console.log(animals.animal[x].article);

    document.getElementById(`card${currAnimal}`).style.backgroundImage = `url(${animals.animal[x].imgs[y]})`;
    document.getElementById(`name${currAnimal}`).innerHTML = animals.animal[x].name;
    document.getElementById(`latin${currAnimal}`).innerHTML = animals.animal[x].latin_name;
    document.getElementById(`loc${currAnimal}`).innerHTML = animals.animal[x].location;
    document.getElementById(`fam${currAnimal}`).innerHTML = animals.animal[x].family;
    document.getElementById(`vid${currAnimal}`).innerHTML = animals.animal[x].video[0];
    document.getElementById(`art${currAnimal}`).innerHTML = animals.animal[x].article;

}

function bookmark(nr) {
    if(isFilled == false) {
        document.getElementById(`bm${nr}`).src = "images/icons/bookmarkfilledbluewithshadownew.png";
        isFilled = true;
    }
    else {
        document.getElementById(`bm${nr}`).src = "images/icons/bookmarkOGwithshadownew.png";
        isFilled = false;
    }
}

function heart(nr) {
    if(isHearted == false) {
        document.getElementById(`h${nr}`).src = "images/icons/heartGrey.png";
        isHearted = true;
    }
    else {
        document.getElementById(`h${nr}`).src = "images/icons/heart.png";
        isHearted = false;
    }
}

function accSetUpQuick() {

}

function loadCards() { // u need to call fetch animal twice since everything works one at a time
    /*cardCont += `
       <div class="card">
            <div class="try_card">
                <img src="images/icons/bookmarkOGwithshadownew.png" alt="bookmark" class="bookmark" onclick="bookmark()">

                <div class="card-img" style="background-image: url(images/seal-lion.jpg);" id="card1"></div>  

                <div class="card_txt">
                    <h1 class="name, txt" >Sea Lion</h1>
                    <h3 class="txt" >Otariinae</h3>
                    <p class="txt" >Pacific ocean</p>
                    <p class="txt">family</p>
                    <a href="#" class="txt" >video</a><br>
                    <a href="#" class="txt" >article</a><br>
                </div>

                <img src="images/icons/heart.png" alt="heart" class="heart" onclick="heart()">
            </div>
        </div>
    `*/

    fetchAnimal();
    pastX = x;
    currAnimal = 2;

    fetchAnimal();
}

function loadImgs() {

}

function loadVid() {

}

function navFill() {
    console.log("fill")
}

function moveToAccSetup() {
    window.location.href = "accSetUp.html";
}

function changeIcon(pfp) {
    console.log(pfp);

    document.getElementById("icon").innerHTML = `<img src="${pfp}" alt="pfp" id="try" onclick="accSetUpQuick()"></img>`;
    console.log("changed icon");
}


//calling
loadCards();
