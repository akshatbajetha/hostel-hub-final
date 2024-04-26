require('dotenv').config();

const express = require("express");
const mongoose = require('mongoose');
const hostelRoutes = require('./routes/hostels');

//Express App
const app = express();

app.use(express.json());

var cors = require('cors');
app.use(cors());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
});

app.use('/hostels', hostelRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Connected to DB & Listening on Port", process.env.PORT);
        })
    })
    .catch((err) => {
        console.log(err)
    })

