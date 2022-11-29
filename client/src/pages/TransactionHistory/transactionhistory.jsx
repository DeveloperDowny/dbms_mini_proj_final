import React from "react";
import "./transcationhistory.css";
import Tick from "./images/complete.png";
import Cross from "./images/cross.png";
import Pending from "./images/pending.png";
import { Heading } from "@chakra-ui/react";

const data = [
  {
    Accountnumber: "2323",
    Date: "12/12/12",
    Status: "Succesful",
    Amount: "1200",
  },
  {
    Accountnumber: "3434",
    Date: "45/45/45",
    Status: "Pending",
    Amount: "1300",
  },
  { Accountnumber: "5656", Date: "23/23/23", Status: "fail", Amount: "1400" },
];

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

function trans({ setWhichSelected }) {
  setWhichSelected("account");
  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-87px)]">
      <Heading color="#CD5511" marginTop={20}>
        Transaction History
      </Heading>
      <table className="transaction_history__table shadow-lg">
        {/* <caption className="title">TRANCATION HISTORY</caption> */}

        <thead>
          <tr>
            <th>Account number</th>
            <th>Date</th>
            <th>Status</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.Accountnumber}</td>
                <td>{val.Date}</td>
                <td>
                  {val.Status}
                  {change(val.Status)}
                </td>
                <td>{val.Amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default trans;
