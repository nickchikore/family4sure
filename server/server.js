const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require("nodemailer");

const PORT = 3000;
const app = express();
app.use(bodyParser.json());
app.use(cors({origin: '*'}));

app.listen(PORT, function(){
    console.log('Server is running at localhost:' + PORT);
})
app.get('/', function(req, res) {
    res.send('Hello from server');
})
app.post('/sendmail', function(req, res) {
    let user = req.body;
    console.log('Recieved mail ',user);
    res.status(200).send({'message':'Data Received'})
    sendMail(user, info =>{
        console.log(`The mail has been sent and the id is ${info.id}`);
        res.send(info);
    });
});

async function sendMail(user, callback) {

}
