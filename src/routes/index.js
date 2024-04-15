const express = require('express');

const v1Router = require('./v1');

const apiRouter = express.Router();


// If any request comes and route continues with /v1, we map it to v1Router
console.log("inside v1");
apiRouter.use('/v1', v1Router);

module.exports = apiRouter;  