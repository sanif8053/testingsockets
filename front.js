const express = require("express");
const app = express();
const path = require('path');
app.set("port", 3000);
app.listen(3000)

app.use(express.static(path.join(__dirname, '/public')))