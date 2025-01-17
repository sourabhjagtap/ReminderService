const express = require('express');
const bodyPareser = require('body-parser');

const { PORT } = require('./config/serverConfig');

const {sendBasicEmail} = require('./services/email-service');

const setupAndStartServer = ()=>{
    const app = express();
    app.use(bodyPareser.json());
    app.use(bodyPareser.urlencoded({extended:true}));

    app.listen(PORT,()=>{
        console.log(`Server started at port ${PORT}`);

        //uncomment this below code function tot send a mail
        // sendBasicEmail(
        //     'support@admim.com',//from
        //     'penguinlazy147@gmail.com',//to
        //     'This is a testing email',//subject
        //     'Hey ,how are you, I hope you like the support'//body
        // )
    });

}

setupAndStartServer();