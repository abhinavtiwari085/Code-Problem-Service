const express=require('express');

const bodyparser=require('body-parser');

const apiRouter=require('./routes')
const {PORT}=require('./config/server.config');
const app=express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.text());
 
app.use('./api',apiRouter);

app.get('/ping',(req,res)=>{
    return res.json({message:"problem service jinda hia bhai"});
})  

app.listen(PORT,()=>{  
    console.log(`server started at PORT ${PORT}`) ; 
})                       


// const express = require('express');
// const bodyParser = require('body-parser');

// const { PORT } = require('./config/server.config');
// const apiRouter = require('./routes');
// // const errorHandler = require('./utils/errorHandler');


// const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());


// // If any request comes and route starts with /api, we map it to apiRouter
// app.use('/api', apiRouter);


// app.get('/ping', (req, res) => {
//     return res.json({message: 'Problem Service is alive'});
// });

// // last middleware if any error comes
// // app.use(errorHandler);

// app.listen(PORT, () => {
//     console.log(`Server started at PORT: ${PORT}`);
    
// });   