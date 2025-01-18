const cron = require('node-cron');
const emailService = require('../services/email-service');
const { response } = require('express');
const sender = require('../config/emailConfig')

/**
 * check are there any pending email expected to be send by now and we send
 */

const setupJobs = () =>{
    cron.schedule('*/2 * * * *' , async () =>{
        const response = await emailService.fetchPendingEmails();
        response.forEach((email)=>{
            sender.sendMail({
                to: email.recepientEmail,
                subject: email.subject,
                text:email.content
            },async (err, data) => {//callback to update the ticket status = success
                if(err){
                    console.log(err);
                }else{
                    console.log(data);
                    await emailService.updateTicket(email.id,"SUCCESS");
                }
            }); 
        });

    });
}

module.exports = setupJobs;