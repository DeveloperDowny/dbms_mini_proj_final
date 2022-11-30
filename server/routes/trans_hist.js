import express from "express";
const router = express.Router();
//import crt from'../services/crt';
// import crt from "../services/crt.js";
import getMultiple from "../services/trans_hist.js";
/* GET programming languages. */
router.get("/", async function (req, res, next) {
  try {
    // res.json(await crt.getMultiple(req.query.page));
    //res.json(await getMultiple(req.query.page));
    const reqJson = req.body();
    await db.query(`select * into cust_trans where send_acc_num=${reqJson["acc_num"]}or receiver_acc_num=${reqJson["acc_num"]}`);
  //await db.query(`select*from cust_trans`);
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

//module.exports = router;

export default router;