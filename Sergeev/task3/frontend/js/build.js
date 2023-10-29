document.getElementById('remove-vowels').addEventListener('click', function() {
    // Получение строки из поля ввода
    let inputString = document.getElementById('inputString').value;

    // Удаление всех гласных букв (учитывая как заглавные, так и строчные)
    let resultString = inputString.replace(/[aeiouAEIOUаеёиоуыэюяАЕЁИОУЫЭЮЯ]/g, '');

    // Возвращение результата в то же поле ввода
    document.getElementById('inputString').value = resultString;
});
