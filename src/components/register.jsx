import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import '../styles/register.css';
import '../styles/index.css';
import { useNavigate } from 'react-router-dom';

function Register() {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        displayName: '',
        email: ''
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate()

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const toastOptions = {
        duration: 1500
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post('https://devmemos.iran.liara.run/auth/register', formData)
            .then((res) => { toast.success(res.data.response, toastOptions), clearInputs(), setErrors({}), navigate('/login') })
            .catch(err => setErrors(err.response.data.response))
    };

    const clearInputs = () => {
        setFormData({
            username: '',
            password: '',
            displayName: '',
            email: ''
        });
        console.log(formData)
    }

    return (
        <div className="wrapper">

            <form onSubmit={handleSubmit}>
                <h1 className='form-header'>Login.</h1>
                <div className="input-group">
                    <input type="text" required name="username" value={formData.username} onChange={handleChange} />
                    <span>{errors.username && errors.username}</span>
                </div>

                <div className="input-group">
                    <input type="text" required name="password" value={formData.password} onChange={handleChange} />
                    <span>{errors.password && errors.password}</span>

                </div>

                <div className="input-group">

                    <input type="text" required name="displayName" value={formData.displayName} onChange={handleChange} />
                    <span>{errors.displayName && errors.displayName}</span>
                </div>

                <div className="input-group">
                    <input type="text" required name="email" value={formData.email} onChange={handleChange} />
                    <span>{errors.email && errors.email}</span>

                </div>

                <button type="submit">Register</button>
                <Toaster />
            </form>
        </div>
    );
}

export default Register;
