import express from 'express';


const router = express.Router();

const user = [
    {
       
        "Customer_Name" : "Dhanashree Otari",
        "Customer_ID"   : 2021300086,
        "Password"      :"*******"
        
    }

    
]
//all the routes are starting with / users 
router.get('/',(req,res) => {
    console.log(user);
    
    res.send(user);
    
});



 
export default router;// so that index.js could use it

