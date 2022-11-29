import React from "react";
import "./transactioninfo.css";
import { useFormik } from "formik";

const initialValues = { fullname: "", accno: "", email: "", amount: "" };

function TransactionInfo({ setWhichSelected }) {
  const formik = useFormik({
    initialValues,
    validate: (values) => {
      const errors = {};
      if (!values.fullname) {
        errors.fullname = "Required";
      }
      if (!values.accno) {
        errors.accno = "Required";
      }
      if (!values.email) {
        errors.email = "Required";
      }
      if (!values.amount) {
        errors.amount = "Required";
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log("form data", values);
    },
  });

  setWhichSelected("account");

  return (
    <div className="main">
      <div className="full">
        <h1>
          <b>Make A Transcation!</b>
        </h1>
        <form onSubmit={formik.handleSubmit} className="form1">
          <label
            //
            className="label"
            onChange={formik.handleChange}
            value={formik.values.name}
          >
            FULL NAME
          </label>
          <div className="error">
            <input type="text" placeholder="krish mehta" />
            {formik.errors.fullname ? (
              <div>{formik.errors.fullname}</div>
            ) : null}
          </div>
          <label
            className="label"
            onChange={formik.handleChange}
            value={formik.values.name}
          >
            ACCOUNT NUMBER
          </label>
          <div className="error">
            <input type="text" placeholder="1800 100 300" />
            {formik.errors.accno ? <div>{formik.errors.accno}</div> : null}
          </div>
          <label
            className="label"
            onChange={formik.handleChange}
            value={formik.values.name}
          >
            EMAIL
          </label>
          <div className="error">
            <input type="email" placeholder="email@.com" />
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
          </div>
          <label
            className="label_amount"
            onChange={formik.handleChange}
            value={formik.values.name}
          >
            AMOUNT
          </label>
          <div className="error">
            <input type="number" placeholder="2000" />
            {formik.errors.amount ? <div>{formik.errors.amount}</div> : null}
          </div>
          <button type="submit" className="button-3">
            Make Transcation
          </button>
        </form>
      </div>
    </div>
  );
}

export default TransactionInfo;
