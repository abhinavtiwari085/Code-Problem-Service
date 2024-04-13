const express=require('express');

const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const apiRouter=require('./routes')
const {PORT}=require('./config/server.config');
const { BaseError } = require('sequelize');
const errorHandler = require('./utils/errorHandler');
const connectToDB = require('./config/db.config');
const app=express(); 

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.text());
 
app.use('./api',apiRouter);

app.get('/ping',(req,res)=>{
    return res.json({message:"problem service jinda hia bhai"});
})  
  
//last midddleware if any error comes
app.use(errorHandler);

app.listen(PORT,async ()=>{  
    console.log(`server started at PORT ${PORT}`) ; 
    await connectToDB();
    console.log("databse se connect ho gya") ;
    // try { 
    //     throw new NotFoundError({});
    // } catch (error) {
    //     console.log("kuch galat ho gya",error.name,error.stack);
    // }finally{
    //     console.log("Executed Finally") ;
    // } 

    //throw new BaseError("kuch error",404,{errorMessage:"something went wrong"});
    const Cat = mongoose.model('Cat', { name: String });

    const kitty = new Cat({ name: 'Zildjian' });
    kitty.save().then(() => console.log('meow'));  
})                       
    