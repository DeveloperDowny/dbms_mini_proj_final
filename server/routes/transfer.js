import express from "express";
const router = express.Router();

import getMultiple from "../services/transaction.js";

import * as db from "../services/db.js";
/* GET programming languages. */
router.post("/", async function (req, res, next) {
  try {
    const reqJson = req.body;
    console.log("reqJson");
    console.log(reqJson);

    const r1 = await db.query(
      `select acc_num from cust_acc where cust_email_id = '${reqJson["sender_email"]}'`
    );
    console.log(r1);
    console.log("r1");
    const r2 = await db.query(
      `select acc_num from cust_acc where cust_email_id = '${reqJson["receiver_email"]}'`
    );

    console.log(r2);
    console.log("r2");

    const result1 = await db.query(
      `call checkAndTransact(${r1[0]["acc_num"]},${r2[0]["acc_num"]},${reqJson["amount"]}, @test);`
    );

    const result = await db.query(`commit;`);

    const res2 = await db.query(
      `select trans_status from cust_trans order by trans_id desc limit 1;`
    );

    console.log(result);
    console.log("result");
    res.json(res2[0]);
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

export default router;
