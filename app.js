const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('All great feats start with a step and then another step'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
