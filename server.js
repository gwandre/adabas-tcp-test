'use strict';

const express = require('express');
const Adabas = require('adabas-tcp').Adabas;

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/adabas', (req, res) => {
	const adabas = new Adabas('172.20.1.110', 60001);
	adabas.read({ fnr: 12 }).then( result => {
		res.send(result);
		adabas.close().then( () => adabas.disconnect() );
	});
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
