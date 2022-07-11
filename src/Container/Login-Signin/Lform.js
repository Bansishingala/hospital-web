import React, { useState } from 'react';
import * as yup from 'yup';
import { Form, useFormik, Formik } from 'formik';


function Lform(props) {
    const [user, setUser] = useState('login');
    const [reset, setReset] = useState(false)

    
    let schemaobj, intialval;
    if (user === "login") {
        schemaobj = {
            email: yup.string().email("please enter valid Email Id").required("please enter Email Id"),
            password: yup.string().required("Please enter Password"),
        }
        intialval = {
            email: '',
            password: ''
        }
    } else if (user === "signup") {
        schemaobj = {
            name: yup.string().required("please enter your name"),
            email: yup.string().email("please enter valid Email Id").required("please enter Email Id"),
            password: yup.string().required("Please enter Password"),
        }
        intialval = {
            name: '',
            email: '',
            password: ''
        }
    }
    const  handleLogin = () => {
        localStorage.setItem("user" , "1234567890")
    }
    const handleData = (values) => {
        let localData = JSON.parse(localStorage.getItem("user"));


        if (localData === null) {
            localStorage.setItem("user", JSON.stringify([values]))
        } else {
            localData.push(values)
            localStorage.setItem("user", JSON.stringify("localData"));

        }
    }

    let schema = yup.object().shape(schemaobj);
    const formik = useFormik({
        initialValues: intialval,
        validationSchema: schema,
        onSubmit: values => {
            if (user === 'login') {
                handleLogin()
            } else {
                handleData(values)
            }
        },
    });
    const { handleChange, errors, handleSubmit, touched, handleBlur } = formik;

    return (
        <center>
            <section>
                <div className="container">
                    <div className="section-title">
                        {reset === "true" ?
                            <h2>Forgot password</h2> :
                            user === "login" ?
                                <h2>login</h2> :
                                <h2>Signup</h2>
                        }
                    </div>
                    <Formik values={formik}>
                        <Form action method="post" onSubmit={handleSubmit} role="form" className="php-email-form">
                            {
                                reset === "true" ?
                                    null :
                                    user === "login" ?
                                        null
                                        :
                                        <div className="col-md-4 form-group">
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                id="name"
                                                placeholder="Your Name"
                                                data-rule="minlen:4"
                                                data-msg="Please enter at least 4 chars"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <p className='text-danger'>{errors.name && touched.name ? errors.name : ''}</p>
                                        </div>
                            }
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    data-rule="email"
                                    data-msg="Please enter a valid email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p className='text-danger'>{errors.email && touched.email ? errors.email : ''}</p>
                            </div>
                            {
                                reset === "true" ?
                                    null :
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            id="password"
                                            placeholder="Your password"
                                            data-rule="password"
                                            data-msg="Please enter a password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <p className='text-danger'>{errors.password && touched.password ? errors.password : ''}</p>
                                    </div>
                            }

                            {
                                reset === "true" ?
                                    <div class="text-center"><button className='s-btn' type="submit">Submit</button></div>
                                    :
                                    user === "login" ?
                                        <div class="text-center"><button className='s-btn' type="submit">Login</button></div>
                                        :
                                        <div class="text-center"><button className='s-btn' type="submit">Signup</button></div>
                            }
                            {

                                user === "login" ?
                                    <div className="text-center">
                                        <span>Creat a new Account ? <button className='s-btn' onClick={() => { setReset('false'); setUser("signup") }}>Signup</button></span>
                                    </div>
                                    :
                                    <div className="text-center">
                                        <span>Already a account </span><button className='s-btn' onClick={() => { setReset('false'); setUser("login") }}>Login</button>
                                    </div>
                            }
                            <div className="text-center"><button type="submit" className='s-btn' onClick={() => setReset('true')}>Forgot password</button></div>

                        </Form>
                    </Formik>
                </div>

            </section>
        </center>

    );
}

export default Lform;