import bcrypt from "bcryptjs/dist/bcrypt.js";
import express from "express";
import * as db from "../services/db.js";

const router = express.Router();

router.post("/", async function (req, res, next) {
  try {
    const reqJson = req.body;
    console.log(reqJson);

    const result = await db.query(
      `select * from cust_acc where cust_email_id = '${reqJson["cust_email_id"]}'`
    );

    if (result.length === 0) {
      res.json({
        status: 0,
        message:
          "Given email is not associated with any accout. Sign up instead.",
      });
      return;
    }

    if (
      await bcrypt.compare(
        result[0]["encoded_password"],
        reqJson["encoded_password"]
      )
    ) {
      res.json({ status: 0, message: "Invalid Password" });
      return;
    }

    res.json({
      status: 1,
      acc_num: result[0]["acc_num"],
    });
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

export default router;
