const BaseError = require("../errors/base.error");
const {StatusCodes}=require('http-status-codes');


function errorHandler(err,req,res,next){
    if(err instanceof BaseError){
        return res.status(err.StatusCodes).json({
            message: err.message, 
            success:false, 
            error:err.details,
            data:{} 
        }); 
    } 
    //if we gett an error which is not a base error error

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "phir kuch galat ho gaya", 
        success:false,
        error:err,
        data:{} 
    });
}  

module.exports = errorHandler;