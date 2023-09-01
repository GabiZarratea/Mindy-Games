import React, { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link as Anchor, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import { api, apiUrl, endpoints } from '../utils/api.js'
import { LS } from '../utils/localStorageUtils.js';
import { setUser, setPhoto } from '../redux/actions/user.js';
import isLoggedIn from './isLoggedIn'

export default function NavBar() {

  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('')
  const [formData, setFormData] = useState({ username: '', email: '', photo: '', location: '', password: '' });
  
  const username = useSelector((state) => state.user.user);
  const photo = useSelector((state) => state.user.photo);

  const userLoggedIn = isLoggedIn()
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputEmail = useRef('');
  const inputPassword = useRef('');
  
  let token = LS.get('token')

  const handleClickLogin = async (event) => {
    event.preventDefault();
    const data = {
      email: inputEmail.current.value,
      password: inputPassword.current.value,
    };

    try {
      const response = await api.post(apiUrl + endpoints.login, data);
      if (response.data.success) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          iconColor: '#FF76E6',
          title: 'User signed in!',
          showConfirmButton: false,
          confirmButtonColor: '#FF76E6',
          timer: 1500,
        });

        const { username, photo, token } = response.data.response;

        if (username && typeof username === 'string' && username.trim() !== '') {
          LS.add('username', username);
        }        
        LS.add('token', token);
        LS.add('photo', photo);
        dispatch(setUser(username));
        dispatch(setPhoto(photo));
      } else {
        Swal.fire({
          icon: 'error',
          iconColor: '#FF76E6',
          title: 'Oops...',
          text: 'Failed to login!',
        });
      }

      setIsLoginModalOpen(false);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        iconColor: '#FF76E6',
        title: 'Oops...',
        text: error.message,
      });
    }
  };

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
          const response = await api.post(apiUrl + endpoints.register, formData)
          Swal.fire({
              text: 'User created successfully!',
              icon: 'success',
              iconColor: '#FF76E6',
              confirmButtonText: 'Ok',
              confirmButtonColor: '#FF76E6'
          })
          setIsRegisterModalOpen(false)
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

const signout = async () => {
  try {
    await api.post(apiUrl + endpoints.signout, null, {
      headers: { Authorization: `Bearer ${token}` },
    });

    Swal.fire({
      position: 'center',
      icon: 'success',
      iconColor: '#FF76E6',
      title: 'Logout successful!',
      confirmButtonColor: '#FF76E6',
      showConfirmButton: false,
      timer: 1500,
    });

    LS.remove('token');
    dispatch(setUser(null));
    dispatch(setPhoto(null));

    navigate('/');
  } catch (error) {
    Swal.fire({
      icon: 'error',
      iconColor: '#FF76E6',
      title: 'Oops...',
      text: error,
      timer: 1500,
    });
  }
};

const fetchUserData = async () => {
  try {
    const response = await api.get(apiUrl + endpoints.signintoken, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const { user, photo } = response.data.response;

    dispatch(setUser(user));
    dispatch(setPhoto(photo));
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  const storedUsername = LS.get('username');
  const storedPhoto = LS.get('photo');
  
  if (storedUsername && storedPhoto) {
    dispatch(setUser(storedUsername));
    dispatch(setPhoto(storedPhoto));
  }

  if (!username) fetchUserData()
}, []);


  return (
    <div>
      <div className='min-h-[5vh] w-full bg-fuchsia-300 items-center flex justify-around'>
          {!userLoggedIn ? (
            <div className='w-[80%] flex justify-between items-center my-4'>
              <div className='flex'>
                <Anchor to={'/'} className='mx-4 font-semibold text-slate-800'> Home </Anchor>
                <Anchor to={'/AboutUs'} className='mx-4 font-semibold text-slate-800'> About Us </Anchor>
                <Anchor to={'/Contact'} className='mx-4 font-semibold text-slate-800'> Contact </Anchor>
                <Anchor to={'/BenefitsAndTips'} className='mx-4 font-semibold text-slate-800'> Benefits And Tips </Anchor>
                <Anchor to={'/MoreInformation'} className='mx-4 font-semibold text-slate-800'> More Information </Anchor>
                <Anchor to={'/Raffle'} className='mx-4 font-semibold text-slate-800'> Raffle </Anchor>
              </div>
              <div className='w-[20%] flex justify-end'>
                <button className='mx-4 font-semibold text-slate-800' onClick={() => setIsLoginModalOpen(true)}>Login</button>
                <p className='mx-4 font-semibold text-slate-800'>|</p>
                <button className='mx-4 font-semibold text-slate-800' onClick={() => setIsRegisterModalOpen(true)}>Register</button>
                <img src="/logo.png" alt="LogoMindy" className='h-[4vh]'/>
              </div>
            </div>
          ) : (
            <div className='w-[80%] flex justify-between items-center my-4'>
              <div className='flex'>
                <Anchor to={'/'} className='mx-4 font-semibold text-slate-800'> Home </Anchor>
                <Anchor onClick={signout} className='mx-4 font-semibold text-slate-800'> Log Out </Anchor>
              </div>
              <div className='flex justify-end items-center'>
                <p className='me-4'>{username}</p>
                <img src={photo} alt="Profile Photo" className='h-[6vh] rounded-3xl'/>
              </div>
            </div>
          )}
      </div>
      <div className={isRegisterModalOpen ? 'fixed top-0 left-0 w-full h-full bg-black bg-opacity-70' : ''}>
       { isRegisterModalOpen && 
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
      }
      </div>
      <div className={isLoginModalOpen ? 'fixed top-0 left-0 w-full h-full bg-black bg-opacity-70' : ''}>
       { isLoginModalOpen && 
           <div className='w-full flex justify-center items-center'>
           <form id="registrationForm" className='bg-white w-[35%] flex flex-col justify-center items-center rounded-3xl m-6 absolute top-[20%] p-6'>
               <div className=''>
                   <div className='w-full flex justify-around'>
                       <h2 className='font-semibold text-slate-600 text-2xl'>We are glad to see you again!</h2>
                       <div className='me-[-20%]'>
                           <button type='button' onClick={() => setIsLoginModalOpen(false)} className='flex justify-end me-10'>
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
       }
       
      </div>
    </div>
  )
}