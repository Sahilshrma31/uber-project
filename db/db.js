const mongoose=require('mongoose')
function connectoDb(){
    mongoose.connect(process.env.DB_CONNECT)
    .then(()=>{
        console.log("connected to db");
        
    }).catch(err => console.log(err))}
module.exports=connectoDb