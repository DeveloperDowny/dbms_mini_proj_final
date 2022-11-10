import express from 'express';

const router = express.Router();

const users = [
    {
        firstname : "Dhanashree",
        lastname  :"Otari",
        age: 18
    }

    
]
//all the routes are starting with / users 
router.get('/',(req,res) => {
    console.log(users);
    
    res.send(users);
    
});

export default router;// so that index.js could use it

