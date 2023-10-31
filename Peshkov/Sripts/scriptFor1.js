const RightNumber = [0,1,2,3,4,5]

function ConvertFrom6To10(){
    let NumberFromInputFrom6To10 = document.getElementById("From6To10Input").value;
    let isRight = new Boolean(false);
    let NumberFromInputFrom6To10String = NumberFromInputFrom6To10.toString()

    for (let i = 0; i < NumberFromInputFrom6To10String.length; i++){
        if (NumberFromInputFrom6To10String[i] in RightNumber){
            isRight = true;
        }
        else{
            isRight = false;
        }
    }

    if (isRight){
        document.getElementById('ResultDivFrom6To10').innerHTML = 'Ответ: ' + parseInt(NumberFromInputFrom6To10, 6);
    }
    else{
        document.getElementById('ResultDivFrom6To10').innerHTML = 'ОШИБКА';
    }
}