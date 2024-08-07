// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom"


// export function Reporting() {
//     const navigate = useNavigate();

//     const {
//         register,
//         handleSubmit,
//         formState: { errors }
//     } = useForm();

//     async function saveData(data){
//         let formData = new FormData();
//         formData.append("FullName", data.FullName);
//         formData.append("Data",data.Data);
//         formData.append("Address", data.Address);
//         formData.append("City", data.City);
//         formData.append("Country", data.Country);
//         formData.append("Phonenumber",data.Phonenumber);
//         formData.append("Pincode", data.Pincode);
//         formData.append("DetailsOfIssue", data.DetailsOfIssue);

//         alert(JSON.stringify(data));

//     }

//     return (
//         <div >
//             <form  onSubmit={handleSubmit(data=> {
//                 saveData(data)
//             })}>
//                 <div className="mx-auto mt-5" >
//                     <div className="card mb-4" style={{backgroundColor:"#828bb2", alignItems:"center"}}>
//                         <div className="card-header py-3">
//                             <h5>Reporting Misconduct</h5>
//                         </div>
//                     </div>
//                     <div className="m-4 col-6" style={{alignItems:"center"}} >
//                         <div className="m-4 col-6 ">
//                             <div className="">
//                                 <label>Full Name:</label>
//                                 <input type="text" className="form-control" placeholder="Your Full Name" name="FullName" {...register('FullName', {required: true })}></input>
//                                 {
//                                     errors.FullName && errors.FullName?.type== "required" && <div className="text-danger">*Full Name is Required</div>
//                                 }
//                             </div>
//                         </div>
//                         <div className="m-4 col-6 ">
//                             <label>Email Address</label>
//                             <input type="text" className="form-control" placeholder="Your Email Address Here" name="Address" {...register('Address', {required: true })}></input>
//                             {
//                                 errors.Address && errors.Address?.type=="required" && <div className="text-danger">*Email Address is Required</div>
//                             }
//                         </div>
//                         <div className="m-4 col-6 ">
//                             <label>Details of Issue:</label>
//                             <textarea type="text" className="form-control" placeholder="Your Issue " name="DetailsOfIssue" {...register('DetailsOfIssue', {required:true })}></textarea>
//                             {
//                                 errors.DetailsOfIssue && errors.DetailsOfIssue?.type=="required" && <div className="text-danger">*Details of Issue is Required</div>
//                             }
//                         </div>
//                         <button type="submit" className="btn btn-outline-success m-3">Submit</button>
//                         <button type="reset" className="btn btn-outline-warning m-5">Cancel</button>
//                     </div>
//                 </div>

//             </form>
//         </div>
//     )
// }




// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import './Reporting.css'

// export function Reporting() {
//     const {
//         watch,
//         register,
//         handleSubmit,
//         formState: { errors }
//     } = useForm();

//     return (
//         <div className="container container-fluid container-lg container-sm">

//             <form onSubmit={handleSubmit()} className="client_add_account_form">
//                 <h2>Welcome to Adding Account</h2>
//                 <div className="mt-4 row">
//                     <label className="col-6">
//                         Bank Name
//                         <input type="text" className="form-control" placeholder="Enter Bank Name" {...register('bankName', { required: true, minLength: 3 })}></input>
//                         {errors.bankName && errors.bankName.type === "required" && <div className="text-danger">Bank Name Required</div>}
//                         {errors.bankName && errors.bankName.type === "minLength" && <div className="text-danger">Enter valid Name</div>}
//                     </label>

//                     <label className="col-6">
//                         Account Holder Name
//                         <input type="text" className="form-control" placeholder="Account holder name"  {...register('holderName', { required: true, minLength: 2 })}></input>
//                         {errors.holderName && errors.holderName.type === "required" && <div className="text-danger">Account Holder Name Required</div>}
//                         {errors.holderName && errors.holderName.type === "minLength" && <div className="text-danger">Enter Valid Name</div>}
//                     </label>

//                     <div className="mt-4 row">
//                         <label className="col-6">
//                             Account Number
//                             <input type="text" className="form-control" placeholder="Account Number"  {...register('accountNumber', { required: true, minLength: 16, maxLength: 16 })}></input>
//                             {errors.accountNumber && errors.accountNumber.type === "required" && <span className="text-danger">Account Number Required</span>}
//                             {errors.accountNumber && errors.accountNumber.type === "minLength" && <div className="text-danger is-invalid">Enter Valid Account Number</div>}
//                             {errors.accountNumber && errors.accountNumber.type === "maxLength" && <div className="text-danger">Enter Valid Account Number</div>}
//                         </label>


//                         <label className="col-6">
//                             Re-Enter Account Number
//                             <input type="text" className="form-control" placeholder="Re-Enter Account Number"  {...register('reEnteraccountNumber', { validate: value => value === watch("accountNumber") || "Doesn't match account number" })}></input>
//                             {errors.reEnteraccountNumber && errors.reEnteraccountNumber.type === "validate" && <div className="text-danger">Doesn't Matched</div>}

//                         </label>


//                     </div>

