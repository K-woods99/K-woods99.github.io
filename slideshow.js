/*
Student Name: Katelyn Woods
File Name: slideshow.js
Current Date: 04/20/2024
*/

const images = [
    "images/Bengal4.jpg",
    "images/Ragdoll2.jpg",
    "images/Sphynx4.jpg",
    "images/Devonrex1.jpg",
    "images/Birman1.jpg",
    "images/MaineCoon1.jpg",
    "images/Russianblue3.jpg",
    "images/Sphynx5.png",
    "images/Bengal1.jpg",
    "images/Cornishrex4.jpg",
    "images/Siamese1.jpg",
    "images/AmericanShorthair1.jpg",
    "images/Devonrex2.jpg",
    "images/Birman3.jpg",
    "images/Ragdoll1.jpg",
    "images/Cornishrex3.jpg",
    "images/Bengal2.jpg",
    "images/AmericanShorthair2.jpg",
    "images/Sphynx1.jpg",
    "images/Siamese3.jpg",
    "images/Birman2.jpg",
    "images/Sphynx3.jpg",
    "images/Russianblue4.jpg",
    "images/MaineCoon2.jpg",
    "images/Ragdoll3.jpg",
    "images/Devonrex3.jpg",
    "images/MaineCoon3.jpg",
    "images/Bengal3.jpg",
    "images/Sphynx2.jpg",
    "images/Cornishrex1.jpg"
];

function displaySlideshow() {
    const slideshowContainer = document.getElementById("slideshow-container");

    images.forEach(imageUrl => {
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "Cat";
        slideshowContainer.appendChild(img);
    });

    let currentIndex = 0;

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlideshow();
    }

    
    function updateSlideshow() {
        const imgElements = slideshowContainer.querySelectorAll("img");
        imgElements.forEach((img, index) => {
            if (index === currentIndex) {
                img.style.display = "block";
            } else {
                img.style.display = "none";
            }
        });
    }

    updateSlideshow();

    setInterval(showNextImage, 3000);
}

document.addEventListener("DOMContentLoaded", displaySlideshow);