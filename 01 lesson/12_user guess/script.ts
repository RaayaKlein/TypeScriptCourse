function func(): void{
    const randomNum:number = Math.ceil(Math.random() * 10); 

    let guess1:number = Number((document.getElementById('num1')));
    let guess2:number = Number((document.getElementById('num2')));
    let guess3:number = Number((document.getElementById('num3')));
    //let guess3:number = Number((<HTMLInputElement>document.getElementById('num3')).value);

    if(guess1 == randomNum || guess2 == randomNum || guess3 == randomNum )
        alert(`Good guess, number was: ${randomNum}`)
    else alert(`Wrong! please try again... , number was: ${randomNum}`);
}


