const oldResult = document.querySelector('.oldResult');
const newResult = document.querySelector('.newResult');
const numeri= document.querySelectorAll('#number');
const Sdelete= document.querySelector('#delete');
const deleteAll = document.querySelector('#deleteAll');
const addizione = document.querySelector('#addizione');
const moltiplicazione = document.querySelector('#moltiplicazione');
const sottrazione = document.querySelector('#sottrazione');
const divisione = document.querySelector('#divisione');
const potenza = document.querySelector('#potenza');
const radice = document.querySelector('#radice');
const uguale = document.querySelector('#equal');
const dot = document.querySelector('#dot');

let firstNumber='', secondNumber='', str='', sign, result=0, operatorPressed = 0; 
let fNumber = 0; //needed to know whether the user is entering the first number or the second number

/* ------------ event listeners ------------ */

numeri.forEach((numero) => {
    
    numero.addEventListener('click' , () => {

        if(fNumber === 0) {

            sign == '=' ? inizialize() : null ; 

            newResult.textContent+= numero.textContent;
            firstNumber+=numero.textContent;

        } else if (fNumber === 1 && sign != '') {

            newResult.textContent+= numero.textContent;
            secondNumber+= numero.textContent;
            
        }
    });

});



dot.addEventListener('click',  () => {
    if (sign != '=' && newResult.textContent != '') {

        let trovato1 = firstNumber.includes('.');
        let trovato2 = secondNumber.includes('.');

        if ((firstNumber != '' && operatorPressed === 0) && (!trovato1)) { 

            newResult.textContent += dot.textContent;
            firstNumber+=dot.textContent;
            console.log(`sono trovato1 ${trovato1}`)
    
        } else if ((secondNumber != '' && operatorPressed === 1) && (!trovato2)) {

            newResult.textContent += dot.textContent;
            secondNumber+= dot.textContent;
            console.log(`sono trovato2 ${trovato2}`)

        }

    } 
});


deleteAll.addEventListener('click',  () => {
     inizialize();
});


Sdelete.addEventListener('click' , () => {
    if (sign != '=') {

        if(newResult.textContent == 'NaN' || newResult.textContent == 'Infinity') {
            inizialize();

        } else if (oldResult.textContent.slice(-1) != sign && newResult.textContent != '' && operatorPressed == 0) {

            str = newResult.textContent;
            newResult.textContent = str.slice(0, -1); 
            str = firstNumber;
            firstNumber = str.slice(0, -1); 

        } else {

            str = newResult.textContent;
            newResult.textContent = str.slice(0, -1); 
            str = secondNumber;
            secondNumber = str.slice(0, -1); 
        
        }

    }
});



addizione.addEventListener('click' , () => {

    if (firstNumber != '') { 

        if(operatorPressed === 0) {

            sign= addizione.textContent;
            oldResult.textContent= newResult.textContent +sign;
            newResult.textContent = '';
        
            fNumber =1;
            operatorPressed = 1; 

        } else if (operatorPressed === 1 && secondNumber != '') {

            result= operate(parseFloat(firstNumber), parseFloat(secondNumber), sign);
            sign= addizione.textContent;
            firstNumber= String(result);
            secondNumber='';
            newResult.textContent= '';
            oldResult.textContent= result+sign;
        
        }
    }
});

sottrazione.addEventListener('click' , () => {
    if (firstNumber != '') {

        if(operatorPressed === 0) {
        
            sign= sottrazione.textContent;
            oldResult.textContent= newResult.textContent +sign;
            newResult.textContent = '';
        
            operatorPressed = 1; 
            fNumber = 1;

        } else if (operatorPressed === 1 && secondNumber != '') {

            result= operate(parseFloat(firstNumber), parseFloat(secondNumber), sign);
            sign= sottrazione.textContent;
            firstNumber= String(result);
            secondNumber='';
            newResult.textContent= '';
            oldResult.textContent= result+sign;
    
        }
    }
});

moltiplicazione.addEventListener('click' , () => {
    if (firstNumber != '') {

        if(operatorPressed === 0 ) {
        
            sign= moltiplicazione.textContent;
            oldResult.textContent= newResult.textContent +sign;
            newResult.textContent= '';

            operatorPressed = 1; 
            fNumber = 1;

        } else if(operatorPressed === 1 && secondNumber != '') {

            result= operate(parseFloat(firstNumber), parseFloat(secondNumber), sign);
            sign= moltiplicazione.textContent;
            firstNumber= String(result);
            secondNumber= '';
            newResult.textContent= '';
            oldResult.textContent= result+sign;
    
        }
    }
});

divisione.addEventListener('click' , () => {
    if (firstNumber != '') {

        if(operatorPressed === 0 ) {
        
            sign= divisione.textContent;
            oldResult.textContent= newResult.textContent +sign;
            newResult.textContent= '';

            operatorPressed = 1; 
            fNumber = 1;

        } else if(operatorPressed === 1 && secondNumber != '') {

            result= operate(parseFloat(firstNumber), parseFloat(secondNumber), sign);
            sign= divisione.textContent;
            firstNumber= String(result);
            secondNumber= '';
            newResult.textContent= '';
            oldResult.textContent= result+sign;
    
        }
    }
});

potenza.addEventListener('click' , () => {
    if (firstNumber != '') {

        if(operatorPressed === 0 ) {
        
            sign= potenza.textContent;
            oldResult.textContent= newResult.textContent +sign;
            result= operate(parseFloat(firstNumber), parseFloat(secondNumber), sign);
            oldResult.textContent= ` ${firstNumber} ${sign}`;
            firstNumber= String(result);
            secondNumber= '';
            newResult.textContent= result;

        } 
    }
});

radice.addEventListener('click' , () => {
    if (firstNumber != '') {

        if(operatorPressed === 0 ) {
        
            sign= radice.textContent;
            oldResult.textContent= newResult.textContent +sign;
            result= operate(parseFloat(firstNumber), parseFloat(secondNumber), sign);
            oldResult.textContent= ` ${firstNumber} ${sign}`;
            firstNumber= String(result);
            secondNumber= '';
            newResult.textContent= result;

        } 
    }
});

uguale.addEventListener('click' , () => {
    if (firstNumber != '' && secondNumber != '') {
        
            
            oldResult.textContent= ` ${firstNumber} ${sign} ${secondNumber} `;
            newResult.textContent= '';
            result= operate(parseFloat(firstNumber), parseFloat(secondNumber), sign);
            sign= '=';
            newResult.textContent= result;
            firstNumber= String(result);
            secondNumber= '';

            operatorPressed = 0; 
            fNumber = 0;

    } 

});
    
/* --------------------------------------------------------- */

function operate (firstN, secondN, sign) {

    switch (sign) {
        case '+':
            return firstN + secondN;
            break;
        
        case '-':
            return firstN - secondN;
            break;

        case '*':
            return (firstN * secondN);
            break;

        case '/':
            return  (secondN != 0) ? (firstN / secondN) : 'Infinity';
            break;

        case 'x²':
            return firstN * firstN;
            break;

        case '√':
            return Math.sqrt(firstN);
            break;

        default:
            break;
    }
}

function inizialize () {
    newResult.textContent='';
    oldResult.textContent='';
    operatorPressed = 0;
    fNumber= 0;

    firstNumber='';
    secondNumber='';
    result=0;
    sign= undefined;
    str='';

};