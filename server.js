"use strict"; {
    const express = require("express");
    const items = require('./router');
    const app = express();
    const port = 8888;

    app.use(express.json());
    app.use('/cart-items', items);

    app.listen(port, function(){
        console.log(`Server up and running on localhost:${port}`);
    });
}