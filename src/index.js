const express=require('express');

const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const apiRouter=require('./routes')
const {PORT}=require('./config/server.config');
const { BaseError } = require('sequelize');
const errorHandler = require('./utils/errorHandler');
const connectToDB = require('./config/db.config');
const app=express(); 
const Problem=require('./models/problem.model');


app.use(bodyparser.json()); 
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.text());
  
app.use('/api', apiRouter);
 
app.get('/ping',(req,res)=>{
    return res.json({message:"problem service jinda hia bhai"});
})   
   
//last midddleware if any error comes 
app.use(errorHandler);  

app.listen(PORT,async ()=>{  
    console.log(`server started at PORT ${PORT}`) ; 
    await connectToDB();
    console.log("databse se connect ho gya") ;
    
})                        
    