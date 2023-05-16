const schermo = document.querySelector('.display');
const numeri= document.querySelectorAll('#number');

let firstN, secondN, sign;

numeri.forEach((numero) => {
    
    numero.addEventListener('click' , () => {
        schermo.textContent+= numero.textContent;
    })

});


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

