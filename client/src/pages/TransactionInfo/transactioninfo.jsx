import React from "react";
import './transactioninfo.css';
import { useFormik } from 'formik'

const initialValues={ fullname: '', accno:'', email: '', amount:''};


function Profile(){
    const formik= useFormik({
        initialValues,
        validate:(values) => {
            const errors = {};
            if (!values.fullname) {
               errors.fullname = 'Required';
            }
            if (!values.accno) {
               errors.accno = 'Required';
            }
            if (!values.email) {
                errors.email = 'Required';
             }
             if (!values.amount) {
                errors.amount = 'Required';
             }
            return errors;
        },
        onSubmit: values=>{
            console.log('form data',values);
        }
    })

    return(
        <div>
        <h1>make a transcation!</h1>
        <form onSubmit={formik.handleSubmit}>
        <label for="text" className="label" onChange={formik.handleChange} value={formik.values.name}>full name</label>
          <div className="error">
          <input type="text" />
           {formik.errors.fullname?<div>{formik.errors.fullname}</div>:null}
           </div>
           <label for="number" className="label" onChange={formik.handleChange} value={formik.values.name}>account number</label>
            <div  className="error"> 
            <input type="text" />
             {formik.errors.accno?<div>{formik.errors.accno}</div>:null}
             </div>
           <label for="email" className="label" onChange={formik.handleChange} value={formik.values.name}>email</label>
           <div className="error">
           <input type="email" />
            {formik.errors.email?<div>{formik.errors.email}</div>:null}
            </div>
            <label for="amount" className="label" onChange={formik.handleChange} value={formik.values.name}>amount</label>
            <div  className="error"> 
            <input type="money" />
             {formik.errors.amount?<div>{formik.errors.amount}</div>:null}
             </div>
           <button type='submit' className="button-3">Make Transcation</button>
         </form>
        </div>
        );
}

export default Profile;