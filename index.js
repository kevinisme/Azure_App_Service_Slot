if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }

const express = require('express');
const app = express();
const port = process.env.PORT || 80;

// GET /
app.get('/', async (req, res) => {
    res.send(process.env.info);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})