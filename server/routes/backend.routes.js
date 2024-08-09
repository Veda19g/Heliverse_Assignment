const  {Router}=require("express");
const principalRoutes=require("./principal.routes");

const backendroutes=Router();
backendroutes.use('/principal',principalRoutes);

module.exports=backendroutes;
