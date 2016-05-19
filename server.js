var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// making app use bodyParser()
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = process.env.PORT || 3000

// Routes for API
var router = express.Router(); // getting instance of express Router.

router.get('/', function(req, res) {
  res.json({message: 'yay.'});
});

app.use('/api', router);

app.listen(port);
console.log('magic bears are on port ' + port);
