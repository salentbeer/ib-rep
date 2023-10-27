document.addEventListener('DOMContentLoaded', function() {
    let lengthInput = document.querySelector('.initial-number');
    let widthInput = document.querySelector('.result-number');
    let convertBtn = document.querySelector('.convert-button');
    let matrixInputsDiv = document.querySelector('.matrix-inputs');
    let scalarInput = document.querySelector('.scalar-input');
    let matrixResultDiv = document.querySelector('.matrix-result');
    let errorMessageDiv = document.querySelector('.error-message');

    lengthInput.addEventListener('input', validateAndCreateMatrixInputs);
    widthInput.addEventListener('input', validateAndCreateMatrixInputs);

    convertBtn.addEventListener('click', multiplyMatrixByScalar);

    matrixInputsDiv.addEventListener('keydown', (event) => {
        if (event.target.tagName.toLowerCase() === 'input' && event.key === 'Enter') {
            event.preventDefault();

            let inputs = matrixInputsDiv.querySelectorAll('input');
            let currentIndex = Array.from(inputs).indexOf(event.target);

            if (currentIndex < inputs.length - 1) {
                inputs[currentIndex + 1].focus();
            }
        }
    });

    function validateAndCreateMatrixInputs() {
        let length = parseInt(lengthInput.value) || 0;
        let width = parseInt(widthInput.value) || 0;

        if (length && width) {
            if (length > 25 || width > 25) {
                errorMessageDiv.textContent = 'Size of matrix cannot exceed 25x25';
                matrixInputsDiv.classList.add('hidden');
                return;
            } else {
                errorMessageDiv.textContent = '';
                matrixInputsDiv.classList.remove('hidden');
                createMatrixInputs();
            }
        } else {
            matrixInputsDiv.classList.add('hidden');
        }
    }

    function createMatrixInputs() {
        matrixInputsDiv.innerHTML = '';

        let length = parseInt(lengthInput.value) || 0;
        let width = parseInt(widthInput.value) || 0;

        for (let i = 0; i < length; i++) {
            let rowDiv = document.createElement('div');
            rowDiv.classList.add('matrix-row', 'flex');

            for (let j = 0; j < width; j++) {
                let input = document.createElement('input');
                input.setAttribute('type', 'text');
                input.setAttribute('maxlength', '5');
                input.classList.add('matrix-item', 'px-2', 'py-1', 'm-1', 'rounded-md', 'shadow-sm', 'border-0', 'px-2',
                    'py-1.5', 'text-gray-900', 'ring-1', 'ring-inset', 'ring-gray-300', 'focus:ring-2', 'focus:ring-inset',
                    'focus:ring-indigo-600', 'max-w-[60px]', 'w-full');
                input.addEventListener('input', validateInput);
                rowDiv.appendChild(input);
            }

            matrixInputsDiv.appendChild(rowDiv);
        }
    }

    function validateInput(event) {
        event.target.value = event.target.value.replace(/[^0-9.-]/g, '');
    }

    function multiplyMatrixByScalar() {
        let length = parseInt(lengthInput.value) || 0;
        let width = parseInt(widthInput.value) || 0;
        let scalar = parseFloat(scalarInput.value) || 0;
        matrixResultDiv.innerHTML = '';

        for (let i = 0; i < length; i++) {
            let rowDiv = document.createElement('div');
            rowDiv.classList.add('matrix-row-result', 'mb-2');

            for (let j = 0; j < width; j++) {
                let cellDiv = document.createElement('div');
                cellDiv.classList.add('matrix-cell-result', 'p-2', 'rounded-md', 'shadow-md',
                    'text-center');
                let input = matrixInputsDiv.querySelectorAll('.matrix-row')
                    [j].querySelectorAll('.matrix-item')[i];
                let value = parseFloat(input.value) || 0;
                cellDiv.textContent = value * scalar;
                rowDiv.appendChild(cellDiv);
            }

            matrixResultDiv.appendChild(rowDiv);
        }
    }

    lengthInput.addEventListener('input', validateSizeScalar);
    widthInput.addEventListener('input', validateSizeScalar);
    scalarInput.addEventListener('input', validateSizeScalar);

    function validateSizeScalar(event) {
        event.target.value = event.target.value.replace(/[^0-9]/g, '');
    }
});
