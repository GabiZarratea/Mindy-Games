import React, { useRef, useState } from 'react'
import Swal from 'sweetalert2';
import { api, apiUrl, endpoints } from '../utils/api.js'
import { LS } from '../utils/localStorageUtils.js';
import { useDispatch } from 'react-redux';
import { setToken, setUser, setPhoto } from '../redux/actions/user.js';
import { useNavigate } from 'react-router-dom';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(true);
    const inputEmail = useRef('');
    const inputPassword = useRef('');


    const handleClickLogin = async (event) =>{
        event.preventDefault()
        const data = {
            email: inputEmail.current.value,
            password: inputPassword.current.value,
        };

        try {
            const response = await api.post(apiUrl + endpoints.login, data);
            console.log(response);
            if (response.data.success) {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'User signed in!',
                showConfirmButton: false,
                timer: 1500,
              });
      
              const { user, photo, token } = response.data.response;
      
              LS.add('token', token)
              dispatch(setUser(user));
              dispatch(setPhoto(photo));
      
              navigate('/');
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Failed to login!',
              });
            }
          } catch (error) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error.message,
            });
          }
    }

  return (
    <div className='w-full flex justify-center items-center'>
        <form id="registrationForm" className='bg-white w-[35%] flex flex-col justify-center items-center rounded-3xl m-6 absolute top-[20%] p-6'>
            <div className=''>
                <div className='w-full flex justify-around'>
                    <h2 className='font-semibold text-slate-600 text-2xl'>We are glad to see you again!</h2>
                    <div className='me-[-20%]'>
                        <button className='flex justify-end me-10' onClick={() => setIsLoginModalOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-x text-fuchsia-400" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='m-2 flex flex-col items-start w-full pe-4'>
                    <label className='text-fuchsia-400 p-2'>Usename or Email: </label>
                    <input name="username" type='text' className='border-2 rounded-xl p-2 w-full' ref={inputEmail}/>
                </div>
                <div className='m-2 flex flex-col items-start w-full pe-4'>
                    <label className='text-fuchsia-400 p-2'>Password: </label>
                    <input name="password" type='password' className='border-2 rounded-xl p-2 w-full' ref={inputPassword}/>
                </div>
                <div className='flex p-2 w-full justify-center'>
                    <button className='bg-fuchsia-400 p-2 font-semibold rounded-md m-2 text-white' onClick={handleClickLogin}>Login</button>
                    <button className='bg-slate-400 p-2 font-semibold rounded-md m-2 text-white' onClick={() => setIsLoginModalOpen(false)}>Cancel</button>
                </div>
            </div>
        </form>
    </div> 
  )
}


export default Login