let pfp = {
    pfp1: "",
    pfp2: "",
    pfp3: "",
    pfp4: "",
    pfp5: ""
}

function save() {
    console.log("save");
    checkIfPwAlign();
    checkIfUserLongEnough();
}

function changePfp() {
    console.log("pfp");
    let randNr = Math.floor(Math.random() * 5);

    document.getElementById("try") = `<img src="${pfp[randNr]}" alt="pfp" id="try"></img>`;
}

function checkIfPwAlign() {
    let pw1 = document.getElementById("pw1").value;
    let pw2 = document.getElementById("pw2").value;

    if(pw1 != false) {
        if(pw1 == pw2) {
            console.log("same");
        }
        else {
            console.log("not same");
        }
    }
    else {
        console.log("pw1 is missing")
    }
}

function checkIfUserLongEnough() {
    let name = document.getElementById("name").value;
    console.log("name:" + name);

    if(name.length == false) {
        console.log("user name too short");
    }
    else {
        console.log("long enough");
    }
}

function escapeToHomepage() {
    window.location.href = "./homepage.html";
}

//outside code from copilot
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' || event.key === 'Esc') {
        console.log('Escape key was pressed!');
        // You can add your custom logic here
        //adding my own code needed
        escapeToHomepage();
    }
});