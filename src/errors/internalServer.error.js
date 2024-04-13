const BaseError = require("./base.error");
const {StatusCodes}=require('http-status-codes');

class InternalServerError extends BaseError{
    //The constructor method is a special method of a class for creating and initializing an object instance of that class.
    constructor(details){ 
        super("Internal Server error",StatusCodes.INTERNAL_SERVER_ERROR,`kuch galat ho gya`,details);
    }
} 
module.exports =InternalServerError;  