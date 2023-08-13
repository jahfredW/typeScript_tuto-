"use strict";
//generics :
function test(arg) {
    return arg;
}
const output = test(3);
// dans ce cas on perd le type
// solution 
function testGeneric(arg) {
    return arg;
}
const output2 = testGeneric("3");
// le type est gardé 
//********************************************************************************* */
const compteur = document.querySelector('#compteur');
// const compteur = document.querySelector('#compteur')!; jamais null -> point d'exclamation 
let i = 0;
const increment = (e) => {
    e.preventDefault();
    i++;
    const span = compteur?.querySelector('span');
    if (span) {
        span.innerText = i.toString();
    }
};
const user = { firstname: "fred", lastname: "gruwe" };
compteur?.addEventListener('click', increment);
const printId = (id) => {
    console.log(id);
    if (typeof (id) == "number") {
        console.log(id);
    }
};
