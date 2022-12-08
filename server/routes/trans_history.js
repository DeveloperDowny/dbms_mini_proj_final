import express from "express";
import * as db from "../services/db.js";

const router = express.Router();

router.get("/", async function (req, res, next) {
  try {
    const reqJson = req.body;

    const result = await db.query(
      `select * from cust_acc where cust_email_id = '${reqJson["cust_email_id"]}'`
    );

    res.json(result);
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

export default router;
