/* let year = prompt('In wich year was the most recent football wordcup held?') 
 if (year == 2022) { 
     alert("Yes, the year is 2022")
 } else {alert("No, it wasn't this year")}
 */

/* Uso do ternário
let accessAllowed;
let year = prompt('In wich year was the most recent football wordcup held?') 
if (year == 2000) { 
    accessAllowed = true
} else {accessAllowed = false}
alert(accessAllowed)
//let result = condition ? value1 : value2;
accessAllowed = (year==2000) ? true : false;
*/

let age = prompt('Age?', 18)
/* Uso do ternário - exemplo

let message = (age<3) ? 'Hi' :

                (age<18) ? 'Hello' :
                (age<100) ? 'Greeting' :
                'What an unusual Age';
                alert(message)
*/
if(age<3) {
    message = 'Hi'
} else if (age<18) {
    message =  'Hello'
} else if (age<100) {
    message =  'Grettings'
} else {
    message =  'What an unusual age'
}

/* Notas - o uso do operador ternário pode economizar linhas de código,
porém seu uso deve ser bem avaliado pelo fato de tornar o código
menos legível */

