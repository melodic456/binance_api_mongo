const express = require('express');
const cors = require('cors');
const Data = require('./data');
const db = require('./db');
const api = require('./api');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors()); // Enable CORS to allow cross-origin requests

// Use the API endpoints defined in api.js
app.use('/api', api);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});



