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

// DELIMITER $$
// CREATE DEFINER=`rootdbms`@`%` PROCEDURE `checkAndTransact`(IN `sender_acc_num` INT, IN `receiver_acc_num` INT, IN `amount` INT, OUT `isSuccessful` VARCHAR(1))
// mproc: BEGIN
// SET autocommit=0;
// 	set isSuccessful = 0;
// 	select @sender_bal:= balance from cust_acc where acc_num = sender_acc_num;
//      select @receiver_bal:= balance from cust_acc where acc_num = receiver_acc_num;
//     select (@sender_bal);
//     select (@sender_bal - amount);
// 	IF @sender_bal - amount < 0 then
//     set isSuccessful = 0;
//     insert into cust_trans (cust_trans.sender_balance_snapshot,
//                             cust_trans.receiver_balance_snapshot,
//                             cust_trans.trans_status,
//                             cust_trans.sender_acc_num,
//                             cust_trans.receiver_acc_num, cust_trans.amount)
//                             VALUES (@sender_bal, @receiver_bal, isSuccessful, sender_acc_num,receiver_acc_num, amount);
//     COMMIT;
//     leave mproc;
//   end if;

//   update cust_acc set balance = @sender_bal - amount where acc_num = sender_acc_num;
//   update cust_acc set balance = @receiver_bal + amount where acc_num = receiver_acc_num;

//   set isSuccessful = 1;

//   insert into cust_trans (cust_trans.sender_balance_snapshot,
//                             cust_trans.receiver_balance_snapshot,
//                             cust_trans.trans_status,
//                             cust_trans.sender_acc_num,
//                             cust_trans.receiver_acc_num, cust_trans.amount)
//                             VALUES (@sender_bal - amount, @receiver_bal + amount, isSuccessful, sender_acc_num,receiver_acc_num, amount);
//   commit;

// END$$
// DELIMITER ;
