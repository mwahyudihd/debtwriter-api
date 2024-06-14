const dbConfig = require('../config/database')
const mongoose = require('mongoose')
const debt = require('./debt_model')

module.exports = {
    mongoose,
    url: dbConfig.url,
    user: require('./user_model')(mongoose),
    debt: require('./debt_model')(mongoose)
}