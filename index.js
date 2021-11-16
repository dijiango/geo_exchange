
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
// if(submitCurrencyForm.style.display === "none"){
//     submitCurrencyForm.style.display = "block";}
// else {submitCurrencyForm.style.display = "none"}

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