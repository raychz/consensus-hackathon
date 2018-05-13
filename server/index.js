const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = '3000';


app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, 'dist')));


app.get('*', (req, res) => {
  // res.sendFile(path.join(__dirname, 'index.html'));
  res.send('<p>Hello world</p>');
});


app.listen(port, () => console.log(`API running on localhost:${port}`));
