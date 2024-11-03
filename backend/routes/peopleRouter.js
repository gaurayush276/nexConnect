const express = require("express") ; 
const { createUserCard  , getAllUserCard} = require("../controller/peopleController");
 const router = express.Router() ; 

router
 
.get('/' , getAllUserCard ) 
.post('/' , createUserCard ) 
// .delete('/' , deleteUserCard ) 

exports.router = router ; 