const sequelize = require('sequelize')
require('dotenv').config()
const db = process.env
// module.exports = new sequelize({
//     dialect: 'mysql',
//     host:db.DB_HOST,
//     port : 3306,
//     username : db.DB_USERNAME ,
//     password : db.DB_PASSWORD,
//     database : db.DB_DATABASE
// })
module.exports = new sequelize({
    dialect: 'mysql',
    host: "localhost",
    port : 3306,
    username : "root" ,
    password : "admin",
    database :  "nutrihealth" 
})