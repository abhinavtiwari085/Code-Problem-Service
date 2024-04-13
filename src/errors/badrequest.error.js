const BaseError = require("./base.error");
const {StatusCodes}=require('http-status-codes');

class BadRequest extends BaseError{
    //The constructor method is a special method of a class for creating and initializing an object instance of that class.
    constructor(propertyname,details){
        super("Bad Request",StatusCodes.BAD_REQUEST,`invalid structure for${propertyname} provided `,details);
    }
} 
module.exports = BadRequest;   