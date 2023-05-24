const express = require('express');
const {UserModel} = require("../model/user.Schema")
const userRouter = express();

// ? GET
userRouter.get("/", (req,res) => {
    try {
        res.status(200).json({msg : "this is checking"});
    } catch (error) {
        res.status(400).json({error : error.message});
    }
})

// ? POST 
userRouter.post("/add", async(req,res) => {
    try {
        const user = new UserModel(req.body);
        await user.save();
        res.status(200).send(user);
    } catch (error) {
        res.status(500).json({error : error.message});
    }
})

module.exports = {
    userRouter
}

