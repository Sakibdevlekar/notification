const cron = require('node-cron')
require('dotenv').config();
const TicketNotificationModel = require('../models/ticketNotification.model')
const EmailTransporter = require('../notifier/emailService')

cron.schedule('*/1 * * * *', async() =>{
    const notifications = await TicketNotificationModel.find({
        sentStatus: "UN_SENT"
})

console.log(`Count of unsent notification: ${notifications.length}`)

    notifications.forEach(notification => {
        const mailData = {
            from: process.env.GMAIL,
            to: notification.recipientEmails,
            subject: notification.subject,
            text: notification.content
        }
        console.log(mailData)

        EmailTransporter.sendMail(mailData, async (err, info) => {
            if (err) {
                console.log(err.message)
            } else {
                console.log(info)
                const savedNotification = await TicketNotificationModel
                    .findOne({ _id: notification._id })
                savedNotification.sentStatus = "SENT"
                await savedNotification.save()
            }
        })
    })
})