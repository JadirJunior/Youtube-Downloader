const express = require('express');
const routes = require('./src/routes');
const app = express();
const cors = require('cors');
require('dotenv').config();


app.use(express.json());
app.use(cors());
app.use(routes);
app.listen(process.env.PORT || 3333, () => {
    console.log('Servidor Iniciado...')
});