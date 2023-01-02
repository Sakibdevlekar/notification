const notificationController = require('../controller/ticketNotification.controller')
const express= require('express')
const routes = express.Router()

routes.post("/notifyService/api/notifications/", notificationController.acceptNotificationRequest)
routes.get("/notifyService/api/notifications/:id", notificationController.getNotificationStatus)

module.exports ={
    NotificationRoutes:routes
}