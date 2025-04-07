import React, { ChangeEvent, useEffect, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../../atoms/input/Input';
import eyeoff from '../../../assets/images/commonIcons/eye-off-fill.svg';
import eye from '../../../assets/images/commonIcons/eye-fill.svg';
import '../../atoms/input/input.css';
import './registrationorm.css'

import { toTittleCase, trimStrings, navigateTo } from '../../../utils/commonfunction/HelperFun';
import { Success, Error } from '../../../utils/alert/swal';



function RegistrationForm() {


  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }







  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      role: '',
      passwordd: '',
      cmpassword: ''
    },
    validationSchema:
      Yup.object().shape({
        email: Yup.string().matches(/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/, 'Invalid Email')
          .required('Email is Required'),
        lastName: Yup.string().required('LastName is Required'),

        firstName: Yup.string().min(3, "firstName must be at least 3 characters long")
          .required('firstName is Required'),
        role: Yup.string().required('Role is required'),
        passwordd: Yup.string().required('Password Required')
          .min(8, 'Password must be 8 characters long')
          .matches(/[0-9]/, 'Password requires a number')
          .matches(/[a-z]/, 'Password requires a lowercase letter')
          .matches(/[A-Z]/, 'Password requires an uppercase letter')
          .matches(/[^\w]/, 'Password requires a symbol'),
        cmpassword: Yup.string().required('Confirm passsword Required')
          .oneOf([Yup.ref('passwordd')], 'Must match "password" field value')

      }),
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: (values, { setSubmitting, resetForm }) => {

      setSubmitting(true);

      const { firstName, lastName, email, role, passwordd } = trimStrings(values)
      const signUpData = {
        firstName,
        lastName,
        email,
        role,
        passwordd
      }



      const localStorageData = localStorage.getItem('signup-data');


      if (localStorageData) {
        let parsedLocalStorageData = JSON.parse(localStorageData);

        const existingUser = parsedLocalStorageData.find((x: { email: string; }) => x.email === signUpData.email);
        console.log(existingUser, "existingUser");
        if (existingUser) {
          console.log(existingUser, "existingUser");

          Error("User Allready exists !", true);

          setSubmitting(false);
          return;
        }

        parsedLocalStorageData.push(signUpData)

        localStorage.setItem('signup-data', JSON.stringify(parsedLocalStorageData));
        resetForm();
        Success("Successfully Registered")
        setTimeout(() => {
          setSubmitting(false);
          navigateTo('/login');
        }, 1500)



      } else {
        localStorage.setItem('signup-data', JSON.stringify([signUpData]));
        resetForm();
        Success("Successfully Registered")
        setSubmitting(false);
      }



    }

  })

  return (
    <>
      <section className="py-3 py-md-5 py-xl-8">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="mb-5">
                <h2 className="display-5 fw-bold text-center">Sign up</h2>
                <p className="text-center m-0">Already have an account? <a href="/login" className="link-primary text-decoration-none">Sign in</a></p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
              <div className="row gy-3 justify-content-center">
                <div className="col-12 ">

                  <form action="#!" onSubmit={formik.handleSubmit} autoComplete='off' >
                    <div className="row gy-3 overflow-hidden">
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input className="form-control border-0 border-bottom rounded-0 text-upper" onChange={formik.handleChange} placeholder="First Name" type="text" id="firstName" name="firstName" onBlur={formik.handleBlur} value={toTittleCase(formik.values.firstName)} />

                          <label htmlFor="firstName" className="form-label">First Name<span className={'text-danger'}>*</span></label>

                          {(formik.touched.firstName || formik.values.firstName !== "") && formik.errors.firstName && (
                            <div className="text-danger">{formik.errors.firstName}</div>
                          )}




                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input type="text" className="form-control border-0 border-bottom rounded-0" onChange={formik.handleChange} value={toTittleCase(formik.values.lastName)} name="lastName" id="lastName" placeholder="Last Name" required onBlur={formik.handleBlur} />
                          <label htmlFor="lastName" className="form-label">Last Name</label>
                          {formik.errors.lastName && (formik.values.lastName != "" || formik.touched.lastName) && (
                            <div className={'text-danger'}>{formik.errors.lastName}</div>
                          )}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className='form-floating mb-3'>
                          <label className="form-label ">Select Role <span style={{ color: "red" }}>*</span></label>

                          <div className='mt-0 form-floating py-2'>
                            <select
                              
                              className={"form-control border-0 border-bottom rounded-0"}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              name="role"

                              value={formik?.values?.role || ""}


                            >
                              <option value=""></option>
                              <option value="Owner">Owner</option>
                              <option value="Renter">Renter</option>
                              <option value="Admin">Admin</option>
                              <option value="Moderator">Moderator</option>
                            </select>
                            {formik.touched.role && formik.errors.role ? (<div className={'text-danger'}>{formik.errors.role}</div>) : null}
                          </div>
                        </div>
                      </div>







                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input type="email" className="form-control border-0 border-bottom rounded-0" onChange={formik.handleChange} name="email" id="email" placeholder="name@example.com" required onBlur={formik.handleBlur} value={formik.values.email.toLowerCase()} />
                          <label htmlFor="email" className="form-label">Email <span style={{ color: "red" }}>*</span></label>
                          {
                            (formik.touched.email || formik.values.email != "") && formik.errors.email ? (<div className={"text-danger"}>{formik.errors.email}</div>) : null
                          }
                        </div>
                      </div>
                      <div className="col-12 ">
                        <div className="form-floating mb-3 position-relative">
                          <input type={showPassword ? "text" : "password"} className="form-control border-0 border-bottom rounded-0" onChange={formik.handleChange} name="passwordd" id="passwordd" placeholder="Password" onBlur={formik.handleBlur} value={formik.values.passwordd} />
                          <label htmlFor="password" className="form-label">Password <span style={{ color: "red" }}>*</span></label>
                          {(formik.touched.passwordd || formik.values.passwordd != "") && formik.errors.passwordd ? (<div className={'text-danger'}>{formik.errors.passwordd}</div>) : null}
                          <div className={'password-eye '}>
                            {showPassword ? <img src={eye} alt="eye" onClick={handleShowPassword} /> :
                              <img src={eyeoff} alt="eye-off" onClick={handleShowPassword} />}
                          </div>
                        </div>

                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input type="password" className="form-control border-0 border-bottom rounded-0" onChange={formik.handleChange} name="cmpassword" id="cmpassword" placeholder="Confirm Password" required onBlur={formik.handleBlur}
                            onPaste={(e) => { e.preventDefault() }} value={formik.values.cmpassword} />
                          <label htmlFor="cmpassword" className="form-label">Confirm Password <span style={{ color: "red" }}>*</span></label>
                          {(formik.touched.cmpassword || formik.values.cmpassword != "") && formik.errors.cmpassword ? (<div className={'text-danger'}>{formik.errors.cmpassword}</div>) : null}
                        </div>

                      </div>


                      <div className="col-12">
                        <div className="d-grid">
                          <button className="btn btn-primary btn-lg" type="submit" disabled={!(formik.isValid && formik.dirty)}> {formik.isSubmitting ? 'Submitting...' : 'Submit'}</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="col-12  d-flex align-items-center">
                  <div className="d-flex gap-3 flex-column w-100 ">
                    <a href="#!" className="btn btn-lg btn-danger">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                      </svg>
                      <span className="ms-2 fs-6">Sign in with Google</span>
                    </a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default RegistrationForm