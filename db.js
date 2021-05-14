const Sequelize = require('sequelize')

const db = new Sequelize('shopdb','customer','shoppass',{
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
    }
})

const User = db.define('users',{                            // User name ki table bnn jaaegi database mein 
    id:{
        type: Sequelize.INTEGER,            // Default values also
        autoIncrement : true,              //
        primaryKey: true                    //
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    }
})


const Product = db.define('products',{                        // Product name ki table bnn jaaegi database mein 
    id:{
        type: Sequelize.INTEGER,            // Default values also
        autoIncrement : true,              //
        primaryKey: true                    //
    },
    name: {
        type: Sequelize.STRING,
        allowNull:false
    },
    manufacturer: Sequelize.STRING,
    price: {
        type: Sequelize.FLOAT,
        allowNull:false,
        defaultValue: 0.0
    }
})

db.sync()
    .then(()=>console.log("Database has been Synced ... "))
    .catch((err)=>console.log("Error creating database"))

exports = module.exports = {
    User,Product
}
