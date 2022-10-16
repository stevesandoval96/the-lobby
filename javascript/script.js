const logo = document.getElementById('logo');
const logoGlitchedTwo = document.getElementById('logo-glitched-two');
const logoGlitchedThree = document.getElementById('logo-glitched-three');

function checkImage() {
    if (logo.src === "../Images/Sandoval Stable White.png") {
        logo.src = "../Images/Sandoval Glitch Two White.png";
    } else if (logo.src === "../Images/Sandoval Glitch Two White.png") {
        logo.src = "../Images/Sandoval Glitch Three White.png"
    } else {
        logo.src = "../Images/Sandoval Stable White.png"
    }
}
function setNewImages() {
    setTimeout(checkImage, 1000)
}

function setLogo() {

}
