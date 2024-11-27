
 const People = require("../models/peopleModel")

exports.createUserCard= async (req, res)=>{
    const data = new People (req.body) ; 
    await data.save() ; 
    console.log(data) ; 
    res.json(data) ; 
}

 

exports.getAllUserCard = async (req, res)=>{
    const data =await People.find() ; 
    res.status(200).json(data) ; 
}
// // exports.getAllUserCard = async (req, res)=>{
// //     const data =await People.find() ; 
// //     res.status(200).json(data) ; 
// // }


// const People = require("../models/peopleModel");

// exports.createUserCard = async (req, res) => {
//     try {
//         const data = new People(req.body);
//         await data.save();
//         console.log(data);
//         res.json(data);
//     } catch (error) {
//         res.status(500).json({ error: "Error creating user card" });
//     }
// };

// exports.getAllUserCard = async (req, res) => {
//     try {
//         const data = await People.find();
//         res.status(200).json(data);
//     } catch (error) {
//         res.status(500).json({ error: "Error fetching user cards" });
//     }
// };

exports.getUserCardById = async(req , res )=>{
    const id = await req.params.id ; 
    const data = await People.findById(id) ; 
    res.json(data) ; 
}
