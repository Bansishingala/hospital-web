import React, { useState } from 'react';
import * as yup from 'yup';
import { Form, useFormik, Formik } from 'formik';


function Lform(props) {
    const [user, setUser] = useState('login');
    const [reset, setReset] = useState(false)




    let schema = yup.object().shape({
        email: yup.string().email("please enter valid Email Id").required("please enter Email Id"),
        password: yup.string().required("Please enter Password"),
    });
        const formik = useFormik({
            initialValues: {
                email: '',
                password: '',
            },
            validationSchema : schema,
            onSubmit: values => {
                alert(JSON.stringify(values, null, 2));
            },
        });
        const {handleChange , errors , handleSubmit} = formik;

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
                            <Form action method="post" onSubmit={handleSubmit}  role="form" className="php-email-form">
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
                                                />
                                                <div className="validate" />
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
                                    />
                                    <p>{errors.email}</p>
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
                                            />
                                            <p>{errors.password}</p>
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