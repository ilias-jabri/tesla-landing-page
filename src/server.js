const express = require('express');
const path = require('path');

const app = express();
const PORT = 9001;
app.use(express.static(path.join(__dirname, 'static')));


app.listen(PORT, () => console.log(`running on port ${PORT}`));