function save() {
    console.log("save");
    checkIfPwAlign();
    checkIfUserLongEnough();
}

function changePfp() {
    console.log("pfp");
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