import React from 'react'
import HashLoader from 'react-spinners/HashLoader'
import { useState } from 'react'
import { authContext } from '../../context/AuthContext'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { BASE_URL,token } from '../../config'
const Booking = () => {
    const { user } = useContext(authContext)
    const {_id} = user
    const doctor = useParams().id
    console.log("this is doctor",doctor)
    const [Loading,setLoading] = useState(false)
    const [formData,setformData] = useState({
        doctorId : doctor,
        userId: _id,
        appointmentDate: "",
        ticketPrice:"500"

    })

    const handleForm = (e) =>{
        setformData({...formData,[e.target.name]:e.target.value})
        console.log(formData)
    }

     const submitHandler = async(e) =>{
        e.preventDefault()
        try {
            const res = await fetch(`${BASE_URL}/bookings`, {
              method: 'post',
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
            
      
          }
          catch (err) {
            toast.error(err.message)
            setLoading(false)
          }
        }
     
  return (
    <div className='mb-5 mx-5 mt-[30px]'>
                <form className='py-3 md:py-0' onSubmit={submitHandler}>
          <div className='mb-5 mx-5'>
            <input type="text" 
              className='w-full border border-solid [#A3F3EB] focus:outline-none focus:border-2 focus:border-primaryColor rounded-md leading-9 px-4 py-2
              placeholder-textColor text-textColor cursor-pointer'
            placeholder='enter your date' 
            name='appointmentDate' 
            onChange={handleForm}
           
            required/>
           
          </div>
          <div className='mx-5 mt-5'>
            <button className='btn w-full rounded-md text-[20px]' type='submit'>
              {Loading? <HashLoader size={30} color="#fff" /> : 'Book Appointment'}
            </button>
          </div>
        </form>
              </div>
  )
}

export default Booking