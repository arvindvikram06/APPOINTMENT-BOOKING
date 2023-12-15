import React, { useState } from 'react'
import signupImg from '../assets/images/signup.gif'
import { Link, useNavigate } from 'react-router-dom'
import uploadImageToCloudinary from '../utils/uploadCloudinary'
import { BASE_URL } from "../config.js"
import { toast } from "react-toastify"
import HashLoader from 'react-spinners/HashLoader.js'


const Signup = () => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("")
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    photo: selectedFile,
    gender: 'male',
    role: 'patient',
  });

  const navigate = useNavigate()

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const fileInputChange = async (event) => {
    const file = event.target.files[0]

    const data = await uploadImageToCloudinary(file)
    //  console.log(data)
    setPreviewURL(data.url);
    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url })


    ////////////////////////use cloudinary
  }





  const SubmitHandler = async (e) => {
    // console.log(formData);
    e.preventDefault();
    setLoading(true)

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const { message } = await res.json() //getting msg from json

      if (!res.ok) {
        throw new Error(message)
      }
      setLoading(false)
      toast.success(message)
      navigate('/login')

    }
    catch (err) {
      toast.error(err.message)
      setLoading(false)
    }
  }




  return (
    <section className='px-5 xl:px-0'>
      <div className='max-w-[1170px] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>

          {/* =================================imgbox=========================== */}
          <div className='hidden lg:block bg-primaryColor rounded-l-lg'>
            <figure className='rounded-l-lg'>
              <img src={signupImg} alt='' className='w-full rounded-l-lg' />
            </figure>
          </div>
          {/* =============================input form====================================== */}
          <div className='rounded-l-lg lg:pl-16 py-10'>
            <h3 className='text-headingColor text-[22px] leading-9
                  -bold  mb-10'>
              Create an <span
                className='text-primaryColor'>account</span>
            </h3>

            <form onSubmit={SubmitHandler}>
              <div className='mb-5 mx-5'>
                <input type="text"
                  className='w-full border border-solid [#A3F3EB] focus:outline-none focus:border-2 focus:border-primaryColor rounded-md leading-9 px-4 py-2
              placeholder-textColor text-textColor cursor-pointer'
                  placeholder='Full Name'
                  name='name'
                  value={formData.name}
                  onChange={handleFormChange}
                  required />

              </div>

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
                  required />

              </div>

              <div className='mb-5 flex items-center justify-between'>
                <label htmlFor='' className='text-headingColor font-bold text-[16px]
                leading-7'>
                  Are you a:
                  <select name='role'
                    value={formData.role}
                    onChange={handleFormChange}
                    className='text-textColor font-semibold text-[15px] leading-7
                  px-4 py-3  focus:outline-none' required>
                    <option value="patient">Patient</option>
                    <option value='doctor'>Doctor</option>
                    <option value='admin'>Admin</option>
                  </select>
                </label>
                <label htmlFor='' className='text-headingColor font-bold text-[16px]
                leading-7'>
                  Gender:
                  <select name='gender'
                    value={formData.gender}
                    onChange={handleFormChange}
                    className='text-textColor font-semibold text-[15px] leading-7
                  px-4 py-3  focus:outline-none' required>
                    <option value="male">male</option>
                    <option value='female'>female</option>

                  </select>
                </label>
              </div>

              <div className='mb-5 flex items-center gap-3'>
                {selectedFile && <figure className='w-[60px] h-[60px] rounded-full border-2
                border-solid border-primaryColor flex items-center justify-center'>
                  <img src={previewURL} alt='' className='w-full rounded-full' />
                </figure>}
                <input
                  type='file'
                  onChange={fileInputChange}
                  name='photo'
                  id='customFile'
                  accept='.jpg,.png'
                />
              </div>

              <div className='mx-5 mt-5'>
                <button disabled = {loading && true} 
                className='btn w-full rounded-md text-[20px]' type='submit'>
                  {loading ? <HashLoader size={30} color='#fffff'/> : "Register"}
                </button>
              </div>
              <div className='text-center'>
                <p className='text-textColor font-[14px] mt-[30px]'>
                  Aldready have account? <Link to='/login'>
                    <span className='text-primaryColor font-[14px]'>
                      Login
                    </span>
                  </Link>
                </p>
              </div>
            </form>
          </div>








        </div>

      </div>
    </section>
  )
}

export default Signup