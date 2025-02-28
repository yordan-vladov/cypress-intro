// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/register', function(req, res) {
res.sendFile(path.join(__dirname, '/register.html'));
});

app.get('/login', function(req, res) {
res.sendFile(path.join(__dirname, '/login.html'));
});

app.get('/thank-you', function(req, res) {
  res.sendFile(path.join(__dirname, '/thank-you.html'));

});