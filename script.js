var myVar = setInterval(changePictures1, 5000);
var myVar2 = setInterval(changePictures2, 7000);



function changePictures1() {  
    if (document.getElementById("img1").src.includes("/images/250X110668568400.jpg")) {
        document.getElementById("img1").src = "images/banner_atar.jpg";
    } else {
        document.getElementById("img1").src = "images/250X110668568400.jpg";
    }
}

function changePictures2() {
    if (document.getElementById("img2").src.includes("images/paz_250x110059890678.jpg")) {
        document.getElementById("img2").src = "images/paz_250x110103131473.jpg";
    } else {
        document.getElementById("img2").src = "images/paz_250x110059890678.jpg";
    }
}
