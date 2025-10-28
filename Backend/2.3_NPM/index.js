import {randomSuperhero} from 'superheroes';
import generateName from 'sillyname';
import fs from 'fs';

var output = (`I am ${randomSuperhero()}! but my friends call me ${generateName()}\n`);

fs.writeFile('output.txt', output, (error) => {
    if (error) throw error;
    console.log("All went well !");
});