//                     <div className="mt-4 row">
//                         <label className="col-6">
//                             IFSC Code
//                             <input type="text" className="form-control" placeholder="IFSC Code "  {...register('ifscCode', { required: true, minLength: 4, maxLength: 4 })}></input>
//                             {errors.ifscCode && errors.ifscCode.type === "required" && <div className="text-danger">IFSC required</div>}
//                             {errors.ifscCode && errors.ifscCode.type === "minLength" && <div className="text-danger">Enter Valid IFSC </div>}
//                             {errors.ifscCode && errors.ifscCode.type === "maxLength" && <div className="text-danger">Enter Valid Ifsc</div>}
//                         </label>


//                         <label className="col-6">
//                             DOB
//                             <input type="date" className="form-control" placeholder="Date Of Birth"  {...register('dob', { required: true })}></input>
//                             {
//                                 errors.dob && errors.dob.type === "required" && <div className="text-danger">Required</div>
//                             }

//                         </label>
//                     </div>

//                     <div className="mt-4">
//                         Account Type
//                         <select className="form-select" {...register("bank", { required: true })}>
//                             <option value="">Select Account</option>
//                             <option value="savings">Savings Account</option>
//                             <option value="current">Current Account</option>
//                         </select>
//                         {errors.bank && <div className="text-danger">Select Account Type</div>}
//                     </div>


//                     <div className="mt-4">
//                         <input type="checkbox" name="check" value="confirmed" {...register("check", { required: true })}></input>   Accept to Submit the detyails with us !

//                         <div>
//                             {errors.check && <div className="text-danger">Tick the box</div>}

//                         </div>
//                     </div>


//                     <div className="mt-5">
//                         <input type="submit" className="btn btn-success" value="Submit"></input>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     )
// }
// export default Reporting;

import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import './Reporting.css'

export function Reporting() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    return (
        <div className="container container-fluid container-lg container-sm">

            <form onSubmit={handleSubmit()} className="client_add_account_form">
                <h2 className='text-black'>Reporting Misconduct</h2>
                <div className="mt-4">
                    <label className="col-6">
                        User Name
                        <input type="text" className="form-control" placeholder="Enter User Name" {...register('bankName', { required: true, minLength: 3 })}></input>
                        {errors.bankName && errors.bankName.type === "required" && <div className="text-danger">User Name Required</div>}
                        {errors.bankName && errors.bankName.type === "minLength" && <div className="text-danger">Enter valid Name</div>}
                    </label>

                    <label className="col-6">
                        Client Full Name
                        <input type="text" className="form-control" placeholder="Client Full Name"  {...register('FullName', { required: true })}></input>
                        {errors.FullName && errors.FullName.type === "required" && <div className="text-danger">*Full Name Required</div>}

                    </label>

                    <div className="mt-4">
                        <label className="col-6">
                            Email Address
                            <input type="text" className="form-control" placeholder="Enter Email Address"  {...register('Email', { required: true })}></input>
                            {errors.Email && errors.Email.type === "required" && <span className="text-danger">Email Address Required</span>}
                        </label>


                        <label className="col-6">
                            Address
                            <input type="text" className="form-control" placeholder="Enter Address Here"  {...register('Address')}></input>
                            {errors.Address && errors.Address.type === "required" && <div className="text-danger">*Address is Required</div>}

                        </label>


                    </div>

                    <div className="mt-4">
                        <label className="col-6">
                            Mobile Number
                            <input type="number" className="form-control" placeholder="Enter Mobile Number "  {...register('MobileNumber', { required: true, minLength: 10 })}></input>
                            {errors.MobileNumber && errors.MobileNumber.type === "required" && <div className="text-danger">Mobile Number required</div>}
                            {errors.MobileNumber && errors.MobileNumber.type === "minLength" && <div className="text-danger">Mobile Number Must have 10 digits</div>}
                        </label>


                        <label className="col-6">
                            DOB
                            <input type="date" className="form-control" placeholder="Date Of Birth"  {...register('dob', { required: true })}></input>
                            {
                                errors.dob && errors.dob.type === "required" && <div className="text-danger">Required</div>
                            }

                        </label>
                    </div>
                    <div className='mt-4'>
                        <label>Issue Here</label>
                        <textarea className='form-control' placeholder='Describe Your Issue Here...' {...register('Issue', { required: true })}></textarea>
                        {
                            errors.Issue && errors.Issue.type === "required" && <div className="text-danger">Required</div>
                        }
                    </div>

                    {/* <div className="mt-4">
                        Account Type
                        <select className="form-select" {...register("bank", { required: true })}>
                            <option value="">Select Account</option>
                            <option value="savings">Savings Account</option>
                            <option value="current">Current Account</option>
                        </select>
                        {errors.bank && <div className="text-danger">Select Account Type</div>}
                    </div> */}


                    <div className="mt-4">
                        <input type="checkbox" name="check" value="confirmed" {...register("check", { required: true })}></input>   Accept to Submit the detyails with us !

                        <div>
                            {errors.check && <div className="text-danger">Tick the box</div>}

                        </div>
                    </div>


                    <div className="mt-5">
                        <input type="submit" className="btn btn-success" value="Submit"></input>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Reporting;