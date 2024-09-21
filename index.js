const express = require('express');
const app = express();

app.use(express.json());

require('./routes')(app)

app.listen(8000, () => {
    console.log("Server Started at 8000")
});