/* 
    Stampa in console i numeri da 1 a 5 (singolarmente)
*/

// Soluzione 1 (Matteo)
// const uno = 1;
// const due = 2;
// const tre = 3;
// const quattro = 4;
// const cinque = 5;

// console.log(uno);
// console.log(due);
// console.log(tre);
// console.log(quattro);
// console.log(cinque);

// Soluzione 2 (Luciano)
// const uno = 1;
// const due = 2;
// const tre = 3;
// const quattro = 4;
// const cinque = 5;

// if (uno == 1) {
//     console.log(uno);
// }

// if (due == 2) {
//     console.log(due);
// }

// Soluzione 3 (Luca & Alessio perché Luca voleva imbrogliare)
// let contatore = 1;

// console.log(contatore);
// contatore = contatore + 1;
// console.log(contatore);
// contatore = contatore + 1;
// console.log(contatore);
// contatore = contatore + 1;
// console.log(contatore);
// contatore = contatore + 1;
// console.log(contatore);

// Soluzione 4 (con il for)
// for (let i = 1; i < 6; i++) {
//     console.log('FOR 1', i);
// }

// for (let i = 1; i <= 5; i++) {
//     console.log('FOR 2', i);
// }

// // Stampa tutti i numeri da 0 a 10 ogni 2
// // for (let gennaro = 0; gennaro <= 10; gennaro = gennaro + 2) {
// for (let gennaro = 0; gennaro <= 10; gennaro += 2) {
//     console.log('FOR 3', gennaro);
// }

// // Stampa tutti i numeri da 1 a 0 ogni 0.1
// // for (let marcella = 1; marcella >= 0; marcella -= 0.1) {
// let marcella = 3;
// for (marcella = 1; marcella >= 0; marcella = marcella - 0.1) {
//     console.log('FOR 4', marcella);
// }
// console.log(marcella);

// MAI ESEGUITO perché la condizione di permanenza non è valida all'inizio
// for (let marcella = 1; marcella <= 0; marcella -= 0.1) {
//     console.log('FOR 5', marcella);
// }

// MAI ESEGUITO perché la condizione di permanenza non è valida all'inizio
// for (let marcella = 1; marcella == 0; marcella -= 0.1) {
//     console.log('FOR 6', marcella);
// }

/* 
------------------------------------------------------------------
*/

// let a = 3;
// console.log('a prima', a);
// // a = a + 1;
// // a += 1;
// a++;
// console.log('a dopo', a);

// let b = 3;
// console.log('b prima', b);
// console.log('b dopo', b++);
// console.log('b dopo dopo', b);

// let c = 5;
// let d = c--;
// console.log('c', c);
// console.log('d', d);

// let e = 5;
// let f = --e;
// console.log('e', e);
// console.log('f', f);

/* 
------------------------------------------------------------------
*/

const myUl = document.querySelector('ul');

// myUl.innerHTML = `
//     <li>
//         1
//     </li>
// `;
// myUl.innerHTML = `
//     <li>
//         2
//     </li>
// `;
// myUl.innerHTML = `
//     <li>
//         3
//     </li>
// `;

for (let i = 1; i <= 10; i++) {
    console.log('Ora metto in lista ' + i);
    // myUl.innerHTML = myUl.innerHTML + `
    //     <li class="my-class-1 my-class-2">
    //         ${i}
    //     </li>
    // `;

    const newLi = document.createElement('li');
    // newLi.innerHTML = i;
    newLi.append(i);
    // newLi.className = 'my-class-1 my-class-2';
    newLi.classList.add('my-class-1');
    newLi.classList.add('my-class-2');

    myUl.append(newLi);
}

/* 
----------------------------------------
*/

/* 
    OPERATORE MODULO - %
    L'operatore modulo mi restituisce il resto della divisione tra i due operandi
*/

console.log(6 % 3); // Quindi questo mi restituirà 0
console.log(7 % 2); // Quindi questo mi restituirà 1
console.log(9 % 5); // Quindi questo mi restituirà 4

const numOne = 27;
const numTwo = 9;

if (numOne % numTwo == 0) {
    console.log(`${numOne} è multiplo di ${numTwo}`);
}
else {
    console.log(`${numOne} NON è multiplo di ${numTwo}`);
}

const numThree = 17;
const numFour = 4;
if (numThree % numFour == 0) {
    console.log(`${numThree} è multiplo di ${numFour}`);
}
else {
    console.log(`${numThree} NON è multiplo di ${numFour}`);
}