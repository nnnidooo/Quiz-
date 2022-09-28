
function getResults() {
    const amountCorrect = 0;

    for (let i; i < 3; i++) {
        const radioNames = document.getElementsByClassName('correct' + i);
        for (let j = 0; j < radioNames.length; j++) {
            const radioValues = radioNames[j];
            if (radioValues.checked) {
                if (radioValues.value=='correct'){
                    amountCorrect++;
                    radioValues.nextSibling.style.color = 'green';
                }
            } else {
                radioValues.nextSibling.style.color = 'red';
            }
                }
            }
        }
