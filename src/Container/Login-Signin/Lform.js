import React, { useState } from 'react';

function Lform(props) {
    const [user, setUser] = useState('login');
    return (
        <center>
            <section>
                <div className="container">
                    <div className="section-title">
                        {
                            user === "login" ?
                                <h2>login</h2> :
                                <h2>Signup</h2>
                        }
                    </div>
                    <div action method="post" role="form" className="php-email-form">
                        {
                            user === "login" ?
                                null
                                :
                                <div className="col-md-4 form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <div className="validate" />
                                </div>
                        }
                        <div className="col-md-4 form-group mt-3 mt-md-0">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            <div className="validate" />
                        </div>
                        <div className="col-md-4 form-group mt-3 mt-md-0">
                            <input type="password" className="form-control" name="password" id="password" placeholder="Your password" data-rule="password" data-msg="Please enter a password" />
                            <div className="validate" />
                        </div>
                        {
                            user === "login" ?
                                <div class="text-center"><button type="submit">Login</button></div>
                            :
                                <div class="text-center"><button type="submit">Signup</button></div>
                        }
                        {
                            user === "login" ?
                                <div className="text-center">
                                    <span>Creat a new Account ? <button onClick={() => setUser("signup")}>Signup</button></span>
                                </div>
                                :
                                <div className="text-center">
                                    <span>Creat a new Account ? <button  onClick={() => setUser("login")}>Login</button></span>
                                </div>
                        }
                    </div>
                </div>
            </section>
        </center>

    );
}

export default Lform;