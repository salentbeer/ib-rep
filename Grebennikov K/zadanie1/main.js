function convertToBase11() {
    
    // Получаем значение введенного десятичного числа из элемента с идентификатором "decimalNum"
    var decimalNum = document.getElementById("decimalNum").value;

    // Вызываем функцию decimalToBase11 для преобразования десятичного числа в число в 11-ричной системе счисления
    var base11Num = decimalToBase11(decimalNum);

    // Обновляем элемент с идентификатором "base11Num" выводом результата преобразования
    document.getElementById("base11Num").textContent = "Результат перевода: " + base11Num;
}

function decimalToBase11(number) {
    // Создаем пустую переменную result, где будет храниться число в 11-ричной системе счисления
    var result = "";

    // Выполняем цикл, пока number больше 0
    while (number > 0) {
        // Вычисляем остаток от деления number на 11 и присваиваем его переменной remainder
        var remainder = number % 11;
        // Добавляем остаток в начало строки result
        result = remainder + result;
        // Делаем целочисленное деление number на 11 и обновляем number
        number = Math.floor(number / 11);
    }

    // Возвращаем результат преобразования в 11-ричную систему счисления
    return result;
}
