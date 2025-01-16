const express = require('express');
const bodyPareser = require('body-parser');

const { PORT } = require('./config/serverConfig');

const setupAndStartServer = ()=>{
    const app = express();
    app.use(bodyPareser.json());
    app.use(bodyPareser.urlencoded({extended:true}));

    app.listen(PORT,()=>{
        console.log(`Server started at port ${PORT}`);
    })
}

setupAndStartServer();