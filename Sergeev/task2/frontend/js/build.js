document.getElementById('calculate-angle').addEventListener('click', function() {
    // Получение значений из полей ввода
    let ax = parseFloat(document.getElementById('ax').value);
    let ay = parseFloat(document.getElementById('ay').value);
    let az = parseFloat(document.getElementById('az').value);

    let bx = parseFloat(document.getElementById('bx').value);
    let by = parseFloat(document.getElementById('by').value);
    let bz = parseFloat(document.getElementById('bz').value);

    // Проверка на корректность введенных данных
    if (isNaN(ax) || isNaN(ay) || isNaN(az) || isNaN(bx) || isNaN(by) || isNaN(bz)) {
        document.getElementById('error-message').textContent = 'Пожалуйста, введите корректные значения координат.';
        return;
    }

    // Вычисление скалярного произведения
    let dotProduct = ax * bx + ay * by + az * bz;

    // Вычисление модулей векторов
    let magnitudeA = Math.sqrt(ax * ax + ay * ay + az * az);
    let magnitudeB = Math.sqrt(bx * bx + by * by + bz * bz);

    // Проверка на нулевые векторы
    if (magnitudeA === 0 || magnitudeB === 0) {
        document.getElementById('error-message').textContent = 'Один из векторов или оба являются нулевыми. Угол между ними не определен.';
        return;
    }

    // Вычисление угла
    let cosTheta = dotProduct / (magnitudeA * magnitudeB);
    cosTheta = Math.min(Math.max(cosTheta, -1), 1); // Ограничение значения cosTheta
    let angleRad = Math.acos(cosTheta);
    let angleDeg = angleRad * (180 / Math.PI);

    // Вывод результата
    document.getElementById('result').value = angleDeg.toFixed(2);
    document.getElementById('error-message').textContent = ''; // Очистка сообщения об ошибке
});
