const initialNumberInput = document.querySelector('.initial-number');
const resultNumberInput = document.querySelector('.result-number');
const errorParagraph = document.querySelector('.error-field');
const convertButton = document.querySelector('.convert-button');

function validateDecimalNumber(number) {
    const regex = /^-?\d+(\.\d+)?$/;
    return regex.test(number);
}

function convertToBase13(number) {
    return parseInt(number, 10).toString(13).toUpperCase();
}

function onConvertButtonClick() {
    const inputValue = initialNumberInput.value.trim();

    if (!validateDecimalNumber(inputValue)) {
        errorParagraph.textContent = 'Enter the correct number in decimal';
        return;
    }

    errorParagraph.textContent = '';

    resultNumberInput.value = convertToBase13(inputValue);
}

convertButton.addEventListener('click', onConvertButtonClick);
