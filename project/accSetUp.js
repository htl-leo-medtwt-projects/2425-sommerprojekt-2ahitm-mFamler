let pfp = [
    //"images/pfp/ben-bracken-juTL6roVYQQ-unsplash.jpg",
    "images/pfp/chromodorisNudibranch.jpg",
    "images/pfp/dan-page-FrYEHnqsVg8-unsplash.jpg",
    //"images/pfp/david-clode-I4wVXFr_zKY-unsplash.jpg",
    "images/pfp/exakcent-spoorthi-J1te2qcGKCw-unsplash.jpg",
    "images/pfp/fr0ggy5-zZboJp7e6Ck-unsplash.jpg",
    "images/pfp/james-jeremy-beckers-JiTTZYkuSyg-unsplash.jpg",
    //"images/pfp/jannet-serhan-CVbVSwXXUkU-unsplash.jpg",
    "images/pfp/joan-li-s9BtlmnB2FQ-unsplash.jpg",
    "images/pfp/joel-filipe-_AjqGGafofE-unsplash.jpg",
    "images/pfp/jong-marshes-8GQjiyfPTXk-unsplash.jpg",
    "images/pfp/julia-fiander-ViVPIgqwvPY-unsplash.jpg",
    "images/pfp/kaede-kbys-yRT043rJYpg-unsplash.jpg",
    "images/pfp/kevin-lanceplaine-0YK16Sf6FbY-unsplash.jpg",
    "images/pfp/maksym-sirman-lEuxYh1kftg-unsplash.jpg",
    "images/pfp/mauricio-perez-CnwTrCvOfDM-unsplash.jpg",
    "images/pfp/md-nazmus-sakib-sazid-SSyLruQoSvc-unsplash.jpg",
    //"images/pfp/naomi-tamar-u1iIIQwtRqU-unsplash.jpg",
    "images/pfp/nguyen-khiem-C5ZGrEonlSM-unsplash.jpg",
    "images/pfp/noelle-UxYsXW_MiHI-unsplash.jpg",
    //"images/pfp/saskia-van-manen-oLLIRTLckQk-unsplash.jpg",
    "images/pfp/seaLion.jpg",
    "images/pfp/seaLions.jpg",
    "images/pfp/shahrukh-khan-ooJYRcLg85A-unsplash.jpg",
    "images/pfp/shark.jpg",
    "images/pfp/sir-simo-FD1WMBqHXv4-unsplash.jpg",
    "images/pfp/taylor-harper-6a5n3F2df70-unsplash.jpg",
    "images/pfp/tor-bandidwongpaisan-iNIux6HsIYU-unsplash.jpg",
    "images/pfp/turtur.jpg",
    "images/pfp/wakatobi.webp",
    "images/pfp/whale-shark-8.webp",
    "images/pfp/william-warby-I4JpPr-5kOM-unsplash.jpg",
    "images/pfp/william-warby-vAy431qZFqY-unsplash.jpg",
    "images/pfp/yang-minhao-5JcTxdHBBqM-unsplash.jpg"
]

let newIcon;

function save() {
    console.log("save");
    checkIfPwAlign();
    checkIfUserLongEnough();
    changeIcon(newIcon);

    //window.location.href = "./homepage.html";
}

function changePfp() {
    console.log("pfp");
    let randNr = Math.floor(Math.random() * 29);
    console.log(pfp[randNr])
    //newIcon = pfp[randNr];

    document.getElementById("icon1").innerHTML = `<img src="${pfp[randNr]}" alt="pfp" id="try"></img>`;
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