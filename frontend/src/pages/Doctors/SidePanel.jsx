import React from 'react'
import Booking from './Booking'
import { useState } from 'react'
const SidePanel = () => {

    const [book,setBook] = useState("button")
  return (
      <div className=''>
        <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
            <div className='flex items-center justify-between'>
                <p className='mt-3 text-[16px] lg:text-[22px] leading-4 lg:leading-6 text- font-semibold text-irisBlueColor'>
                    Consultancy fee : 
                </p>
                <h5 className='mt-3 text-[22px] text-headingColor leading-4 font-[700]'>500</h5>
            </div>
            <div className='mt-[30px] font-semibold text-textColor font-[400]'>
                Available Slots : 
            </div>
            <div className=''>
                <ul className='mt-3'>
                    <li className='mt-5 flex items-center justify-between'>
                        <p className='text-[13px] text-headingColor leading-4 font-semibold'>
                            Sunday
                        </p>
                        <p className='text-[13px] text-headingColor leading-4 font-semibold'>
                           9:30 AM to 4:30 PM
                        </p>
                    </li>
                    <li className='mt-5 flex items-center justify-between'>
                        <p className='text-[13px] text-headingColor leading-4 font-semibold'>
                            Monday
                        </p>
                        <p className='text-[13px] text-headingColor leading-4 font-semibold'>
                           9:30 AM to 4:30 PM
                        </p>
                    </li>
                    <li className='mt-5 flex items-center justify-between'>
                        <p className='text-[13px] text-headingColor leading-4 font-semibold'>
                            Tuesday
                        </p>
                        <p className='text-[13px] text-headingColor leading-4 font-semibold'>
                           9:30 AM to 4:30 PM
                        </p>
                    </li>
                </ul>
            </div>

            {
                book === 'button' && <button className='btn w-full rounded-md mx-auto' onClick={()=>setBook('book')}>
                Book Appointment</button>
             || <Booking/>
            }
        
            
        </div>
      </div>
  )
}

export default SidePanel