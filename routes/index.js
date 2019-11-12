const path = require("path");
const Router = require("express").Router();
const apiRoutes = require("./api/index");


Router.use("/api", apiRoutes);

Router.use(function(req, res){
     res.sendFile(path.join(__dirname,"../client/build/index.html"));
})

module.exports = Router;