import React, { useState, useContext} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
import { BASE_URL } from '../config';
import {authContext} from '../context/AuthContext.jsx';
import HashLoader from "react-spinners/HashLoader";
const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [loading, setLoading] = useState(false)
const navigate = useNavigate('')
const {dispatch} = useContext(authContext)

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  const SubmitHandler = async (e) => {
    // console.log(formData);
    e.preventDefault();
    setLoading(true)

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const result = await res.json() //getting msg from json

      if (!res.ok) {
        throw new Error(result.message)
      }
      dispatch({
        type:"LOGIN_SUCCESS",
        payload:{
          user:result.data,
          token:result.token,
          role: result.role,
        },
      });
      console.log(result, "login data")


      setLoading(false)
      toast.success(result.message)
      navigate('/home')

    }
    catch (err) {
      toast.error(err.message)
      setLoading(false)
    }
  }



  return (
    <section>
      <div className='w-full max-w-[578px] mx-auto rounded-lg shadow-md md:p-10'>
        <h2 className='text-headingColor text-[24px] font-semibold mb-10 leading-9 mx-5'>
          Hello!    <span className='text-primaryColor text-[22px] font-semibold'>Welcome </span>back
        </h2>
        <form className='py-3 md:py-0' onSubmit={SubmitHandler}>
          <div className='mb-5 mx-5'>
            <input type="email"
            className='w-full border border-solid [#A3F3EB] focus:outline-none focus:border-2 focus:border-primaryColor rounded-md leading-9 px-4 py-2
            placeholder-textColor text-textColor cursor-pointer'
             placeholder='enter your Email' 
             name='email'
             value={formData.email}
             onChange={handleFormChange}
             required
              />
          </div>
          <div className='mb-5 mx-5'>
            <input type="password" 
              className='w-full border border-solid [#A3F3EB] focus:outline-none focus:border-2 focus:border-primaryColor rounded-md leading-9 px-4 py-2
              placeholder-textColor text-textColor cursor-pointer'
            placeholder='enter your Password' 
            name='password' 
            value={formData.password}
            onChange={handleFormChange} 
            required/>
           
          </div>
          <div className='mx-5 mt-5'>
            <button className='btn w-full rounded-md text-[20px]' type='submit'>
              {loading? <HashLoader size={30} color="#fff" /> : 'Login'}
            </button>
          </div>
          <div className='text-center'>
          <p className='text-textColor font-[14px] mt-[30px]'>
                   Don't have account? <Link to='/register'>
                   <span className='text-primaryColor font-[14px]'>
                    Register
                   </span>
                   </Link>
          </p>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login