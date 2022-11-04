const express = require('express');
const authRoute = require('./routes/auth.route');
const userRoute = require('./routes/user.route');
const categoriesRoute = require('./routes/categories.route');
const postRoute = require('./routes/post.route');

// ...

const app = express();

app.use(express.json());
app.use('/login', authRoute);
app.use(userRoute);
app.use(categoriesRoute);
app.use(postRoute);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
