const { NotificationTicket } = require('../models/index');
const {Op} = require("sequelize");

class TicketRepository {
    async getAll(){
        try {
            const tickets = await NotificationTicket.findAll();
            return tickets;
        } catch (error) {
            throw error;
        }
    }

    async create(data){
        try {
            const ticket = await NotificationTicket.create(data);
            return ticket;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async get(filter){
        try {
            const tickets = await NotificationTicket.findAll({
                where:{
                    status:filter.status,
                    notificationTime : {
                        [Op.lte]:new Date()
                    }
                }
            });
            return tickets;
        } catch (error) {
            throw error;
        }
    }

    async update(ticketId,data){
        try {
            const ticket = await NotificationTicket.findByPk(ticketId);
            if(data){
                console.log("from ticket repo 1",data);
                ticket.status = data;
                console.log("from ticket repo 2",ticket.status);
            }
            await ticket.save();
        } catch (error) {
            throw error;
        }
    }
};

module.exports = TicketRepository;