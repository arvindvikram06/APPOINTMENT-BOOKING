import React, { useState,useEffect } from 'react'


import { useNavigate } from 'react-router-dom'
import uploadImageToCloudinary from '../../utils/uploadCloudinary.js'
import { BASE_URL,token } from "../../config.js"
import { toast } from "react-toastify"
import HashLoader from 'react-spinners/HashLoader.js'


const Profile = ({user}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("")
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    photo: null,
    gender: 'male',
    role: 'patient',
  });
  useEffect(() => {
    setFormData({
      name: user.name,
      email: user.email,
      photo: user.photo,
      gender: user.gender,
    });
  }, [user]);
  const navigate = useNavigate()

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const fileInputChange = async (event) => {
    const file = event.target.files[0]

    const data = await uploadImageToCloudinary(file)
    //  console.log(data)
    
    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url })


    ////////////////////////use cloudinary
  }





  const SubmitHandler = async (e) => {
    // console.log(formData);
    e.preventDefault();
    setLoading(true)

    try {
      const res = await fetch(`${BASE_URL}/users/${user._id}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      })
      const { message } = await res.json() //getting msg from json

      if (!res.ok) {
        throw new Error(message)
      }
      setLoading(false)
      toast.success(message)
      navigate('/users/profile/me')

    }
    catch (err) {
      toast.error(err.message)
      setLoading(false)
    }
  }


  return (
    
    <div className='container mt-5'>
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
                  aria-readOnly
                  readOnly
                />
              </div>

           

              <div className='mb-5 flex items-center justify-between'>
              
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
                {formData.photo && <figure className='w-[60px] h-[60px] rounded-full border-2
                border-solid border-primaryColor flex items-center justify-center'>
                  <img src={formData.photo} alt='' className='w-full rounded-full' />
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
                  {loading ? <HashLoader size={30} color='#fffff'/> : "Update"}
                </button>
              </div>
              <div className='text-center'>
                
              </div>
            </form>
    </div>
  )
}

export default Profile