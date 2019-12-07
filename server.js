// require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes/index');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
};

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactrefugelist",  {useNewUrlParser: true, useUnifiedTopology: true});

app.listen(PORT, function(){
    console.log(`API Server now listening on PORT ${PORT}`)
})