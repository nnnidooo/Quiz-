




const finish = document.querySelector('#submitBtn');
finish.addEventListener("click", function (){
    const correctAmount = document.querySelectorAll('.correct');
    let howManyCorrect = 0;
    for (let i = 0; i < correctAmount.length ; i++) {
        if (correctAmount[i].checked){
            howManyCorrect++;

        }
    }
    console.log("You answered " + howManyCorrect + " correct");
})
