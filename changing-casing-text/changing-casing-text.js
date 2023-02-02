/*To capitalise the first letter of a name from a given prompt*/

let yourName = prompt("What is your name?");
alert(yourName[0].toUpperCase() + yourName.slice(1, yourName.length));