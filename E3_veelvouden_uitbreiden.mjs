import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

let start = parseFloat(await userInput.question('Met welk getal beginnen we? '));
let end = parseFloat(await userInput.question('Met welk getal eindigen we? '));
let deelbaar1 = parseFloat(await userInput.question('Wat is het eerste getal waarop we testen? '));
let deelbaar2 = parseFloat(await userInput.question('Wat is het tweede getal waarop we testen? '));


let keuze = await userInput.question('Wil je (1) deelbare getallen door deelbaar1, (2) door deelbaar2: (Voeg (1) of (2) in: ');

while (start <= end) {
    let isDeelbaar1 = start % deelbaar1 === 0;
    let isDeelbaar2 = start % deelbaar2 === 0;

    if (keuze === '1' && isDeelbaar1) {
        console.log(start);
    } else if (keuze === '2' && isDeelbaar2) {
        console.log(start);
    } else if (keuze === '3' && isDeelbaar1 && isDeelbaar2) {
        console.log(start);
    }

    start++;
}

process.exit();