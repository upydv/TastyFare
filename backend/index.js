const express = require('express');
const app = express();
const port = 5000;
const mongoDB = require('./db');
const cors = require('cors');
// Connect to MongoDB
mongoDB();

app.use(cors());

app.get('/',(req, res) => {
    res.send('Hello');
});
app.use(express.json());
app.use('/api',require("./routes/Createuser"))
app.use('/api',require("./routes/Displaydata"))
app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
});
