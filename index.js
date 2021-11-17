

//STEPHEN
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
    fetch(`https://api.vatcomply.com/rates?${baseCurrency}`)
    .then(response => response.json())
     .then(data => renderData(data))
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
let imgNum = 1;
const baseImg = "earth-images/" + imgNum + ".png";
globe.src = baseImg; 

//rotate the globe functions
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

    currentCountry.append(pin);
    pin.addEventListener("click", () => console.log("You clicked on", x));
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

const newNavbar = document.createElement("nav");
const geoLocator = document.createElement("a");
const meetTheTeam = document.createElement("a");
const aboutTheProject = document.createElement("a");
const moreFeaturesToCome = document.createElement("a");

newNavbar.className = "navbar";
geoLocator.href = "./index.html";
geoLocator.innerText = "Geo Locator";
meetTheTeam.href = "https://www.cia.gov/the-world-factbook/countries/";
meetTheTeam.innerText = "Meet the team";
meetTheTeam.target = "_blank";
aboutTheProject.href = "https://www.federalreserve.gov/releases/h10/current/";
aboutTheProject.innerText = "About this project";
aboutTheProject.target = "_blank";
moreFeaturesToCome.href = "https://www.babypips.com/learn";
moreFeaturesToCome.innerText = "More features to come";
moreFeaturesToCome.target = "_blank";

if (document.title === "Geo Exchange | Home") {
        newNavbar.append(aboutTheProject)
}   else {
        newNavbar.append(geoLocator)
};

document.body.querySelector(".container").prepend(newNavbar);
    newNavbar.append(meetTheTeam);
    newNavbar.append(aboutTheProject);
    newNavbar.append(moreFeaturesToCome);