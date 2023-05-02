const express = require('express')
const route = express.Router()

const services = require('../services/render')
const controller = require('../controller/controller')

route.get('/',services.login_user)
// Root Route
// Method - GET
route.get('/home',services.homeRoutes)

// Adding users
// Method - GET
route.get('/add_user', services.add_user)

// Updating users
// Method - GET
route.get('/update_user', services.update_user)

// Showing user details
// Method - GET
route.get('/show_user', services.show_user)

route.post('/api/users',controller.login)
route.post('/api/users',controller.create)
route.get('/api/users',controller.find)
route.get('/api/users/',controller.show)
route.put('/api/users/:id',controller.update)
route.delete('/api/users/:id',controller.delete)


module.exports = route;
