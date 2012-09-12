// Generated by CoffeeScript 1.3.3
var app, express;

express = require('express');

app = express();

app.set('views', __dirname + '/views');

app.set('view engine', 'jade');

app.use(express["static"](__dirname + '/public'));

app.get('/', function(req, res) {
  return res.render('index', {
    title: "Test"
  });
});

app.listen(3000);

console.log('Listening on port 3000');
