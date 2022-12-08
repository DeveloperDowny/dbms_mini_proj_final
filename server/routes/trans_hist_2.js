import express from "express";
const router = express.Router();
import * as db from "../services/db.js";

router.post("/", async function (req, res) {
  try {
    const reqJson = req.body;
    const result = await db.query(
      `select * from cust_trans where sender_acc_num=${reqJson["acc_num"]} or receiver_acc_num=${reqJson["acc_num"]}`
    );
    res.json(result);
  } catch (err) {
    res.send("error");
  }
});

export default router;
