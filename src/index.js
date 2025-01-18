const express = require('express');
const bodyPareser = require('body-parser');

const { PORT } = require('./config/serverConfig');

//const {sendBasicEmail} = require('./services/email-service');

const TicketController = require('./controller/ticket-controller');

//for sheduling the task
// const cron = require('node-cron');

const jobs = require('./util/job');

const setupAndStartServer = ()=>{
    const app = express();
    app.use(bodyPareser.json());
    app.use(bodyPareser.urlencoded({extended:true}));

    app.post('/api/v1/tickets',TicketController.create);

    app.listen(PORT,()=>{
        console.log(`Server started at port ${PORT}`);
        jobs();
        //uncomment this below code function to send a mail
        // sendBasicEmail(
        //     'support@admim.com',//from
        //     'penguinlazy147@gmail.com',//to
        //     'This is a testing email',//subject
        //     'Hey ,how are you, I hope you like the support'//body
        // )
    });

}

setupAndStartServer();