const express = require('express');
const morgan = require('morgan');

const notesRoutes= require('./routes/notes.routes');

const app = express();

app.use(morgan('dev'));

app.use(notesRoutes);

app.listen(3000);
console.log('Server started on port 3000');