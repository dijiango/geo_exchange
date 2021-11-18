//NAV BAR
const nav1 = document.querySelector('#geo-locator');
const nav2 = document.querySelector('#meet-the-team');
const nav3 = document.querySelector('#about-this-project');
const nav4 = document.querySelector('#more-features');


//STEPHEN
let pins = document.getElementsByClassName('pins')
const returnCurrencyTrigger = document.getElementById('return-currency');
const currencyTrigger = document.getElementById('base-currency');
const submitCurrencyForm = document.getElementById('submit-currency');
let currencyResponse = document.createElement('h1')
currencyResponse.textContent = ''
submitCurrencyForm.append(currencyResponse)

let currencyType = `USD`
let baseCurrency = "base=" + currencyType;
let returnCurrencyType = `EUR`

currencyTrigger.addEventListener("change", (e)=> {
    currencyType = `${currencyTrigger.value}`
    baseCurrency = "base=" + currencyType;})
returnCurrencyTrigger.addEventListener("change", (e) => {

    returnCurrencyType = `${returnCurrencyTrigger.value}`
})
let minimizeToggle = document.getElementById('minimize');
minimizeToggle.addEventListener("click", () => {
if(submitCurrencyForm.style.display === "none"){
    submitCurrencyForm.style.display = "block";}
else {submitCurrencyForm.style.display = "none"}

})


submitCurrencyForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let currValue = document.getElementById('curr-value')
    fetch(`https://api.vatcomply.com/rates?${baseCurrency}`)
    .then(response => response.json())
    .then(data => getCorrectCurrency(data))

    function getCorrectCurrency(obj){
    for(let key in obj.rates){
        let currencyMultiplier = currValue.value
        if(key === returnCurrencyType){
            currencyResponse.textContent = (obj.rates[key]) * currencyMultiplier
        }
        }
    }
   
})





//MATT

let cardContainer = document.getElementById("currencyContainer")


function renderData(object1) {
       for(let currency1 in object1.rates){
           if(currency1 === returnCurrencyType){
      
       const countryCard = document.createElement("div")
       countryCard.className = "cards"
       const lastDateUpdated = document.createElement("p")
       const rateAgainstBase = document.createElement("p")

       lastDateUpdated.textContent = `Last Updated: ${object1.date}`
       rateAgainstBase.textContent = `${object1.rates[currency1]} ${currency1} per 1 ${currencyType}`

       countryCard.append(lastDateUpdated,rateAgainstBase)
       cardContainer.append(countryCard)
           }
}
}







//DIANA
const globe = document.querySelector('#current-globe');
const leftBtn = document.getElementById('left-turn');
const rightBtn = document.getElementById('right-turn');
const goHome = document.getElementById('return-home');
const currentCountry = document.querySelector('#country-pins');

//image src tag
let imgNum = 2;
const baseImg = "earth-images/" + imgNum + ".png";
globe.src = baseImg; 

function rotateLeft() {
    if (imgNum === 1) {
        imgNum = 15;  
    }
    else {
        --imgNum;
    }
    globe.src = "earth-images/" + imgNum + ".png"; 
    countryPins();
};

function rotateRight() {
    if (imgNum === 15) {
        imgNum = 1;
    }
    else {
        ++imgNum;
    }
    globe.src = "earth-images/" + imgNum + ".png";
    countryPins();
}

leftBtn.addEventListener("click", rotateLeft);

rightBtn.addEventListener("click", rotateRight);

goHome.addEventListener("click", () => {
    imgNum = 1;
    globe.src = "earth-images/" + imgNum + ".png";
    countryPins();
});

