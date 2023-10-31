const resultTextarea = document.getElementById('ResultEx2');

function ParseMatrix() {
    let nNumber = document.getElementById("nInput").value;
    let Matrix1String = document.getElementById("Matrix1Input").value;
    let Matrix2String = document.getElementById("Matrix2Input").value;

    let parsedMatrix1 = []
    let parsedMatrix2 = []

    Matrix1String.split(';', nNumber).forEach((value, index, array) => {
        parsedMatrix1.push(value.split(','))
    })

    Matrix2String.split(';', nNumber).forEach((value, index, array) => {
        parsedMatrix2.push(value.split(','))
    })

    multiplyMatrixAlgStrasen(parsedMatrix1, parsedMatrix2, nNumber)
}

function multiplyMatrixAlgStrasen(Matrix1, Matrix2, n) {
    //Только для n равного 2
    let M1 = (Matrix1[0][0] + Matrix1[1][1]) * (Matrix2[0][0] + Matrix2[1][1]);
    let M2 = (Matrix1[1][0] + Matrix1[1][1]) * Matrix2[0][0];
    let M3 = Matrix1[0][0] * (Matrix2[0][0] - Matrix2[0][1]);
    let M4 = Matrix1[1][1] * (Matrix2[1][1] - Matrix2[0][0]);
    let M5 = (Matrix1[0][0] + Matrix1[0][1]) * Matrix2[1][1];
    let M6 = (Matrix1[1][0] - Matrix1[0][0]) * (Matrix2[0][0] + Matrix2[0][1]);
    let M7 = (Matrix1[0][1] - Matrix1[1][1]) * (Matrix2[1][0] + Matrix2[1][1]);

    let ResultMatrix = [[M1 + M4 - M5 + M7, M3 + M5], [M2 + M4, M1 - M2 + M3 + M6]]

    resultTextarea.value = matrixToString(ResultMatrix);
}

function matrixToString(matrix) {
    let str = ''
    for (let element of matrix) {
        str += '[' + element.join(', ') + ']' + '\n'
    }
    return str
}