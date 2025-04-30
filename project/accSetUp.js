let pfp = {
    pfp1: "",
    pfp2: "",
    pfp3: "",
    pfp4: "",
    pfp5: "",
    pfp6: "",
    pfp7: "",
    pfp8: "",
    pfp9: "",
    pfp10: "",
    pfp11: "",
    pfp12: "",
    pfp13: "",
    pfp14: "",
    pfp15: "",
    pfp16: "",
    pfp17: "",
    pfp18: "",
    pfp19: "",
    pfp20: "",
    pfp21: "",
    pfp22: "",
    pfp23: "",
    pfp24: "",
    pfp25: "",
    pfp26: "",
    pfp27: "",
    pfp28: "",
    pfp29: "",
    pfp30: "",
    pfp31: "",
    pfp32: "",
    pfp33: "",
    pfp34: ""
}

function save() {
    console.log("save");
    checkIfPwAlign();
    checkIfUserLongEnough();
}

function changePfp() {
    console.log("pfp");
    let randNr = Math.floor(Math.random() * 34);

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