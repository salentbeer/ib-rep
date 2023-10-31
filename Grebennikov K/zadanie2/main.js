function calculateLowerTriangleSum() {
    var matrixTable = document.getElementById("matrix");
    var rows = matrixTable.rows;

    var sum = 0;

    for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].cells;

        for (var j = 0; j <= i; j++) {
            var cellValue = Number(cells[j].querySelector("input").value);
            sum += cellValue;
        }
    }

    var resultElement = document.getElementById("result");
    resultElement.textContent = "Сумма элементов нижнего треугольника матрицы: " + sum;
}