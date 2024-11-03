const express = require("express") ; 
const {createUser, getAllUsers , getUserById , editUser , checkUser} = require("../controller/authController")
const router = express.Router() ; 

router
.get('/' , getAllUsers )  
.get('/:id' , getUserById )  
.post('/login' , checkUser ) 
.post('/' , createUser ) 
.patch('/:id' , editUser )  

exports.router = router ; 