const RussianGlasBukvMass = 'ауоыиэяюеё';

function DeleteGlasBukv() {
    let DeleteGlasBukvText = document.getElementById("DeleteGlasBukvInput").value;
    let DeleteGlasBukvTextString = DeleteGlasBukvText.toString();
    let DeleteGlasBukvTextStringNew = '';

    DeleteGlasBukvTextStringNew = DeleteGlasBukvTextString.replace(/[ауоыиэяюеёАУОЫИЭЯЮЕЁ]/gi, '')

    document.getElementById('ResultDivDeleteGlasBukv').innerHTML = 'Ответ: ' + DeleteGlasBukvTextStringNew;

}