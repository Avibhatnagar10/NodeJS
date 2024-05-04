
const express = require("express");

const app = express();      //making an express app

app.get('/', (req, res) => {                           //get method used for home page(/)
    return res.send("Hello from home page");
});

app.get('/about', (req, res) => {                      //get method used for about page
    return res.send(`Hello ${req.query.name}`);

});

app.listen(8000, () =>console.log("Server is Started woohoo!!"))






// http://localhost:8000/search?search_query=javascript_tic+tac+toe