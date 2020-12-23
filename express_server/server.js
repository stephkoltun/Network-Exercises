var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var multer = require('multer');
var upload = multer();


var data = [];

// 3000 = port Number
// callback function to run after app is running
// anonymous inline function
app.listen(3000, function () {
  console.log('Server listening on port 3000!')
});

// route for the form
app.post('/formpost', upload.array(), function (req, res) {
  // req = what you're receiving
  // res = what you send back

  var textvalue = req.body.textfield;

  //data.push(req.body.title);
  //data.push(req.body.textcontent);

  res.send("thanks for your contribution: " + textvalue);
})

// these are routes based on what the user requests
app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.get('/steph', function (req, res) {
	res.send('This is my server! Cool!');
})


app.get('/randomfile', function (req, res) {
	// create an array of file names
	var arrayOfFiles = ["plant.jpg", "other.jpg", "pink.jpg"];

	// select random file from array to be sent
	var randomNum = Math.floor(Math.random()*arrayOfFiles.length);
	var fileToSend = arrayOfFiles[randomNum];

	// location of where the files are located
	// the URL stays the same
	res.sendfile(fileToSend, {root: './public'}); // Files inside "public" folder

	// or could do a redirect BECAUSE it's in the STATIC directory
	// watch the URL - it changes
	//res.redirect(arrayOfFiles[randomNum]);

});




// server static files as well as routes
app.use(express.static('public'));

console.log("I made this on the server");
