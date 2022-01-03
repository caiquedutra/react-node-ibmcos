const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json())

app.use(cors())

app.get('/', (req, res) => {
    res.send("ok")
})

const port = process.env.PORT || 3000;

app.listen(8080, () => {
    console.log(`listening on port ${port}`)
})


