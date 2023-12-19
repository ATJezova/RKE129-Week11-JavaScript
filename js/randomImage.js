const mybutton = document.querySelector('button');
const image = document.querySelector('img');
const images = [ "img1.jpeg", "img2.jpeg", "img3.webp", "img4.jpeg"];

mybutton.addEventListener('click', changeImage);

function changeImage() {
    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);
    image.src = "images/" + images[randomIndex];
}