import { Formik, useFormik, Form } from 'formik';
import React from 'react';
import { NavLink } from 'react-router-dom';
import * as yup from 'yup';
import { useHistory } from "react-router-dom"

function List_apt(props) {
    let schema = yup.object().shape({
        name: yup.string().required("Please Enter Your Name"),
        email: yup.string().email("Please Enter Valid Email").required("Please Enter Your Email"),
        phone: yup.string().required("Please Enter Your Phone Number"),
        date: yup.string().required("Please Enter Your Appoment Date"),
        department: yup.string().required("Please Select Any Department")
    });
    const handleInsert = (values) => {
        let Ldata = JSON.parse(localStorage.getItem("B-apt"))
        let id =Math.floor(Math.random()*1000)
        let data = {
            id,
            ...values
        }
        if(Ldata === null){
            localStorage.setItem("B-apt" , JSON.stringify([data]))
        }else{
            Ldata.push(data)
            localStorage.setItem("B-apt" , JSON.stringify(Ldata))
        }
        console.log([data]);

    }
    const history = useHistory()
    
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            department: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            handleInsert(values)
            history.push("/List-apt")
        },
        enableReinitialize: true,
    });

    const { handleSubmit, handleBlur, handleChange, touched, errors } = formik

    return (
        <div>
            <main>
                <section id="appointment" className="appointment">
                    <div className="container">
                        <div className="section-title">
                            <h2>Book an Appointment</h2>
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <NavLink exact to={"/Book-apt"} >Book An Appointment</NavLink>
                            </div>
                            <div className='col-6'>
                                <NavLink exact to={'/List_apt'} >list An Appointment</NavLink>
                            </div>
                        </div>
                        <Formik values={formik}>
                            <Form onSubmit={handleSubmit} className="php-email-form">
                                <div className="row">
                                    <div className="col-md-4 form-group">
                                        <input type="text"
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
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input type="email"
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
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input type="tel"
                                            className="form-control"
                                            name="phone"
                                            id="phone"
                                            placeholder="Your Phone"
                                            data-rule="minlen:4"
                                            data-msg="Please enter at least 4 chars"
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                        <p className='text-danger'>{errors.phone && touched.phone ? errors.phone : ''}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 form-group mt-3">
                                        <input type="datetime
                                    " name="date"
                                            className="form-control datepicker"
                                            id="date"
                                            placeholder="Appointment Date"
                                            data-rule="minlen:4"
                                            data-msg="Please enter at least 4 chars"
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                        <p className='text-danger'>{errors.date && touched.date ? errors.date : ''}</p>
                                    </div>
                                    <div className="col-md-4 form-group mt-3">
                                        <select name="department" id="department" className="form-select" onChange={handleChange}
                                            onBlur={handleBlur}>
                                            <option value>Select Department</option>
                                            <option value="Department 1">Department 1</option>
                                            <option value="Department 2">Department 2</option>
                                            <option value="Department 3">Department 3</option>

                                        </select>
                                        <p className='text-danger'>{errors.department && touched.department ? errors.department : ''}</p>
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" rows={5} placeholder="Message (Optional)" onChange={handleChange}
                                        onBlur={handleBlur} defaultValue={""} />
                                    <div className="validate" />
                                </div>
                                <div className="mb-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Make an Appointment</button></div>
                            </Form>
                        </Formik>
                    </div>
                </section>
            </main>

        </div>
    );
}

export default List_apt;