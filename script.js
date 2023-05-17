const oldResult = document.querySelector('.oldResult');
const newResult = document.querySelector('.newResult');
const numeri= document.querySelectorAll('#number');
const Sdelete= document.querySelector('#delete');
const deleteAll = document.querySelector('#deleteAll');
const Dsigns = document.querySelectorAll("#Dsign");
const addizione = document.querySelector('#addizione');
const moltiplicazione = document.querySelector('#moltiplicazione');
const sottrazione = document.querySelector('#sottrazione');
const divisione = document.querySelector('#divisione');
const potenza = document.querySelector('#potenza');
const radice = document.querySelector('#radice');

let firstN=0, secondN=0, sign, result=0, pressed = 0, fNumber = 0;

numeri.forEach((numero) => {
    
    numero.addEventListener('click' , () => {
        if(fNumber === 0) {
            newResult.textContent+= numero.textContent;
            firstN+=numero.textContent;
        } else if (fNumber === 1) {
            //newResult.textContent= '';

            newResult.textContent+= numero.textContent;
            secondN+= parseFloat(numero.textContent);
            
        }
    });

});

deleteAll.addEventListener('click', () => {
    newResult.textContent="";
    oldResult.textContent='';
    pressed = 0;
    firstN=0;
    fNumber=0;
    secondN=0;
    result=0;
});

Sdelete.addEventListener('click' , () => {
    if(newResult.textContent == 'NaN') {
        newResult.textContent="";
        oldResult.textContent='';
    } else {
        let str = newResult.textContent;
        newResult.textContent = str.slice(0, -1); 
        
    }
});

addizione.addEventListener('click' , () => {

    if(pressed === 0) {
        sign= addizione.textContent;
        oldResult.textContent= newResult.textContent +sign;
        
        fNumber =1;
        pressed = 1; 
        newResult.textContent= '';

    } else if (pressed === 1) {
        //sign= addizione.textContent;
        result= operate(parseFloat(firstN), parseFloat(secondN), sign);
        sign= addizione.textContent;
        firstN= result;
        secondN=0;
        newResult.textContent= '';
        oldResult.textContent= result+sign;
    
        fNumber = 1;
        
    }
});

sottrazione.addEventListener('click' , () => {

    if(pressed === 0) {
        
        sign= sottrazione.textContent;
        oldResult.textContent= newResult.textContent +sign;
        
        
        newResult.textContent= '';
        pressed = 1; 
        fNumber = 1;

    } else if (pressed === 1) {

        result= operate(parseFloat(firstN), parseFloat(secondN), sign);
        sign= sottrazione.textContent;
        firstN= result;
        secondN=0;
        newResult.textContent= '';
        oldResult.textContent= result+sign;
        console.log(result);
        console.log(firstN);
        console.log(secondN);
    
    }
});

moltiplicazione.addEventListener('click' , () => {

    if(pressed === 0) {
        
        sign= moltiplicazione.textContent;
        oldResult.textContent= newResult.textContent +sign;
        
        
        newResult.textContent= '';
        pressed = 1; 
        fNumber = 1;

    } else if (pressed === 1) {
        //sign= moltiplicazione.textContent;
        result= operate(parseFloat(firstN), parseFloat(secondN), sign);
        sign= moltiplicazione.textContent;
        firstN= result;
        secondN=0;
        console.log(result);
        console.log(firstN);
        console.log(secondN);
        newResult.textContent= '';
        oldResult.textContent= result+sign;
    
    }
});
    
/*
    Dsign.addEventListener('click' , () => {

        if(pressed === 0) {
            
            firstN= newResult.textContent;
            sign = Dsign.textContent;
            newResult.textContent+= sign;
            pressed = 1;

        } else if(pressed === 1) {

            secondN= newResult.textContent;
            newResult.textContent= operate(parseFloat(firstN), parseFloat(secondN), sign);
            sign = Dsign.textContent;
            oldResult.textContent= newResult.textContent;
            pressed = 0;

        }
    });


});*/


//numeri.addEventListener('click' , () => {
//    schermo.textContent+= numeri.textContent;
//})

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
            return firstN / secondN;
            break;

        default:
            break;
    }
}

