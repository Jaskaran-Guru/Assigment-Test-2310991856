const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

// Routes
const routes = require("./index");
app.use("/", routes);

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected");
    app.listen(3000, () => console.log("Server running on port 3000"));
}).catch(err => console.error(err));
