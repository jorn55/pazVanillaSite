var myVar = setInterval(changePictures1, 5000);
var myVar2 = setInterval(changePictures2, 7000);



// function changePictures1() {
//     if ( document.getElementById("img1").src == "file:///E:/school/day12-midProject/pazVanillaSite-1/images/250X110668568400.jpg" ) {
//         document.getElementById("img1").src = "file:///E:/school/day12-midProject/pazVanillaSite-1/images/banner_atar.jpg";
//     } else {
//         document.getElementById("img1").src = "file:///E:/school/day12-midProject/pazVanillaSite-1/images/250X110668568400.jpg";
//     }
// }

// function changePictures2() {
//     if ( document.getElementById("img2").src == "file:///E:/school/day12-midProject/pazVanillaSite-1/images/paz_250x110059890678.jpg" ) {
//         document.getElementById("img2").src = "file:///E:/school/day12-midProject/pazVanillaSite-1/images/paz_250x110103131473.jpg";
//     } else {
//         document.getElementById("img2").src = "file:///E:/school/day12-midProject/pazVanillaSite-1/images/paz_250x110059890678.jpg";
//     }
// }

function changePictures1() {  
    if (document.getElementById("img1").src.includes("/images/250X110668568400.jpg")) {
        document.getElementById("img1").src = "images/banner_atar.jpg";
        // document.getElementById("img2").src = "images/paz_250x110103131473.jpg";
    } else {
        document.getElementById("img1").src = "images/250X110668568400.jpg";
    }
}
// document.getElementById("myDIV").style.display = "none";

function changePictures2() {
    if (document.getElementById("img2").src.includes("images/paz_250x110059890678.jpg")) {
        document.getElementById("img2").src = "images/paz_250x110103131473.jpg";
        // document.getElementById("img1").src = "images/250X110668568400.jpg";
    } else {
        document.getElementById("img2").src = "images/paz_250x110059890678.jpg";
    }
}

// function comparePwd() {
// 	var pwd1 = document.getElementById("passw1").value;
// 	var pwd2 = document.getElementById("passw2").value;
// 	if ( pwd1 == pwd2) {
// 		document.getElementById("paswdNo").innerHTML = "Match!";
// 		document.getElementById("paswdNo").style.color = "green";
// 	} else {
// 		document.getElementById("paswdNo").innerHTML = "No match.";
// 		document.getElementById("paswdNo").style.color = "red";
// 	}
// }