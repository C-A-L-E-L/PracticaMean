const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const { mongoose } = require('./database');

// SETTINGS
app.set('nombreApp', 'Aplicacion para manejo de gastos SRI');
app.set('puerto', process.env.PORT || 3000);

// MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));
