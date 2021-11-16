const globe = document.querySelector('#current-globe');
const leftBtn = document.getElementById('left-turn');
const rightBtn = document.getElementById('right-turn');
const goHome = document.getElementById('return-home');
const countryPin = document.querySelector('.country-pins h1');

//image src tag
let imgNum = 2;
const baseImg = "earth-images/" + imgNum + ".jpg";
globe.src = baseImg; 

function rotateLeft() {
    if (imgNum === 1) {
        imgNum = 15;  
    }
    else {
        --imgNum;
    }
    globe.src = "earth-images/" + imgNum + ".jpg"; 
    countryPins();
};

function rotateRight() {
    if (imgNum === 15) {
        imgNum = 1;
    }
    else {
        ++imgNum;
    }
    globe.src = "earth-images/" + imgNum + ".jpg";
    countryPins();
}

leftBtn.addEventListener("click", rotateLeft);

rightBtn.addEventListener("click", rotateRight);

goHome.addEventListener("click", () => {
    imgNum = 1;
    globe.src = "earth-images/" + imgNum + ".jpg";
    countryPins();
});

//add pins to images
function countryPins() {
    if (imgNum === 1) {
        countryPin.textContent = "You are currently in the US and Canada";
        console.log("Img ", imgNum);
    } 
    else if (imgNum === 2) {
        countryPin.textContent = "You are currently in Brazil";
        console.log("Img ", imgNum);
    }
    else if (imgNum === 3) {
        countryPin.textContent = "You are currently NOT in the US";
        console.log("Img ", imgNum);
    }
    else if (imgNum === 4) {
        countryPin.textContent = "You are currently NOT in the US";
        console.log("Img ", imgNum);
    }
    else if (imgNum === 5) {
        countryPin.textContent = "You are currently in the UK and Sweden";
        console.log("Img ", imgNum);
    }else if (imgNum === 6) {
        countryPin.textContent = "You are currently in Europe and South Africa";
        console.log("Img ", imgNum);
    }else if (imgNum === 7) {
        countryPin.textContent = "You are currently NOT in the US";
        console.log("Img ", imgNum);
    }else if (imgNum === 8) {
        countryPin.textContent = "You are currently in Russia";
        console.log("Img ", imgNum);
    }else if (imgNum === 9) {
        countryPin.textContent = "You are currently in Japan";
        console.log("Img ", imgNum);
    }else if (imgNum === 10) {
        countryPin.textContent = "You are currently in Australia";
        console.log("Img ", imgNum);
    }else if (imgNum === 11) {
        countryPin.textContent = "You are currently NOT in the US";
        console.log("Img ", imgNum);
    }else if (imgNum === 12) {
        countryPin.textContent = "You are currently NOT in the US";
        console.log("Img ", imgNum);
    }else if (imgNum === 13) {
        countryPin.textContent = "You are currently NOT in the US";
        console.log("Img ", imgNum);
    }else if (imgNum === 14) {
        countryPin.textContent = "You are currently NOT in the US";
        console.log("Img ", imgNum);
    }else if (imgNum === 15) {
        countryPin.textContent = "You are currently NOT in the US";
        console.log("Img ", imgNum);
    }
}

//button pins for countries
// function createPin() {
//     const pin = document.createElement('button');
    
// }

// function canadaPin() {
    
// }