
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.mongoDB_Url,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true,
// useCreateIndex:true

}).then(()=>{
    console.log("Connected");
}).catch((error)=>{
    console.log(error);
})

