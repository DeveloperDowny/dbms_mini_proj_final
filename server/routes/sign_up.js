import express from "express";
import * as db from "../services/db.js";

const router = express.Router();

router.post("/", async function (req, res, next) {
  try {
    const reqJson = req.body;
    await db.query(
      `insert into cust_acc (cust_name, cust_email_id,encoded_password,balance) values ('${reqJson["cust_name"]}', '${reqJson["cust_email_id"]}','${reqJson["encoded_password"]}',${reqJson["balance"]})`
    );

    const result = await db.query(
      `select * from cust_acc where cust_email_id = '${reqJson["cust_email_id"]}'`
    );
    res.json({
      status: 1,
    });
  } catch (err) {
    console.error(`Error`, err.message);
    next(err);
  }
});

export default router;
