import express from 'express'; // express is ready to use 
import bodyParser from 'body-parser';  // will allow post coming request bodies 
import sign_inusersRoutes from './routes/sign_in.js';


const app=express(); // initialise express application all depended on the variable app
const PORT=5000;   //

app.use(bodyParser.json());      // initialise body parser middleware // gone be using json data

app.use('/sign_in', sign_inusersRoutes);

app.listen(PORT,()=> console.log(`Server Running on port : http://localhost:${PORT}`)); //

//nodemon installation 

/*app.get('/',(req,res) => {
console.log('[TEST]');// caught it from here 

res.send('Hello,from home page.') 
} ) */

/*app.get('/',(req,res) => {
 res.send('Hello,from home page.') 
} );*/  









