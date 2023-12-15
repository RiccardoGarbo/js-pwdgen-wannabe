
/*

1-Dichiarare una variabile nome
2-Chiedere il nome all'utente
3-Salvarlo in una variabile
4-Dichiarare una variabile cognome
5-Chiedere il cognome all'utente 
6-Salvarlo in una variabile
7-Dichiarare una variabile colore
8-Chiadere il colore preferito all'utente
9-Salvarlo in una variabile
10-Dichiaro una variabile number
11-Creo una variabile number
12-Recupero l'elemento nell'HTML
13-Costrisco il contenuto da inserire nell l'elemento
14-Inserisco il contenuto nell'elemento
*/


/*Prova console*/
console.log('JS OK')
/*Svolgimento punti 1,2,3*/
const firstName = prompt('Qual è il tuo nome?', 'Riccardo')
console.log(firstName)

/*Svolgimento punti 4,5,6*/
const surName = prompt('Qual è il tuo cognome?', 'Garbo')
console.log(surName)

/*Svolgimento punti 7,8,9*/
const color = prompt('Qual è il tuo colore preferito?', 'Rosso')
console.log(color)

/*Svolgimento punti 10,11*/
const number = ('23')
console.log(number)

/*Svolgimento punto 12*/
const element = document.getElementById('password')
console.log(password)

/*Svolgimento punto 13*/
const passGen = firstName + surName + color + number
console.log(passGen)

/*Svolgimento punto 14*/
element.innerText = passGen;











