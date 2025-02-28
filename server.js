const express = require("express");
const app = express();
const port = 3333;

app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

// http://localhost:3333/users?id=1&token=abc
app.get("/users", (req, res) => {
    console.log(req.query);
    const userId = req.query.id;
    const token = req.query.token;
    // token validation
    const date = new Date();
    console.log(`User ${userId} logged in at ${date.toUTCString()}`);
    res.status(200).send("OK");
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
