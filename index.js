//DIANA
const globe = document.querySelector('#current-globe');
const leftBtn = document.getElementById('left-turn');
const rightBtn = document.getElementById('right-turn');
const goHome = document.getElementById('return-home');
const currentCountry = document.querySelector('.country-pins');

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
        currentCountry.textContent = "You are currently in the US and Canada";
        console.log("Img ", imgNum);
        canadaPin();
    } else if (imgNum === 2) {
        currentCountry.textContent = "You are currently in Brazil";
        console.log("Img ", imgNum);
    } else if (imgNum === 3) {
        currentCountry.textContent = "You are currently NOT in the US";
        console.log("Img ", imgNum);
    } else if (imgNum === 4) {
        currentCountry.textContent = "You are currently NOT in the US";
        console.log("Img ", imgNum);
    } else if (imgNum === 5) {
        currentCountry.textContent = "You are currently in the UK and Sweden";
        console.log("Img ", imgNum);
    } else if (imgNum === 6) {
        currentCountry.textContent = "You are currently in Europe and South Africa";
        console.log("Img ", imgNum);
    } else if (imgNum === 7) {
        currentCountry.textContent = "You are currently NOT in the US";
        console.log("Img ", imgNum);
    } else if (imgNum === 8) {
        currentCountry.textContent = "You are currently in Russia";
        console.log("Img ", imgNum);
    } else if (imgNum === 9) {
        currentCountry.textContent = "You are currently in Japan and Hong Kong";
        console.log("Img ", imgNum);
    } else if (imgNum === 10) {
        currentCountry.textContent = "You are currently in Australia";
        console.log("Img ", imgNum);
    } else if (imgNum === 11) {
        currentCountry.textContent = "You are currently NOT in the US";
        console.log("Img ", imgNum);
    } else if (imgNum === 12) {
        currentCountry.textContent = "You are currently NOT in the US";
        console.log("Img ", imgNum);
    } else if (imgNum === 13) {
        currentCountry.textContent = "You are currently NOT in the US";
        console.log("Img ", imgNum);
    } else if (imgNum === 14) {
        currentCountry.textContent = "You are currently NOT in the US";
        console.log("Img ", imgNum);
    } else if (imgNum === 15) {
        currentCountry.textContent = "You are currently NOT in the US";
        console.log("Img ", imgNum);
    }
};

//creation of button function
function createPin() {
    while (currentCountry.hasChildNodes === true) {
        currentCountry.removeChildren();
    }
    const createH1 = document.createElement('h1');
    const pin = document.createElement('img');
        pin.id = `pin-${imgNum}`;
        pin.src = "other-images/pin.png";
        pin.alt = "Pin";

    currentCountry.append(createH1);
    createH1.append(pin);
}

//pins for each country
function canadaPin() {
    if (imgNum === 1) {
        createPin();
    }
}