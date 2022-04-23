const mongoose = require('mongoose');


const mognoUrl="mongodb://localhost:27017/UserPage?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"


const connectToMongo=()=>{
    mongoose.connect(mognoUrl,()=>{
        console.log("Mongoose connect successfully");
    })
}


module.exports=connectToMongo;