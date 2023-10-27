document.addEventListener('DOMContentLoaded', function () {
    const solveButton = document.querySelector("button");
    solveButton.addEventListener("click", solveQuadratic);

    function solveQuadratic() {
        const inputs = document.querySelectorAll("input");
        for(let input of inputs) {
            if(!input.value || isNaN(input.value.replace(',', '.'))) {
                document.querySelector(".result-div").textContent = 'Please enter valid numbers!';
                document.querySelector(".solution-div").innerHTML = '';
                return;
            }
            input.value = input.value.replace(',', '.'); // replace comma with dot
        }

        const a = parseFloat(inputs[0].value) * (document.querySelectorAll("select")[0].value === '+' ? 1 : -1);
        const b = parseFloat(inputs[1].value) * (document.querySelectorAll("select")[1].value === '+' ? 1 : -1);
        const c = parseFloat(inputs[2].value) * (document.querySelectorAll("select")[2].value === '+' ? 1 : -1);

        const discriminant = b * b - 4 * a * c;

        let solutionText;
        let resultText;

        solutionText = `1. Calculating the discriminant: Δ = b<sup>2</sup> - 4ac = ${discriminant.toFixed(2)}`;

        if (discriminant > 0) {
            const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            resultText = `Roots are real and distinct: ${root1.toFixed(2)} and ${root2.toFixed(2)}`;

            solutionText += `<br>2. Δ > 0, so there are two distinct real roots.`;
            solutionText += `<br>Root 1: (-b + √Δ) / 2a = ${root1.toFixed(2)}`;
            solutionText += `<br>Root 2: (-b - √Δ) / 2a = ${root2.toFixed(2)}`;
        } else if (discriminant === 0) {
            const root = -b / (2 * a);
            resultText = `Root is real and repeated: ${root.toFixed(2)}`;

            solutionText += `<br>2. Δ = 0, so there is a repeated real root.`;
            solutionText += `<br>Root: -b / 2a = ${root.toFixed(2)}`;
        } else {
            const realPart = (-b / (2 * a)).toFixed(2);
            const imaginaryPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
            resultText = `Roots are complex conjugate: ${realPart} + ${imaginaryPart}i and ${realPart} - ${imaginaryPart}i`;

            solutionText += `<br>2. Δ < 0, so there are complex conjugate roots.`;
            solutionText += `<br>Real Part: -b / 2a = ${realPart}`;
            solutionText += `<br>Imaginary Part: √(-Δ) / 2a = ±${imaginaryPart}i`;
        }

        document.querySelector(".result-div").textContent = resultText;
        document.querySelector(".solution-div").innerHTML = solutionText;
    }
});
