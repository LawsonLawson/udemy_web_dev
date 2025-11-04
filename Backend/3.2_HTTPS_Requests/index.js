import express from "express";

const myApp = express();
const port = 3000;


myApp.get("/", (req, res) => {
    res.send("<h2>Home</h2>\n<p>Welcome to My Page</p>\n");
});

myApp.get("/about", (req, res) => {
    res.send("<h2>About Me</h2><p>I am leaning backend Dev with NodeJS(runtimeEnv) + ExpressJS(JS Framework)</p>\n");
});

myApp.get("/contact", (req, res) => {
    res.send("<h2>Contact Me</h2><p>Phone: +233247190583</p>\n");
});

myApp.listen(port, () => {
    console.log(`All good, server is up on port ${port}.`);
});
