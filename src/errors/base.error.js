//javascript ha s its own error class defined. we can use it as base error class
class BaseError extends Error{
    //The constructor method is a special method of a class for creating and initializing an object instance of that class.
    constructor(name,statusCodes,description,details){
        //first parametr in nodes error class is message thats why description passed in super  
        // The super keyword is used to access properties on an object literal
        // An object initializer is a comma-delimited list of zero or more pairs of property names and associated values of an object
        super(description);
        this.name=name;
        this.statusCodes=statusCodes;
        this.details=details;
        Error.captureStackTrace(this);
        //here this represent current object

    }
}
 
module.exports=BaseError;