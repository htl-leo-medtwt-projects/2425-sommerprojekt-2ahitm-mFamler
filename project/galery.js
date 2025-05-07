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

// <reference path="animals.js"/>

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

    console.log(animals.animal[x].imgs[y]);

    //document.getElementById(`card${currAnimal}`).style.backgroundImage = `url(${animals.animal[x].imgs[y]})`;
    document.getElementById(`galery`).innerHTML += `<div class="pic" id="gal${currAnimal}" style="background-image: url(${animals.animal[x].imgs[y]});"></div>`;
}

function makeGalery() {
    fetchAnimal();
    pastX = x;
    currAnimal = 2;

    for(let i = 1; i <= 31; i++) {
        fetchAnimal();
        pastX = x;
        currAnimal = i;
    }

    //<div class="pic" id="gal1" style="background-image: url(images/gal/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2019__08__Flughahn-9d97be448aec49fc9588813913740351.jpg);"></div>
}

function moveToAccSetup() {
    window.location.href = "accSetUp.html";
}

makeGalery();