/**
 * @file Ejercicio1.js - Ejercicio 1
 * @author Jaime Benitez
 * @see <a href="https://jaimebenitez.com" target="_blank">Jaime Benitez </a>
 */

/** 
     * Funcion que calcula los años bisiestos si estos son validos
     * @returns {array<number>} Array de años bisiestos
     */

function isLeapYear(num1,num2){
    if (typeof(num1) == 'number' && typeof(num2) == 'number' && num1 <= 2500 && num2 <= 2500 && num1 >= 2001 && num2 >= 2001){
        let year1 = num1
        let year2 = num2
        
        
        let bisiestos = [];
        for(let i = year1; i <= year2; i++){
            if(i%4 == 0 || i%400 == 0 && i%100 == 0){
                bisiestos.push(i);
        }
    }
        return bisiestos;
    } else {
        alert('Numeros introducidos no validos')
    }

}
document.write(`<p>${isLeapYear(2001,2500).join(', ')}</p>`)
