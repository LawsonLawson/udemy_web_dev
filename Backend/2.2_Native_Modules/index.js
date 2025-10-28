const myFile = require("fs");

// write to a file
myFile.writeFile("ten.py", "print(5+5)", (error) => {
    if (error) throw error;
    console.log("Successfully wrote a python program to the file!");
});

// read from a file
myFile.readFile("message.txt", "utf8", (error, fileContent) => {
    if (error) throw error;
    console.log("This is the content of the file I read:", fileContent);
});
