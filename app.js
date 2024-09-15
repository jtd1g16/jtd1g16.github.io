function getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}

document.addEventListener("DOMContentLoaded", () => {
const images = document.querySelectorAll("#polly"); // grab every image tag and store it as a variable

for(const image of images){
    console.log(image)
    const randomNumber = getRandomNumber(8)
    const randomImage = "vert_img/polly_" + randomNumber + '.jpg'
    console.log(randomImage)
    image.src = randomImage;
    // image.width = 33 + 'px'
}
    
})

document.addEventListener("DOMContentLoaded", () => {
const images = document.querySelectorAll("#scooter"); // grab every image tag and store it as a variable

for(const image of images){
    console.log(image)
    const randomNumber = getRandomNumber(6)
    const randomImage = "vert_img/scooter_" + randomNumber + '.jpg'
    console.log(randomImage)
    image.src = randomImage;
    // image.width = 33 + 'px'
}
        
    })

document.addEventListener("DOMContentLoaded", () => {
const images = document.querySelectorAll("#scooter2"); // grab every image tag and store it as a variable

for(const image of images){
    console.log(image)
    const randomNumber = getRandomNumber(6)
    const randomImage = "vert_img/scooter_" + randomNumber + '.jpg'
    console.log(randomImage)
    image.src = randomImage;
    // image.width = 33 + 'px'
}
    
    })

document.addEventListener("DOMContentLoaded", () => {
const images = document.querySelectorAll("#lily"); // grab every image tag and store it as a variable

for(const image of images){
    console.log(image)
    const randomNumber = getRandomNumber(4)
    const randomImage = "vert_img/lily_" + randomNumber + '.jpg'
    console.log(randomImage)
    image.src = randomImage;
    // image.width = 33 + 'px'
}
    
    })