// const bodyParser = require('body-parser');
const express = require('express');
const authRoute = require('./routes/auth.route');

// ...

const app = express();

app.use(express.json());
app.use('/login', authRoute);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
