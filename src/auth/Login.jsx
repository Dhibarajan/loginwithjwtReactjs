import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

function Login({ props }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            "username": "m.sathishkumar33333@gmail.com",
            "password": "1$hZ8888"
        }

        axios.post('http://test-api.doctall.com/api/v1/user/auth/Doctorlogin', data)
            .then(res => {
                localStorage.setItem('auth', JSON.stringify(res.data.token))
                console.log(res.data.token)
                window.location = '/home'
                return toast.success("Success Notification !", {
                    position: toast.POSITION.TOP_CENTER
                });
            }
            )
            .catch(err => {
                console.log(err)
                return toast.error("Error Notification !");
            })
    }
    // let hasToken = JSON.parse(localStorage.getItem('auth'));
    // if (hasToken !== null) {
    //     return window.location = '/home'
    // }
    // else {
    //     return window.location = '/'
    // }
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
            <form style={{ width: '50%' }} onSubmit={handleSubmit}>
                <h1 style={{ textAlign: 'center' }}>Login</h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Login