//add pins to images
function countryPins() {
    const nullMessage = "Stay tuned for more countries coming to this region!";

    if (imgNum === 1) {
        currentCountry.textContent = "You are currently in the US and Canada";
        console.log("Img ", imgNum);
        canadaPin();
        unitedStatesPin();
    } else if (imgNum === 2) {
        currentCountry.textContent = "You are currently in Brazil";
        console.log("Img ", imgNum);
        brasilPin();
    } else if (imgNum === 3) {
        currentCountry.textContent = nullMessage;
        console.log("Img ", imgNum);
    } else if (imgNum === 4) {
        currentCountry.textContent = nullMessage;
        console.log("Img ", imgNum);
    } else if (imgNum === 5) {
        currentCountry.textContent = "You are currently in the UK and Sweden";
        console.log("Img ", imgNum);
        unitedKingdomPin();
        swedenPin();
    } else if (imgNum === 6) {
        currentCountry.textContent = "You are currently in Europe and South Africa";
        console.log("Img ", imgNum);
        europePin();
        southAfricaPin();
    } else if (imgNum === 7) {
        currentCountry.textContent = nullMessage;
        console.log("Img ", imgNum);
    } else if (imgNum === 8) {
        currentCountry.textContent = "You are currently in Russia";
        console.log("Img ", imgNum);
        russiaPin();
    } else if (imgNum === 9) {
        currentCountry.textContent = "You are currently in Japan and Hong Kong";
        console.log("Img ", imgNum);
        japanPin();
        hongKongPin();
    } else if (imgNum === 10) {
        currentCountry.textContent = "You are currently in Australia";
        console.log("Img ", imgNum);
        aussiePin();
    } else if (imgNum === 11) {
        currentCountry.textContent = nullMessage;
        console.log("Img ", imgNum);
    } else if (imgNum === 12) {
        currentCountry.textContent = nullMessage;
        console.log("Img ", imgNum);
    } else if (imgNum === 13) {
        currentCountry.textContent = nullMessage;
        console.log("Img ", imgNum);
    } else if (imgNum === 14) {
        currentCountry.textContent = nullMessage;
        console.log("Img ", imgNum);
    } else if (imgNum === 15) {
        currentCountry.textContent = nullMessage;
        console.log("Img ", imgNum);
    }
};

//creation of button function
function createPin(x) {
    while (currentCountry.hasChildNodes === true) {
        currentCountry.removeChildren();
    }
    const pin = document.createElement('img');
        pin.id = `pin-${x}`;
        pin.src = "other-images/pin.png";
        pin.alt = "Pin";
        pin.className = "pins";
    currentCountry.append(pin);
    pin.addEventListener("click", () => {
    if(pin.id === `pin-canada`){
        returnCurrencyType = 'CAD'
    }
    if(pin.id === `pin-united-states`){
        returnCurrencyType = 'USD'
    }if(pin.id === `hong-king`){
        returnCurrencyType = 'HKD'
    }if(pin.id === `pin-brasil`){
        returnCurrencyType = 'BRL'
    }if(pin.id === `pin-aussie`){
        returnCurrencyType = 'AUD'
    }if(pin.id === `pin-united-kingdom`){
        returnCurrencyType = 'GBP'
    }if(pin.id === `pin-canada`){
        returnCurrencyType = 'CAD'
    }if(pin.id === `pin-sweden`){
        returnCurrencyType = 'SEK'
    }if(pin.id === `pin-europe`){
        returnCurrencyType = 'EUR'
    }if(pin.id === `pin-south-africa`){
        returnCurrencyType = 'ZAR'
    }
    
        fetch(`https://api.vatcomply.com/rates?${baseCurrency}`)
        .then(response => response.json())
         .then(data => renderData(data))
    
    ,
    cardContainer.innerHTML ='';
    



});
    

}
   




//pins for each country
function canadaPin() {
    if (imgNum === 1) {
        createPin('canada');
    }
}

function unitedStatesPin() {
    if (imgNum === 1) {
        createPin('united-states');
    }
}

function brasilPin() {
    if (imgNum === 2) {
        createPin('brasil');
    }
}

function unitedKingdomPin() {
    if (imgNum === 5) {
        createPin('united-kingdom');
    }
}

function swedenPin() {
    if (imgNum === 5) {
        createPin('sweden');
    }
}

function europePin() {
    if (imgNum === 6) {
        createPin('europe');
    }
}

function southAfricaPin() {
    if (imgNum === 6) {
        createPin('south-africa');
    }
}

function russiaPin() {
    if (imgNum === 8) {
        createPin('russia');
    }
}

function japanPin() {
    if (imgNum === 9) {
        createPin('japan');
    }
}

function hongKongPin() {
    if (imgNum === 9) {
        createPin('hong-kong');
    }
}

function aussiePin() {
    if (imgNum === 10) {
        createPin('aussie');
    }
}
