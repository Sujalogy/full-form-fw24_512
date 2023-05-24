const express = require("express");
const app = express();
const {UserModel} = require("./model/user.Schema")
const { connection } = require("./database/db");
const { userRouter } = require("./routes/user.route");
require('dotenv').config()
let PORT = process.env.PORT;

app.use(express.json());

app.use("/users", userRouter);

app.listen(PORT, async() => {
    try {
        console.log("server is running...at 3000");
        await connection;
        console.log("DB connected...")        
    } catch (error) {
        console.log(error);
        console.log("DB not connected...");
    }
})