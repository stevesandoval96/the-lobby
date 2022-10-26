function changeImage() {
    let i = 0;
    let images = ['../Images/Sandoval Glitch Two White.png', '../Images/Sandoval Glitch Three White.png', '../Images/Sandoval Stable White.png', '../Images/Sandoval Glitch Two White.png', '../Images/Sandoval Glitch Three White.png', '../Images/Sandoval Stable White.png', '../Images/Sandoval Glitch Two White.png', '../Images/Sandoval Glitch Three White.png']
    const logo = document.getElementById('logo');
    const imageInterval = setInterval(toggle, 125);
    function toggle() {
        logo.src = images[i];
        i++
        if (i == images.length) {
            clearInterval(imageInterval);
            i = 0;
            logo.src='../Images/Sandoval Stable White.png';
        }
    }
}



