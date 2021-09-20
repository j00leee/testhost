const express = require('express');
const app = express();

app.get("/test", (req,res) => {res.send("test")} );

app.listen(5000, () => {
    console.log("hi it's listening to port 5000");
});