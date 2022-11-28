import express from "express";
const router = express.Router();
//import crt from'../services/crt';
// import crt from "../services/crt.js";
import getMultiple from "../services/sign_up.js";
/* GET programming languages. */
router.get("/", async function (req, res, next) {
  try {
    const reqJson = req.body();
    await db.query(`insert into cust_acc values (${reqJson["cust_name"]}, '${reqJson["cust_email_id"]}',${reqJson["acc_num"]},${reqJson["encoded_password"]},${reqJson["balance"]})`);
    
    // res.json(await crt.getMultiple(req.query.page));
    res.json(await getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

//module.exports = router;

export default router;
