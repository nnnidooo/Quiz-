

const resultButton = document.querySelector('#submit-btn');
resultButton.addEventListener("click", function (){
    const correctAnswers = document.querySelectorAll('.correct');
    let howManyCorrect =  0;
    for (let i = 0; i < correctAnswers.length ; i++) {
        if (correctAnswers[i].checked){
            howManyCorrect++;
        }
    }
    document.querySelector('#output').innerHTML = "You answered " + howManyCorrect + " correct"

})

const showTheHidingAnswersBox = document.querySelector('.submit-button')
showTheHidingAnswersBox.addEventListener('click', function (){
    document.querySelector('#result').style.display = 'block';
})

