const route = require('express').Router()           // krna padega agar router banana hai toh

route.use('/users',require('./users'))
route.use('/products',require('./products'))

exports = module.exports = {
    route
}