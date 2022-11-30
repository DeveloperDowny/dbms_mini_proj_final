import express from "express";
const router = express.Router();

router.get("/", async function (req, res, next) {
  try {
    const reqJson = req.body();
    await db.query(
      `insert into cust_acc values (${reqJson["cust_name"]}, '${reqJson["cust_email_id"]}',${reqJson["acc_num"]},${reqJson["encoded_password"]},${reqJson["balance"]})`
    );
    const result = await db.query(`select*from cust_acc`);
    res.json(result);
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

//module.exports = router;

export default router;
