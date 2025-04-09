//var
let cardCont;
let imgs;
let vid;

//func
function fetchAnimal() {
    fetch('animals.json')
    .then( (response) => {
        return response.json();
    })
    .then( (animal))
}

function bookmark() {

}

function heart() {

}

function accSetUpQuick() {

}

function loadCards() {
    cardCont += `
        <div class="card">
            <div class="try_card">
                <img src="images/icons/bookmarkOGwithshadownew.png" alt="bookmark" class="bookmark" onclick="bookmark()">

                <div class="card-img" style="background-image: url(${img});" id="card1"></div>  

                <div class="card_txt">
                    <h1 class="name, txt" >${name}</h1>
                    <h3 class="txt" >${latin name}</h3>
                    <p class="txt" >${location}</p>
                    <p class="txt">${family}</p>
                    <a href="${vid}" class="txt" >video</a><br>
                    <a href="${artc}" class="txt" >article</a><br>
                </div>

                <img src="images/icons/heart.png" alt="heart" class="heart" onclick="heart()">
            </div>
        </div>
    `
}

function loadImgs() {

}

function loadVid() {

}

//calling
loadCards();
