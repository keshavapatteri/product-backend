

const mongoose = require('mongoose')
const MONGO_DB_URL = process.env.MONGO_DB_URL
const DB_NAME = process.env.DB_NAME


mongoose.connect(`${MONGO_DB_URL}/${DB_NAME}`)
.then(()=>{
    console.log("db connected");
})
.catch((err)=>
console.log(err))