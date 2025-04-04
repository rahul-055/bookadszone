import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import eyeoff from '../../../assets/images/commonIcons/eye-off-fill.svg';
import eye from '../../../assets/images/commonIcons/eye-fill.svg';
import { trimStrings, navigateTo } from '../../../utils/commonfunction/HelperFun';
import { Success, Error } from '../../../utils/alert/swal';

function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }
    const formik = useFormik({
        initialValues: {

            email: '',

            password: '',

        },
        validationSchema:
            Yup.object().shape({
                email: Yup.string().matches(/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/, 'Invalid Email')
                    .required('Email is Required'),

                password: Yup.string().required('Password Required')
                    .min(8, 'Password must be 8 characters long')
                    .matches(/[0-9]/, 'Password requires a number')
                    .matches(/[a-z]/, 'Password requires a lowercase letter')
                    .matches(/[A-Z]/, 'Password requires an uppercase letter')
                    .matches(/[^\w]/, 'Password requires a symbol'),


            }),
        validateOnChange: true,
        validateOnBlur: false,
        onSubmit: (values, { setSubmitting, resetForm }) => {
            setSubmitting(true)
            const loginData = trimStrings(values);
            console.log(loginData, "loginData");

            const RegisteredUsers = JSON.parse(localStorage.getItem('signup-data') || '');
            //console.log(JSON.stringify(RegisteredUsers,null,2));

            const Verification = RegisteredUsers.find((user: { email: string; passwordd: string }) => user.email === loginData.email && user.passwordd === loginData.password)

            console.log(Verification, "Verification");

            if (Verification) {
                Success("Successfully LogedIn!");
                setSubmitting(false);
                resetForm()
            } else {
                Error("Invalid Credentials Please Signup!");
                resetForm();
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
                                <h2 className="display-5 fw-bold text-center">Sign in</h2>
                                <p className="text-center m-0">Don't have an account? <a href="/signup">Sign up</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10 col-xl-8">
                            <div className="row gy-3 justify-content-center">
                                <div className="col-12 col-lg-8">
                                    <form autoComplete='off' onSubmit={formik.handleSubmit}>
                                        <div className="row gy-3 overflow-hidden">
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input type="email" className="form-control border-0 border-bottom rounded-0" name="email" id="email" placeholder="name@example.com" required onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email.toLowerCase()} />
                                                    <label htmlFor="email" className="form-label">Email</label>
                                                    {
                                                        (formik.touched.email || formik.values.email != "") && formik.errors.email ? (<div className={"text-danger"}>{formik.errors.email}</div>) : null
                                                    }
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input type={showPassword ? "text" : "password"} className="form-control border-0 border-bottom rounded-0" name="password" id="password" value={formik.values.password} placeholder="Password" required onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                                    <label htmlFor="password" className="form-label">Password</label>
                                                    {(formik.touched.password || formik.values.password != "") && formik.errors.password ? (<div className={'text-danger'}>{formik.errors.password}</div>) : null}
                                                    <div className={'password-eye '}>
                                                        {showPassword ? <img src={eye} alt="eye" onClick={handleShowPassword} /> :
                                                            <img src={eyeoff} alt="eye-off" onClick={handleShowPassword} />}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="row justify-content-between align-items-center px-4">
                                                    <div className="col-6 p-0">
                                                        {/* <div className="form-check text-start m-0">
                        <input className="form-check-input m-0" type="checkbox" value="" name="remember_me" id="remember_me"/>
                        <label className="form-check-label text-secondary" htmlFor="remember_me">
                          Remember me
                        </label>
                      </div> */}
                                                    </div>
                                                    <div className="col-6 p-0">
                                                        <div className="text-end">
                                                            <a href="#!" className="link-secondary text-decoration-none">Forgot password?</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-grid">
                                                    <button className="btn btn-primary btn-lg" type="submit" disabled={!(formik.isValid && formik.dirty)}>{formik.isSubmitting ? 'Submitting...' : 'Submit'}</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-12  col-lg-8 d-flex align-items-center">
                                    <div className="d-flex gap-3 flex-column w-100 ">
                                        <a href="#!" className="btn btn-md btn-danger">
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

export default LoginForm