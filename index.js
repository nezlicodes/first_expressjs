// Express is a node module, in order to use it you need to import it.

const express = require('express');
// call the express function
const app = express(); 


//tell the browser what to do when a get request is called
app.get('/', (req, res, next) => {
    //send this response to the cliend
    res.send('My First Express app !')
})

// ask your server to listen
app.listen(3000);