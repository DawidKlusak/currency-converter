{
    const calculateResult = (value, currency) => {
        const EUR = 4.51;
        const USD = 4.19;
        const CHF = 4.63;
        const GBP = 5.25;

        switch (currency) {
            case "EUR":
                return value / EUR;

            case "USD":
                return value / USD;

            case "CHF":
                return value / CHF;

            case "GBP":
                return value / GBP;
        }
    };

    const updateResultText = (value, result, currency) => {
        const currencyResult = document.querySelector(".js-result");
        currencyResult.innerText = `${result.toFixed(2)} ${currency}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const currencyChoice = document.querySelector(".js-currency");
        const valueNumber = document.querySelector(".js-value");

        const currency = currencyChoice.value;
        const value = valueNumber.value;

        const result = calculateResult(value, currency);

        updateResultText(value, result, currency)
    };

    const init = () => {
        const fieldsetElement = document.querySelector(".js-form");
        fieldsetElement.addEventListener("submit", onFormSubmit)
    };

    init()
}






