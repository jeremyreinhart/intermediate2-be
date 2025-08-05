require("dotenv").config()

const express = require('express');
const database = require("./src/config/database")

const app = express();

const port = process.env.PORT || '3000'

app.use(express.json());

app.use('/produk', require("./src/routes/produk.route"));

app.listen(port, () => {
    database.query('SELECT 1')
    console.log(`Server is starting at ${port}`);
})