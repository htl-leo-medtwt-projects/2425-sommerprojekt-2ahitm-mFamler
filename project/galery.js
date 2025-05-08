//var
/*let cardCont;
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

    for(let i = 1; i <= 32; i++) {
        fetchAnimal();
        pastX = x;
        currAnimal = i;
    }

    //<div class="pic" id="gal1" style="background-image: url(images/gal/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2019__08__Flughahn-9d97be448aec49fc9588813913740351.jpg);"></div>
}

function moveToAccSetup() {
    window.location.href = "accSetUp.html";
}

makeGalery();*/

//const array = [[11], [1]]; 
const array = Array.from({ length: 32 }, () => [null, null]);
let aNr;
let iNr;
function fetchGal() {
    console.log(animals.animal);
    let tempAn = 1;

    for(let i = 0; i < 32; i++) {
        console.log("pic " + i)
        aNr = Math.floor(Math.random() * 10);
        console.log("val 1: " + aNr);
        array[i][0] = aNr; 

        iNr = Math.floor(Math.random() * 5);
        let temp = iNr;
        console.log("temp val 2: " + iNr);

        /*while(array[i][1] == temp && array[i][0] == aNr) {
            console.log("hit");
            console.log("");
            
        }*/

        let temp1;
        let temp2;
        for(let j = 0; j < array.length - 1; j++) {
            temp1 = array[j][1];
            temp2 = array[j][0];
            while(temp1 == temp && temp2 == aNr) {
                iNr = Math.floor(Math.random() * 5);
                temp = iNr;

                console.log("temp sec val: " + temp);
            }
        }

        console.log("fin val 1: " + aNr);
        console.log("fin val 2: " + iNr);
        array[i][1] = iNr;
        tempAn++;

        console.log(animals.animal[aNr].imgs[iNr])
        console.log("");
        

        document.getElementById(`galery`).innerHTML += `<div class="pic" id="gal${tempAn}" style="background-image: url(${animals.animal[aNr].imgs[iNr]});"></div>`;
    }

    
}

function moveToAccSetup() {
    window.location.href = "accSetUp.html";
}

fetchGal();
