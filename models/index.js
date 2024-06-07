const dbConfig = require("../configs/dbConfig.js")

const { Sequelize, Datatypes } = require('sequelize')

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect

    // pool: {
    //     max: dbConfig.pool.max,
    //     min: dbConfig.pool.min,
    //     acquire: dbConfig.pool.acquire,
    //     idle: dbConfig.pool.idle
    // }
})

sequelize
    .authenticate()
    .then(() => {
        console.log('Connected to the database')
    })
    .catch(err => {
        console.log('Error database')
    })

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

// create table
db.users = require('./users.js')(sequelize, Datatypes)
db.posts = require('./posts.js')(sequelize, Datatypes)

// create relation
db.users.hasMany(db.posts,{
    foreignKey: 'userId',
    as: 'posts'
})

db.posts.belongsTo(db.users,{
    foreignKey: 'userId',
    as: 'posts'
})

db.sequelize.sync({ alter: true}).then(() => {
    console.log('yes re-sync done!!')
})

module.exports = db