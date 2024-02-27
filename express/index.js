const express = require('express');
const app = express();
const port = 4000
app.get('/', (req, res) =>{
    res.send('Hello World');
});

app.listen(port, function() {
    console.log('the server is running at http://localhost:%s', port);
});