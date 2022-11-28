import express from "express";
const router = express.Router();
//import crt from'../services/crt';
// import crt from "../services/crt.js";
import getMultiple from "../services/transaction.js";
/* GET programming languages. */
router.get("/", async function (req, res, next) {
  try {
    // res.json(await crt.getMultiple(req.query.page));
    res.json(await getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

//module.exports = router;

export default router;