const express = require('express');
// created a constructor with express module hence you need to input with require expression
const app = express();
//adding userdefine constructor (app()) to express module.

app.get('/',(req,res) => {res.send("Hello Express")});
//http GET response from web.

app.listen(2002,() => {console.log("Console listens on port# 2002 !")} );


