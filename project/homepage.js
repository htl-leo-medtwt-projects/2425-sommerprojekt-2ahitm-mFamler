//var
let cardCont;
let imgs;
let vid;
let bmFilled = "";
let isFilled = false;


//func
function fetchAnimal() {
    fetch('animals.json')
    .then( (response) => {
        return response.json();
    })
    .then( (animal) => {
        console.log(animal);
    })
    .catch( (error) => {
        throw error;
    })
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

function heart() {

}

function accSetUpQuick() {

}

function loadCards() {
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
}

function loadImgs() {

}

function loadVid() {

}

//calling
fetchAnimal();
