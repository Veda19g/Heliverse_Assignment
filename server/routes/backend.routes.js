const  {Router}=require("express");
const principalRoutes=require("./principal.routes");
const studentRoutes=require("./student.routes");
const teacherRoutes=require("./teacher.routes");
const backendroutes=Router();
backendroutes.use('/principal',principalRoutes);
backendroutes.use('/student',studentRoutes);
backendroutes.use('/teacher',teacherRoutes);
module.exports=backendroutes;
