const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;
app.use(express.static(__dirname + '/public'));

app.get('/register', function(req, res) {
    res.sendFile(path.join(__dirname, '/register.html'));
});

app.get('/login', function(req, res) {
   res.sendFile(path.join(__dirname, '/login.html'));
});

app.get('/thank-you', function(req, res){
    res.sendFile(path.join(__dirname, '/thank-you.html'));
});
 

app.listen(port);
console.log('Server started at http://localhost:' + port);