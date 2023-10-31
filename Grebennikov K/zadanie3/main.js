function calculateFactorial() {
    let number = document.getElementById("inputNumber").value;
    let factorial = 1;

    for (let i = 2; i <= number; i++) {
        factorial *= i;
    }

    document.getElementById("result").textContent = "Факториал числа " + number + " = " + factorial;
}