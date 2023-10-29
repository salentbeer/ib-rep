document.addEventListener('DOMContentLoaded', function() {
    const inputNumber = document.querySelector('.input-number');
    const outputNumber = document.querySelector('.output-number');
    const btnConvert = document.querySelector('.btn-convert');
    const errorMessage = document.querySelector('.error-message');

    btnConvert.addEventListener('click', function() {
        const inputValue = inputNumber.value.trim().toUpperCase();
        if (!/^([0-9A-B]+)$/.test(inputValue)) {
            errorMessage.textContent = 'Неверный формат числа. Допустимы только числа и буквы A и B.';
            return;
        }

        const decimalValue = parseInt(inputValue, 12);
        outputNumber.value = decimalValue;
        errorMessage.textContent = '';
    });
});