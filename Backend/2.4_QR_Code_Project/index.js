import fs from 'fs';
import inquirer from 'inquirer';
import qr from 'qr-image';

const userPrompt = await inquirer.prompt([
    {
        type: 'input',
        name: 'url',
        message: 'Please enter a valid URL:',
        validate: (input) => {
            try {
                new URL(input) // check if url is valid
                return true;
            } catch {
                return ("Oops, you entered an invalid URL");
            }
        },
    },
]);

const userURL = userPrompt.url;


const qr_png = qr.image(userURL, { type: "png" });
qr_png.pipe(fs.createWriteStream('QR_img.png'));


fs.writeFile('URL.txt', userURL, (error) => {
    if (error) throw error;
    console.log("All went well !");
});

