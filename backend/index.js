const express = require("express") ; 
const server =  express() ; 
const userRouter = require("./routes/authRouter") ; 
const peopleRouter = require("./routes/peopleRouter") ;
const mongoose = require("mongoose") ; 

mongoose.connect('mongodb+srv://gaurayush276:TMw2YiVjzJ1cKrdT@cluster1.4ajqy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1')
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

  // Middleware to parse JSON request body
server.use(express.json()) ; 

server.get('/' , (req,res) =>{
      res.json({ Status : "done"})
}) 
// console.log("user Router " , userRouter) 
// console.log("people Router " , peopleRouter) 
server.use('/users' , userRouter.router ) ; 
server.use('/people' , peopleRouter.router ) ; 

server.listen( 8000 , ()=>console.log("serverConnected")) ;