import React from "react";
import './profile.css';
import { useFormik } from 'formik'

const initialValues={email:'', password: ''};


function Profile(){
    const formik= useFormik({
        initialValues,
        validate:(values) => {
            const errors = {};
            if (!values.email) {
               errors.email = 'Required';
            }
            if (!values.password) {
               errors.password = 'Required';
            }
            return errors;
        },
        onSubmit: values=>{
            console.log('form data',values);
        }
    })

    return(
        <div>
        <h1>set up your profile!</h1>
        <form onSubmit={formik.handleSubmit}>
           <label for="email" className="label" onChange={formik.handleChange} value={formik.values.name}>email</label>
           <div className="error">
           <input type="email" />
            {formik.errors.email?<div>{formik.errors.email}</div>:null}
            </div>
           <label for="password" className="label" onChange={formik.handleChange} value={formik.values.name}>password</label>
           <div  className="error"> 
           <input type="password" />
            {formik.errors.password?<div>{formik.errors.password}</div>:null}
            </div>
           <button type='submit' className="button-3">submit</button>
         </form>
        </div>
        
        );
}

export default Profile;