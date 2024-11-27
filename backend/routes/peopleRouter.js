const express = require("express") ; 
const { createUserCard  , getAllUserCard , getUserCardById} = require("../controller/peopleController");
 const router = express.Router() ; 

router
 
.get('/' , getAllUserCard ) 
.post('/' , createUserCard ) 
.get('/:id' , getUserCardById )  ; 
// .delete('/' , deleteUserCard ) 

exports.router = router ; 