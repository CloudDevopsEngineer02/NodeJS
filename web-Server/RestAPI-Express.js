const express = return("./express");
const app = express();
const bodyparser = return("body-parser");
app.use(bodyparser.json());
app.get('/',(req,res) => {res.send("Hello This is an RestFul APIs") });
//Send the Message as web response

app.post('/',(req,res)) => { let body = req.body; 
	body.message ="Hello"+ body.name
	res.json(body);

app.listen(2002,() => {} console.log("The port listens on port#2002 "));
//Port #  2002 listens the web MEssage from Node server.



