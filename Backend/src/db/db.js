const mongoose = require('mongoose')

function connectDB(){
    mongoose.connect(process.env.MONODB_URL)
    .then(()=>{
        console.log("Connected to MongoDB")

    })
    .catch((err)=>{
        console.error("Error connecting to mongoDB",err)
    })
}
module.exports = connectDB