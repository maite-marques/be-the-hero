const express = require ('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors()); // perimite que as aplicações front end 
app.use(express.json());
app.use(routes);


app.listen(3333); 