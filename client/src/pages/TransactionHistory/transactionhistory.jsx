import React, { useEffect, useState } from "react";
import "./transcationhistory.css";
import Tick from "./images/complete.png";
import Cross from "./images/cross.png";
import Pending from "./images/pending.png";
import { Heading } from "@chakra-ui/react";
import { logIn, transactions } from "../../api";
import { cust_acc_num, is_authenticated } from "../../data/constants";

function change(Status) {
  if (Status == "Succesful") {
    return (
      <div>
        <img src={Tick} className="pic"></img>
      </div>
    );
  } else if (Status == "Pending") {
    return (
      <div>
        <img src={Pending} className="pic"></img>
      </div>
    );
  } else {
    return (
      <div>
        <img src={Cross} className="pic"></img>
      </div>
    );
  }
}

export const TransactionHistory = ({ setWhichSelected }) => {
  const [data, setData] = useState([]);
  const updateData = async () => {
    setData(
      (
        await transactions({
          acc_num: localStorage.getItem(cust_acc_num),
        })
      )["data"]
    );
    console.log("mm data");
    console.log(data);
  };
  useEffect(() => {
    updateData();
    console.log(data);
    return () => {};
  }, []);

  const mAccNum = localStorage.getItem(cust_acc_num);
  let count = 0;

  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-87px)]">
      <Heading color="#CD5511" marginTop={20}>
        Transaction History
      </Heading>
      {console.log(data == undefined || data.length == 0)}

      {data == undefined || data.length == 0 ? (
        <p className="pText m-3">
          {"No transactions made yet. Go to Accout > Transfer to make one"}
        </p>
      ) : (
        <table className="transaction_history__table shadow-lg w-[700px]">
          {/* <caption className="title">TRANCATION HISTORY</caption> */}

          <thead>
            <tr>
              <th>No.</th>
              {/* <th>From</th> */}
              <th>Amount</th>
              {/* <th>Date</th> */}
              <th>Status</th>
              <th>Type</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {console.log(data)}
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{++count}</td>
                  {/* <td>
                    {`${val.receiver_acc_num}` == mAccNum
                      ? `${val.receiver_acc_num}`
                      : `${val.sender_acc_num}`}
                  </td> */}
                  <td>{val.amount}</td>
                  <td>
                    {val.status == 0 ? "Failed" : "Success"}
                    {/* change(val.status) */}
                  </td>
                  <td>
                    {`${val.receiver_acc_num}` == mAccNum ? `Credit` : `Debit`}
                  </td>

                  <td>
                    {`${val.receiver_acc_num}` == mAccNum
                      ? `${val.receiver_balance_snapshot}`
                      : `${val.sender_balance_snapshot}`}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TransactionHistory;
