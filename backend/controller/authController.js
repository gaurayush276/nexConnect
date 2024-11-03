 

const User = require("../models/authModel");

exports.createUser = async (req, res) => {
    try {
        const data = new User(req.body); 
        await data.save();
        console.log(data);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Error creating user" });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const data = await User.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Error fetching users" });
    }
};

 
exports.checkUser = async (req, res) => {
    try {
        const { email } = req.body;  // Get email from request body
        if (!email) {
            return res.status(400).json({ error: "Email is required" });
        }
        
        const user = await User.findOne({ email: email });
        
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "An error occurred" });
    }
};


exports.getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findById(id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Error fetching user by ID" });
    }
};

exports.editUser = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const data = await User.findByIdAndUpdate(id, updatedData, { new: true });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Error updating user" });
    }
};
