import React, { useState } from 'react'
import Swal from 'sweetalert2';
import { apiUrl, endpoints } from '../utils/api.js'
import axios from 'axios'

function Register() {
    
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(true);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        photo: '',
        location: '',
        password: '',
    });
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleClickRegister = async (event) =>{
        event.preventDefault()

        if(formData.password !== confirmPassword){
            Swal.fire({
                text: 'The passwords entered do not match.',
                icon: 'error',
                iconColor: '#FF76E6',
                confirmButtonText: 'Retry',
                confirmButtonColor: '#FF76E6'
              })
        }
        else{
            try {
                const response = await axios.post(apiUrl + endpoints.register, formData)
                Swal.fire({
                    text: 'User created successfully!',
                    icon: 'success',
                    iconColor: '#FF76E6',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#FF76E6'
                })
            } 
            catch(error) {
                console.log(error)
                Swal.fire({
                    text: error.response.data.message,
                    icon: 'error',
                    iconColor: '#FF76E6',
                    confirmButtonText: 'Retry',
                    confirmButtonColor: '#FF76E6'
                })
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "confirmPassword") {
            setConfirmPassword(value);
        }
        else{
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: value,
            }));
        }
    };

  return (
    <div className='w-full flex justify-center items-center'>
        <form id="registrationForm" className='bg-white w-[35%] flex flex-col justify-center rounded-3xl m-6 absolute top-0 p-6'>
            <div className=''>
                <div className='w-full flex justify-around ms-[20%]'>
                    <h2 className='font-semibold text-slate-600 text-2xl'>Welcome!</h2>
                    <div className='text-end'>
                        <button className='flex justify-end me-10' onClick={() => setIsRegisterModalOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-x text-fuchsia-400" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='m-2 flex flex-col items-start w-full pe-4'>
                    <label className='text-fuchsia-400 p-2'>Usename: </label>
                    <input name="username" type='text' className='border-2 rounded-xl p-2 w-full' value={formData.username} onChange={handleChange} />
                </div>
                <div className='m-2 flex flex-col items-start w-full pe-4'>
                    <label className='text-fuchsia-400 p-2'>Email: </label>
                    <input name="email" type='email' className='border-2 rounded-xl p-2 w-full' value={formData.email} onChange={handleChange} />
                </div>
                <div className='m-2 flex flex-col items-start w-full pe-4'>
                    <label className='text-fuchsia-400 p-2'>Photo: </label>
                    <input name="photo" type='text' className='border-2 rounded-xl p-2 w-full' value={formData.photo} onChange={handleChange} />
                </div>
                <div className='m-2 flex flex-col items-start w-full pe-4'>
                    <label className='text-fuchsia-400 p-2'>Location: </label>
                    <input name="location" type='text' className='border-2 rounded-xl p-2 w-full' value={formData.location} onChange={handleChange} />
                </div>
                <div className='m-2 flex flex-col items-start w-full pe-4'>
                    <label className='text-fuchsia-400 p-2'>Password: </label>
                    <input name="password" type='password' className='border-2 rounded-xl p-2 w-full' value={formData.password} onChange={handleChange} />
                </div>
                <div className='m-2 flex flex-col items-start w-full pe-4'>
                    <label className='text-fuchsia-400 p-2'>Enter your password again: </label>
                    <input name="confirmPassword" type='password' className='border-2 rounded-xl p-2 w-full' value={confirmPassword} onChange={handleChange} />
                </div>
                <div className='flex p-2 w-full justify-center'>
                    <button className='bg-fuchsia-400 p-2 font-semibold rounded-md m-2 text-white' onClick={handleClickRegister}>Register</button>
                    <button className='bg-slate-400 p-2 font-semibold rounded-md m-2 text-white' onClick={() => setIsRegisterModalOpen(false)}>Cancel</button>
                </div>
            </div>
        </form>
    </div> 
  )
}


export default Register