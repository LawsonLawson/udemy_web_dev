import express from "express";

const port = 3000;
const myApp = express();

myApp.listen(3000, () => {
    console.log(`All good! Server is running on port ${port}.`);
});

