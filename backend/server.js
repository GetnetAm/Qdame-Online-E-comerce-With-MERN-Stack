const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const bodyParser= require("body-parser");
const mongoose= require("mongoose")

const productRoute = require("./Routes/productRuter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/api/product", productRoute)


// app.get("/P", (req, res) => {	});

const PORT =process.env.PORT || 5000;


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server Running on Port ${PORT}`)
    })
})