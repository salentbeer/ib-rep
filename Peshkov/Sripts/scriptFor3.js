function SkilhoRazBurvaVTexte(){
    let TextEx3Input = document.getElementById('TextEx3Input').value.toLowerCase();
    const BukvaInput = document.getElementById('BukvaInput').value.toLowerCase();
    let count = 0;

    let charsEx3 = TextEx3Input.split('');

    for (let a = 0; a < charsEx3.length; a++){
        console.log('Rer')
        if (charsEx3[a] == BukvaInput){
            count++
        }
    }

    document.getElementById('ResultDivEx3').innerHTML = 'Ответ: ' + count;
}