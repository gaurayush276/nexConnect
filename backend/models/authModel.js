const { Schema, default: mongoose, SchemaType } = require("mongoose");



const userSchema =new Schema({
       name : String , 
       email : String ,
       password : String ,  
       friends: [Schema.Types.Mixed] ,
       
}) ;


 
const User = mongoose.model("User", userSchema);
module.exports = User;
