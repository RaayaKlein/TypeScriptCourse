//let guess2 = (<HTMLInputElement>document.getElementById('guees1')).value;
function func() {
    var randomNum = Math.ceil(Math.random() * 10);
    var guess1 = Number(document.getElementById('num1').value);
    var guess2 = Number(document.getElementById('num2').value);
    var guess3 = Number(document.getElementById('num3').value);
    if (guess1 == randomNum || guess2 == randomNum || guess3 == randomNum)
        alert("Good guess, number was: " + randomNum);
    else
        alert("Wrong! please try again... , number was: " + randomNum);
}
