document.getElementById('remove-vowels').addEventListener('click', function() {
    // Получение текста из исходного поля
    let sourceText = document.getElementById('sourceText').value;

    // Удаление всех гласных букв
    let resultText = sourceText.replace(/[aeiouAEIOUаеёиоуыэюяАЕЁИОУЫЭЮЯ]/g, '');

    // Вывод результата в текстовое поле с результатом
    document.getElementById('resultText').value = resultText;
});
