//Server flags
let debugMode = false;


// Express Initialization
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();


// Import Functionality
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/terminal'));
app.use(session({secret: '1234567890QWERTY', resave: false, saveUninitialized: true}));

// Start the server
const server_port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
const server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
const server = app.listen(server_port, server_ip_address, function(){
	console.log("Listening on " + server_ip_address + ", server_port " + server_port);
});


// Create the console
const con = require('./console/console.js');


// Open the browser
const open = require('open');
open('http://localhost:3000');


// Respond to AJAX calls
app.post('/console', function(req, res){
	debug(req.body.input);
	res.json({response: con.input(req.body.input, req.session.id)});	
});

// Helper functions
function debug(debugText){
	if(debugMode){
		console.log(debugText);
	}
}