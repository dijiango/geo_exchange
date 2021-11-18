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
    const cardImage = document.createElement('img')
    cardImage.className ='money-image';
    countryCard.className = "cards"
    const cardText = document.createElement('p')
    cardText.id="card-text"
    const lastDateUpdated = document.createElement("p")
    const rateAgainstBase = document.createElement("p")
 
if(currency1 === "CAD"){
    cardImage.src='currency-images/img1CanadianDollar.jpg';
    cardText.textContent = "The Canadian dollar is the currency of Canada. It is abbreviated with C$ to distinguish it from other currencies. It is divided into 100 cents (¢)."
}
if(currency1 === "USD"){
    cardImage.src='currency-images/img2USDollar.jpg';
    cardText.textContent="The United States dollar uses the symbol $ to distinguish it from other dollar-denominated currencies; referred to as the dollar, U.S. dollar, American dollar, or colloquially buck or dat skrilla, is the official currency of the United States and its territories. it is divided into 100 cents."  
}
if(currency1 === "BRL"){
    cardImage.src='currency-images/img3BrazillianReal.jpg'
    cardText.textContent=`The Brazilian real is the official currency of Brazil.
    It is subdivided into 100 centavos. The Central Bank of Brazil is the central bank and the issuing authority.`  
}
if(currency1 === "GBP"){
    cardImage.src='currency-images/img4BritishPound.jpg' 
    cardText.textContent=`The pound sterling, known in some contexts simply as the pound or sterling,
     is subdivided into 100 pence. The "pound sterling" is the oldest currency in continuous use. Sterling 
     is the fourth most-traded currency in the foreign exchange market, after the United States dollar, the euro, 
     and the Japanese yen. Together with those three currencies and the Chinese yuan, it forms the basket of currencies
      which calculate the value of IMF special drawing rights. As of mid-2021, sterling is also the fifth most-held reserve 
      currency in global reserves.`
}
if(currency1 === "SEK"){
    cardImage.src='currency-images/img5SwedishKrona.jpg'
    cardText.textContent=`The krona is the official currency of Sweden. Both the ISO code "SEK" and currency sign "kr"
    are in common use; the former precedes or follows the value, the latter usually follows it but,
    especially in the past, it sometimes preceded the value.
    Referred to as the Swedish crown, krona literally means "crown" in Swedish.
    The Swedish krona was the ninth-most traded currency in the world by value in April 2016.
    One krona is subdivided into 100 öre`  
}
if(currency1 === "EUR"){
    cardImage.src='currency-images/img6EUEuro.jpg' 
    cardText.textContent=`The euro is the official currency of 19 of the 27 member states of the European Union.
    This group of states is known as the eurozone or euro area and includes about 343 million citizens as of 2019..
    The euro, which is divided into 100 cents, is the second-largest and second-most traded currency in the foreign
    exchange market after the United States dollar.` 
}
if(currency1 === "ZAR"){
    cardImage.src='currency-images/img7SouthAfricanRand.jpg'  
    cardText.textContent=`The rand is the official currency of South Africa. It is subdivided into 100 cents. 
    The South African rand is also legal tender in the Common Monetary Area member states of Namibia, Lesotho 
    and Eswatini. Although these three countries each have their own national currency (the dollar, the loti 
    and the lilangeni respectively), all three have been pegged with the rand at par since their introductions, 
    and the rand is still widely accepted as a substitute for them. The rand was also legal tender in Botswana 
    until 1976, when the pula replaced the rand at par.`
}
if(currency1 === "RUB"){
    cardImage.src='currency-images/img8RussianRuble.jpg' 
    cardText.textContent="The Russian ruble or rouble is the currency of the Russian Federation, the two partially recognised republics of Abkhazia and South Ossetia and the two unrecognised republics of Donetsk and Luhansk. The ruble is subdivided into 100 kopeks."
}
if(currency1 === "JPY"){
    cardImage.src='currency-images/img9JapaneseYen.jpg'
    cardText.textContent="The yen is the official currency of Japan. It is the third most traded currency in the foreign exchange market, after the United States dollar and the Euro. It is also widely used as a third reserve currency after the United States dollar and the Euro." 
}
if(currency1 === "AUD"){
    cardImage.src='currency-images/img92AussiDollar.jpg' 
    cardText.textContent="The Australian dollar is the currency of Australia, including its external territories: Christmas Island, Cocos (Keeling) Islands, and Norfolk Island. It is officially used as currency by three independent Pacific Island states: Kiribati, Nauru, and Tuvalu. It is legal tender in Australia. Within Australia, it is almost always abbreviated with the dollar sign ($), with A$ or AU$ sometimes used to distinguish it from other dollar-denominated currencies. The $ symbol precedes the amount. It is subdivided into 100 cents."
}
if(currency1 === "HKD"){
    cardImage.src='currency-images/img91HKDollar.jpg'
    cardText.textContent="The Hong Kong dollar is the official currency of the Hong Kong Special Administrative Region. It is subdivided into 100 cents or 1000 mils. The Hong Kong Monetary Authority is the monetary authority of Hong Kong and the Hong Kong dollar."  
}
       lastDateUpdated.textContent = `Last Updated: ${object1.date}`
       rateAgainstBase.textContent = `${object1.rates[currency1]} ${currency1} per 1 ${currencyType}`

       countryCard.append(cardImage, rateAgainstBase, cardText, lastDateUpdated)
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
        currentCountry.textContent = "You are currently visiting the US and Canada";
        console.log("Img ", imgNum);
        canadaPin();
        unitedStatesPin();
    } else if (imgNum === 2) {
        currentCountry.textContent = "You are currently visiting Brazil";
        console.log("Img ", imgNum);
        brasilPin();
    } else if (imgNum === 3) {
        currentCountry.textContent = nullMessage;
        console.log("Img ", imgNum);
    } else if (imgNum === 4) {
        currentCountry.textContent = nullMessage;
        console.log("Img ", imgNum);
    } else if (imgNum === 5) {
        currentCountry.textContent = "You are currently visiting the UK and Sweden";
        console.log("Img ", imgNum);
        unitedKingdomPin();
        swedenPin();
    } else if (imgNum === 6) {
        currentCountry.textContent = "You are currently visiting Europe and South Africa";
        console.log("Img ", imgNum);
        europePin();
        southAfricaPin();
    } else if (imgNum === 7) {
        currentCountry.textContent = nullMessage;
        console.log("Img ", imgNum);
    } else if (imgNum === 8) {
        currentCountry.textContent = "You are currently visiting Russia";
        console.log("Img ", imgNum);
        russiaPin();
    } else if (imgNum === 9) {
        currentCountry.textContent = "You are currently visiting Japan and Hong Kong";
        console.log("Img ", imgNum);
        japanPin();
        hongKongPin();
    } else if (imgNum === 10) {
        currentCountry.textContent = "You are currently visiting Australia";
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
    }if(pin.id === `pin-hong-kong`){
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
    }if(pin.id === `pin-japan`){
        returnCurrencyType = 'JPY'
    }if(pin.id === `pin-russia`){
        returnCurrencyType = 'RUB'
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

function myFunc() {
    console.log("Hi");
}