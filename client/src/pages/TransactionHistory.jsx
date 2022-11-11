import React from "react";
import "./transcationhistory.css";

const data = [
  {
    Accountnumber: "2323",
    Date: "12/12/12",
    Status: "Pending",
    Amount: "1200",
  },
  {
    Accountnumber: "3434",
    Date: "45/45/45",
    Status: "Pending",
    Amount: "1300",
  },
  {
    Accountnumber: "5656",
    Date: "23/23/23",
    Status: "Pending",
    Amount: "1400",
  },
];

function TransactionHistory() {
  return (
    <div>
      <table>
        <caption className="title">TRANCATION HISTORY</caption>
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
                <td>{val.Status}</td>
                <td>{val.Amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionHistory;
