document.addEventListener("DOMContentLoaded", function() {
    const convertButton = document.querySelector('.convert-button');
    const initialTextarea = document.querySelector('.initial-text');
    const resultsTextarea = document.querySelector('.results-text');

    convertButton.addEventListener('click', function() {
        const initialText = initialTextarea.value;
        resultsTextarea.value = excludeVowels(initialText);
    });
});

function excludeVowels(text) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y', 'а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я', 'А', 'О', 'И', 'Е', 'Ё', 'Э', 'Ы', 'У', 'Ю', 'Я'];

    let newText = '';
    for (let char of text) {
        if (!vowels.includes(char)) {
            newText += char;
        }
    }
    return newText;
}
