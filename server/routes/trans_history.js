import express from "express";
import * as db from "../services/db.js";

const router = express.Router();

router.get("/", async function (req, res, next) {
  try {
    const reqJson = req.body;
    // await db.query(
    //   `insert into cust_acc values (${reqJson["cust_name"]}, '${reqJson["cust_email_id_id"]}',${reqJson["acc_num"]},${reqJson["encoded_password"]},${reqJson["balance"]})`
    // );
    const result = await db.query(
      `select * from cust_acc where cust_email_id = '${reqJson["cust_email_id"]}'`
    );
    // if encoded pass saved is equal to latest hash, authenticate
    res.json(result);
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

//module.exports = router;

export default router;
