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

let firstN='', secondN='', str='', sign, result=0, pressed = 0, fNumber = 0;


numeri.forEach((numero) => {
    
    numero.addEventListener('click' , () => {
        if(fNumber === 0) {
            if (sign == '=') {
                inizialize();
            }
            newResult.textContent+= numero.textContent;
            firstN+=numero.textContent;
        } else if (fNumber === 1 && sign != '') {

            newResult.textContent+= numero.textContent;
            secondN+= numero.textContent;
            
        }
    });

});



deleteAll.addEventListener('click',  () => {
     inizialize ();
});


Sdelete.addEventListener('click' , () => {
    if (sign != '=') {

    if(newResult.textContent == 'NaN' || newResult.textContent == 'Infinity' ) {
        inizialize();
    } else if (oldResult.textContent.slice(-1) != sign && newResult.textContent != '' && pressed == 0) {

        /*str=oldResult.textContent.slice(0, -1);
        sign='';
        oldResult.textContent=str;
        pressed = 0; */
        console.log(firstN);
        str = newResult.textContent;
        newResult.textContent = str.slice(0, -1); 
        str = firstN;
        firstN = str.slice(0, -1); 
        console.log(firstN);
    } else {

        str = newResult.textContent;
        newResult.textContent = str.slice(0, -1); 
        str = secondN;
        secondN = str.slice(0, -1); 
        
    }

    }
});



addizione.addEventListener('click' , () => {

    if (firstN != '') { 

        if(pressed === 0) {

            sign= addizione.textContent;
            oldResult.textContent= newResult.textContent +sign;
            newResult.textContent = '';
        
            fNumber =1;
            pressed = 1; 

        } else if (pressed === 1 && secondN != '') {
            sign= addizione.textContent;
            result= operate(parseFloat(firstN), parseFloat(secondN), sign);
            //sign= addizione.textContent;
            firstN= result;
            secondN='';
            newResult.textContent= '';
            oldResult.textContent= result+sign;
        
        }
    }
});

sottrazione.addEventListener('click' , () => {
    if (firstN != '') {

        if(pressed === 0) {
        
            sign= sottrazione.textContent;
            oldResult.textContent= newResult.textContent +sign;
            newResult.textContent = '';
        
            pressed = 1; 
            fNumber = 1;

        } else if (pressed === 1 && secondN != '') {

            result= operate(parseFloat(firstN), parseFloat(secondN), sign);
            sign= sottrazione.textContent;
            firstN= result;
            secondN='';
            newResult.textContent= '';
            oldResult.textContent= result+sign;
    
        }
    }
});

moltiplicazione.addEventListener('click' , () => {
    if (firstN != '') {

        if(pressed === 0 ) {
        
            sign= moltiplicazione.textContent;
            oldResult.textContent= newResult.textContent +sign;
            newResult.textContent= '';

            pressed = 1; 
            fNumber = 1;

        } else if(pressed === 1 && secondN != '') {

            result= operate(parseFloat(firstN), parseFloat(secondN), sign);
            sign= moltiplicazione.textContent;
            firstN= result;
            secondN= '';
            newResult.textContent= '';
            oldResult.textContent= result+sign;
    
        }
    }
});

divisione.addEventListener('click' , () => {
    if (firstN != '') {

        if(pressed === 0 ) {
        
            sign= divisione.textContent;
            oldResult.textContent= newResult.textContent +sign;
            newResult.textContent= '';

            pressed = 1; 
            fNumber = 1;

        } else if(pressed === 1 && secondN != '') {

            result= operate(parseFloat(firstN), parseFloat(secondN), sign);
            sign= divisione.textContent;
            firstN= result;
            secondN= '';
            newResult.textContent= '';
            oldResult.textContent= result+sign;
    
        }
    }
});

potenza.addEventListener('click' , () => {
    if (firstN != '') {

        if(pressed === 0 ) {
        
            sign= potenza.textContent;
            oldResult.textContent= newResult.textContent +sign;
            newResult.textContent= '';
            result= operate(parseFloat(firstN), parseFloat(secondN), sign);
            firstN= result;
            secondN= '';
            newResult.textContent= '';
            oldResult.textContent= result;
            //pressed = 1; 
            //fNumber = 1;

        } 
    }
});

radice.addEventListener('click' , () => {
    if (firstN != '') {

        if(pressed === 0 ) {
        
            sign= radice.textContent;
            oldResult.textContent= newResult.textContent +sign;
            newResult.textContent= '';
            result= operate(parseFloat(firstN), parseFloat(secondN), sign);
            firstN= result;
            secondN= '';
            newResult.textContent= '';
            oldResult.textContent= result;
            //pressed = 1; 
            //fNumber = 1;

        } 
    }
});

uguale.addEventListener('click' , () => {
    if (firstN != '' && secondN != '') {
        
            
            oldResult.textContent= ` ${firstN} ${sign} ${secondN} `;
            newResult.textContent= '';
            result= operate(parseFloat(firstN), parseFloat(secondN), sign);
            sign= '=';
            newResult.textContent= result;
            firstN= result;
            secondN= '';

            pressed = 0; 
            fNumber = 0;

    } 

});
    


function operate (firstN, secondN, sign) {

    switch (sign) {
        case '+':
            return firstN + secondN;
            break;
        
        case '-':
            return firstN - secondN;
            break;

        case '*':
            return firstN * secondN;
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
    newResult.textContent="";
    oldResult.textContent='';
    pressed = 0;
    fNumber=0;

    firstN='';
    secondN='';
    result=0;
    sign='';
};