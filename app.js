const express = require('express');
const app = express();
app.use(express.static('public'));
app.get('/', (req, res) => {
    // res.send("hello, express World!!!!!")
    res.sendFile(__dirname + '/index.html')
})
app.listen(3000)