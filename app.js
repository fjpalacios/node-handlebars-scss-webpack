'use strict';

require('dotenv').load();

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const exphbs = require('express-handlebars');
const viewDir = path.join(__dirname, 'views');
const publicDir = path.join(__dirname, 'public');
const port = (process.env.PORT || 3000);

let app = express();

app
  .set('views', viewDir)
  .engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(viewDir, 'layouts'),
    partialsDir: path.join(viewDir, 'partials')
  }))
  .set('view engine', '.hbs')
  .set('port', port)
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(express.static(publicDir))
  .use(require('./routes/index'))
  .listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
  });

module.exports = app;
