let fieldsetElement = document.querySelector(".js-form");
let currencyChoice = document.querySelector(".js-currency");
let valueNumber = document.querySelector(".js-value");
let currencyResult = document.querySelector(".js-result");

let EUR = 4.51;
let USD = 4.19;
let CHF = 4.63;
let GBP = 5.25;

fieldsetElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = currencyChoice.value;
    let value = valueNumber.value;
    let result = currencyResult.value;

    switch (currency) {
        case "EUR":
            result = value / EUR;
            break;

        case "USD":
            result = value / USD;
            break;

        case "CHF":
            result = value / CHF;
            break;

        case "GBP":
            result = value / GBP;
            break;
    }

    currencyResult.innerText = `${result.toFixed(2)} ${currency}`;
});




