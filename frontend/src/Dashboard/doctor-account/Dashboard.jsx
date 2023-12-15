import React, { useEffect } from 'react'
import { authContext } from '../../context/AuthContext'
import useGetProfile from "../../hooks/useFetchData"
import { BASE_URL } from '../../config'
import DoctorProfile from './DoctorProfile'
import { useContext } from 'react'
import { useState } from 'react'
const Dashboard = () => {
  const {dispatch} = useContext(authContext)
  const [tab,setTab] = useState('bookings')
 
  
  
   const {data:doctorData , loading, error} = useGetProfile(`${BASE_URL}/doctors/profile/me`)  
  
  

   const handleLogout = () => {
    dispatch({type: "LOGOUT"})
   }

  return (
    <section>
    <div className='max-w-[1170px] px-5  mx-auto'>
        
        <div className='grid md:grid-cols-3 gap-10'>
        
            <div className='pb-[50px] px-[30px] rounded-md'>
                <div className='flex items-center justify-center'>
                    <figure className='w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor'>
                        <img src={doctorData.photo} alt=''  
                        className='w-full h-full rounded-full'/>
                    </figure>
                </div>
                <div className='text-center mt-4'>
                    <h3 className='text-[18px] leading-[30px] text-headingColor font-bold '>{doctorData.name}</h3>
                    <p className='text-textColor text-[15px] leading-6 font-medium'>
                        {doctorData.email}
                    </p>
               
                </div>
            <div className='mt-[50px] md:mt-[100px]'>
                <button className='w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white'onClick={handleLogout}>Logout</button>
                <button className='w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md' >
                    Delete Account
                </button>
            </div>



            </div>

            <div className='md:col-span-2 md:px-[30px]'>
                <div>
                    <button onClick={()=>setTab('appointments')} className={` ${tab==='bookings' && 'bg-primaryColor text-white font-normal'}p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`
            }>
                        MY Appointments
                    </button>
                    <button onClick={()=>setTab('settings')}className={` ${tab==='settings' && 'bg-primaryColor text-white font-normal'}p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`
                
                }>
                       Profile settings
                    </button>
                </div>
            {
                tab === 'appointments' && <MyBooking/>
            }
            {
                tab === 'settings' && <DoctorProfile doctor={doctorData}/>
            }




            </div>





        </div>
    </div>
    </section>
  )
}

export default Dashboard