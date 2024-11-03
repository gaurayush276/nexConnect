const { Schema, default: mongoose, SchemaType } = require("mongoose");



const peopleSchema =new Schema({
       name : String , 
       email : String ,
       password : String ,  
       friends: [Schema.Types.Mixed] ,
       course: String , 
       rollNo :Number , 
       room: String , 
       about :String , 
       
}) ;


 
const People = mongoose.model("People", peopleSchema);
module.exports = People;
